'use client';

import { useEffect, useState } from 'react';
import { getLikedJobs, unlikeJob } from '@/lib/likedJobs';
import Link from 'next/link';
import { Job } from '@/types/job';

export default function LikedJobsPage() {
  const [likedJobs, setLikedJobs] = useState<Job[]>([]);

  useEffect(() => {
    setLikedJobs(getLikedJobs());
  }, []);

  const removeJob = (id: string) => {
    unlikeJob(id);
    setLikedJobs(getLikedJobs());
  };

  return (
    <div className="p-4 max-w-3xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">Liked Jobs</h1>

      {likedJobs.length === 0 ? (
        <p>No liked jobs yet.</p>
      ) : (
        <ul className="space-y-4">
          {likedJobs.map((job) => (
            <li key={job.job_id} className="border p-4 rounded shadow">
              <h2 className="text-xl font-semibold">{job.job_title}</h2>
              <p>
                {job.job_city}, {job.job_country}
              </p>
              <div className="flex gap-4 mt-2">
                <Link
                  href={`/job-details/${job.job_id}`}
                  className="text-blue-600 underline"
                >
                  Details
                </Link>
                <button
                  onClick={() => removeJob(job.job_id)}
                  className="text-red-600"
                >
                  Remove
                </button>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
