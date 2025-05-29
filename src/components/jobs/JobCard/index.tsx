'use client';
import Link from 'next/link';
import { useState, useEffect } from 'react';
import { likeJob, unlikeJob, isJobLiked } from '@/lib/likedJobs';
import { Job } from '@/types/job';

interface Props {
  job: Job;
}

export default function JobCard({ job }: Props) {
  const [liked, setLiked] = useState(false);

  useEffect(() => {
    setLiked(isJobLiked(job.job_id));
  }, [job.job_id]);

  const toggleLike = () => {
    if (liked) {
      unlikeJob(job.job_id);
    } else {
      likeJob(job);
    }
    setLiked(!liked);
  };

  return (
    <div className="border p-4 mb-4 rounded shadow">
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
        <button onClick={toggleLike} className="text-red-500">
          {liked ? 'Unlike' : 'Like'}
        </button>
      </div>
    </div>
  );
}
