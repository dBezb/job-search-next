'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { registerUser } from '@/lib/auth';
import { useAuth } from '@/lib/authContext';
import { saveProfile } from '@/lib/profile';

export default function RegisterPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [desiredJobTitle, setDesiredJobTitle] = useState('');
  const [about, setAbout] = useState('');
  const [error, setError] = useState('');

  const { login } = useAuth();
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    if (!email || !password || !name) {
      setError('Please fill in required fields');
      return;
    }

    try {
      const data = await registerUser(email, password);
      login(data.email, data.token);
      saveProfile(email, { name, desiredJobTitle, about });
      router.push('/login');
    } catch {
      setError('User already exists or registration failed');
    }
  };

  return (
    <div className="max-w-md mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Sign Up</h1>
      {error && <div className="text-red-500 mb-2">{error}</div>}
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="email"
          placeholder="Email"
          className="border p-2 w-full"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          className="border p-2 w-full"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <input
          type="text"
          placeholder="Name (required)"
          className="border p-2 w-full"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="text"
          placeholder="Desired Job Title (optional)"
          className="border p-2 w-full"
          value={desiredJobTitle}
          onChange={(e) => setDesiredJobTitle(e.target.value)}
        />
        <textarea
          placeholder="About Me (optional)"
          className="border p-2 w-full"
          value={about}
          onChange={(e) => setAbout(e.target.value)}
        />
        <button
          type="submit"
          className="bg-green-600 text-white px-4 py-2 rounded"
        >
          Sign Up
        </button>
      </form>
    </div>
  );
}
