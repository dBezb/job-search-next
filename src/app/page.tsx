import Link from 'next/link';

export default function HomePage() {
  return (
    <div className="text-center py-20">
      <h1 className="text-4xl font-bold mb-4">Welcome to JobFinder 🔍</h1>
      <p className="text-lg text-gray-600 mb-6">
        Search and save jobs tailored just for you.
      </p>
      <Link
        href="/jobs"
        className="inline-block bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 transition"
      >
        Explore Jobs
      </Link>
    </div>
  );
}
