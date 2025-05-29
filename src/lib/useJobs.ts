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

export const useJobs = (query: string) => {
  const url = `https://jsearch.p.rapidapi.com/search?query=${query}&page=1&num_pages=1&country=us&date_posted=all`;
  const { data, error, isLoading } = useSWR(query ? url : null, fetcher);

  return { data, error, isLoading };
};
