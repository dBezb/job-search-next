'use client';

import { getProfile, removeProfile } from '@/lib/profile';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { Profile } from '@/types/profile';

export default function ProfilePage() {
  const [email, setEmail] = useState<string | null>(null);
  const [profile, setProfile] = useState<Profile | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    const storedEmail = localStorage.getItem('email');
    if (storedEmail) {
      setEmail(storedEmail);
      const existingProfile = getProfile(storedEmail);
      setProfile(existingProfile);
    } else {
      router.replace('/login');
    }
    setIsLoading(false);
  }, [router]);

  const handleEdit = () => {
    router.push('/edit-profile');
  };

  const handleDelete = () => {
    if (!email) return;
    removeProfile(email);
    setProfile(null);
  };

  const handleLogout = () => {
    localStorage.removeItem('email');
    router.replace('/login');
  };

  if (isLoading) return null;
  if (!email) return null;

  return (
    <div className="max-w-md mx-auto p-6">
      <h1 className="text-2xl font-bold mb-4">My Profile</h1>
      <p className="mb-2">
        <strong>Email:</strong> {email}
      </p>

      {profile ? (
        <>
          <p className="mb-2">
            <strong>Name:</strong> {profile.name}
          </p>
          <p className="mb-2">
            <strong>Desired Position:</strong> {profile.desiredJobTitle || '—'}
          </p>
          <p className="mb-4">
            <strong>About Me:</strong> {profile.about || '—'}
          </p>
          <div className="flex gap-4">
            <button
              onClick={handleEdit}
              className="bg-blue-600 text-white px-4 py-2 rounded"
            >
              Edit
            </button>
            <button
              onClick={handleDelete}
              className="bg-red-500 text-white px-4 py-2 rounded"
            >
              Delete
            </button>
            <button
              onClick={handleLogout}
              className="bg-gray-700 text-white px-4 py-2 rounded"
            >
              Log Out
            </button>
          </div>
        </>
      ) : (
        <>
          <p className="mb-4 text-gray-600">Profile not yet completed.</p>
          <button
            onClick={handleEdit}
            className="bg-green-600 text-white px-4 py-2 rounded"
          >
            Create Profile
          </button>
          <button
            onClick={handleLogout}
            className="ml-4 bg-gray-700 text-white px-4 py-2 rounded"
          >
            Log Out
          </button>
        </>
      )}
    </div>
  );
}
