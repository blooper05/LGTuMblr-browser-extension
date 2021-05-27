import useSWR from 'swr';

const fetcher = (url: string) => fetch(url).then((res) => res.json());
const API_URL = 'https://lgtumblr-api.herokuapp.com/images';

export default function useFetchImages() {
  const { data, error } = useSWR(API_URL, fetcher);

  return { data, error };
}
