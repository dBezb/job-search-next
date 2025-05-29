import { Profile } from '@/types/profile';

export function getProfile(email: string): Profile | null {
  if (!email) return null;
  try {
    const data = localStorage.getItem(`profile-${email}`);
    return data ? JSON.parse(data) : null;
  } catch {
    return null;
  }
}

export function saveProfile(email: string, profile: Profile) {
  if (!email) return;
  localStorage.setItem(`profile-${email}`, JSON.stringify(profile));
}

export function removeProfile(email: string) {
  if (!email) return;
  localStorage.removeItem(`profile-${email}`);
}
