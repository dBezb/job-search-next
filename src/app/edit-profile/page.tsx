'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useAuth } from '@/lib/authContext';
import { getProfile, saveProfile } from '@/lib/profile';
import ProfileForm from '@/components/ProfileForm';
import { Profile } from '@/types/profile';

export default function EditProfile() {
  const { email } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (!email) router.replace('/login');
  }, [email, router]);

  const existing = email ? getProfile(email) : null;

  const initialValues: Profile = {
    name: existing?.name || '',
    desiredJobTitle: existing?.desiredJobTitle || '',
    about: existing?.about || '',
  };

  const handleSubmit = (values: Profile) => {
    if (!email) return;
    saveProfile(email, values as Profile);
    router.push('/profile');
  };

  return <ProfileForm initialValues={initialValues} onSubmit={handleSubmit} />;
}
