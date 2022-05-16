import useSWRInfinite from 'swr/infinite';

const BASE_URL = 'https://lgtumblr-api.herokuapp.com/images';

const getKey = (pageIndex: number, previousPageData: string[]) => {
  if (previousPageData && !previousPageData.length) return null;

  return `${BASE_URL}?identifier=${pageIndex}`;
};

const fetcher = (url: string) => fetch(url).then((res) => res.json());

const Hook = () => {
  const { data, error, size, setSize } = useSWRInfinite(getKey, fetcher, {
    initialSize: 2,
    revalidateFirstPage: false,
  });

  return { data, error, size, setSize };
};

export default Hook;
