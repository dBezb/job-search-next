'use client';
import { useParams } from 'next/navigation';
import { useJobDetails } from '@/lib/useJobDetails';
import { useEffect, useState } from 'react';
import { likeJob, unlikeJob, isJobLiked } from '@/lib/likedJobs';
import JobDetailsView from '@/components/jobs/JobDetailsView';

export default function JobDetails() {
  const { id: jobId } = useParams() as { id: string };
  const { data, isLoading, error } = useJobDetails(jobId);
  const job = data?.data?.[0];

  const [liked, setLiked] = useState(false);

  useEffect(() => {
    if (job) setLiked(isJobLiked(job.job_id));
  }, [job]);

  const toggleLike = () => {
    if (!job) return;
    if (liked) unlikeJob(job.job_id);
    else likeJob(job);
    setLiked(!liked);
  };

  return (
    <JobDetailsView
      job={job}
      liked={liked}
      isLoading={isLoading}
      error={error}
      onToggleLike={toggleLike}
    />
  );
}
