'use client';
import { useEffect, useState } from 'react';
import { useJobs } from '@/lib/useJobs';
import JobCard from '@/components/jobs/JobCard';
import { useAuth } from '@/lib/authContext';
import { getProfile } from '@/lib/profile';
import { Job } from '@/types/job';

export default function JobsList() {
  const { email } = useAuth();
  const [query, setQuery] = useState('');
  const [initialized, setInitialized] = useState(false);

  useEffect(() => {
    if (email && !initialized) {
      const profile = getProfile(email);
      setQuery(profile?.desiredJobTitle || '');
      setInitialized(true);
    }
  }, [email, initialized]);

  const { data, isLoading, error } = useJobs(query);

  return (
    <div className="p-4">
      <input
        type="text"
        className="border p-2 w-full mb-4"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search jobs"
      />
      {isLoading && <p>Loading...</p>}
      {error && <p className="text-red-500">Error: {error.message}</p>}
      <div className="space-y-4">
        {data?.data?.map((job: Job) => <JobCard key={job.job_id} job={job} />)}
      </div>
    </div>
  );
}
