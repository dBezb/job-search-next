'use client';

import Link from 'next/link';
import { useAuth } from '@/lib/authContext';

export const Navbar = () => {
  const { email, logout } = useAuth();

  return (
    <nav className="flex items-center justify-between px-6 py-4 bg-white shadow">
      <Link href="/" className="text-xl font-bold text-blue-600">
        JobFinder
      </Link>
      <div className="flex space-x-4 text-sm items-center">
        <Link href="/jobs" className="hover:underline">
          Jobs
        </Link>
        <Link href="/liked" className="hover:underline">
          Liked
        </Link>
        {!email ? (
          <>
            <Link href="/login" className="hover:underline">
              Login
            </Link>
            <Link href="/register" className="hover:underline">
              Register
            </Link>
          </>
        ) : (
          <>
            <Link href="/profile" className="hover:underline">
              Profile
            </Link>
            <button onClick={logout} className="hover:underline text-red-500">
              Logout
            </button>
          </>
        )}
      </div>
    </nav>
  );
};
