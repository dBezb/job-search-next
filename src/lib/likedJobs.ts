import { Job } from '@/types/job';

const STORAGE_KEY = 'likedJobs';

export function getLikedJobs(): Job[] {
  if (typeof window === 'undefined') return [];
  const raw = localStorage.getItem(STORAGE_KEY);
  return raw ? JSON.parse(raw) : [];
}

export function likeJob(job: Job) {
  const current = getLikedJobs();
  const exists = current.find((j) => j.job_id === job.job_id);
  if (!exists) {
    localStorage.setItem(STORAGE_KEY, JSON.stringify([...current, job]));
  }
}

export function unlikeJob(jobId: string) {
  const current = getLikedJobs();
  const filtered = current.filter((j) => j.job_id !== jobId);
  localStorage.setItem(STORAGE_KEY, JSON.stringify(filtered));
}

export function isJobLiked(jobId: string): boolean {
  return getLikedJobs().some((j) => j.job_id === jobId);
}
