import useSWR from 'swr';

const API_URL = 'https://lgtumblr-api.herokuapp.com/images';

export default function useFetchImages() {
  const { data, error } = useSWR(API_URL);

  return { data, error };
}
