import useSWR from 'swr';
import axios from 'axios';

const fetcher = (url: string) =>
  axios
    .get(url, {
      headers: {
        'X-RapidAPI-Key': process.env.NEXT_PUBLIC_RAPIDAPI_KEY!,
        'X-RapidAPI-Host': 'jsearch.p.rapidapi.com',
      },
    })
    .then((res) => res.data);

export const useJobDetails = (jobId: string) => {
  const url = `https://jsearch.p.rapidapi.com/job-details?job_id=${jobId}&country=us`;
  const { data, error, isLoading } = useSWR(jobId ? url : null, fetcher);

  return { data, error, isLoading };
};
