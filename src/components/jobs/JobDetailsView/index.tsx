import { Job } from '@/types/job';

interface Props {
  job: Job | undefined;
  liked: boolean;
  isLoading: boolean;
  error: Error | null;
  onToggleLike: () => void;
}

export default function JobDetailsView({
  job,
  liked,
  isLoading,
  error,
  onToggleLike,
}: Props) {
  if (isLoading) return <p className="p-4">Loading...</p>;
  if (error) return <p className="p-4 text-red-500">Error: {error.message}</p>;
  if (!job) return <p className="p-4">No job found.</p>;

  return (
    <div className="p-6 max-w-3xl mx-auto">
      <h1 className="text-2xl font-bold">{job.job_title}</h1>
      <p className="text-gray-600">{job.job_employment_type}</p>
      <p className="text-gray-700 mt-2">
        {job.job_city}, {job.job_country}
      </p>

      <button
        onClick={onToggleLike}
        className={`mt-4 px-4 py-2 rounded ${
          liked ? 'bg-red-600 text-white' : 'bg-gray-200'
        }`}
      >
        {liked ? 'Liked' : 'Like'}
      </button>

      {job.job_description && (
        <div className="mt-4 whitespace-pre-wrap">{job.job_description}</div>
      )}

      {job.job_highlights?.Qualifications && (
        <div className="mt-4">
          <h2 className="text-xl font-semibold">Qualifications</h2>
          <ul className="list-disc list-inside">
            {job.job_highlights.Qualifications.map((q: string, i: number) => (
              <li key={i}>{q}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
