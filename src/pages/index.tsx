import { classnames } from 'tailwindcss-classnames';
import InfiniteScroll from 'react-infinite-scroller';
import Image from '../components/Image';
import useFetchImages from '../hooks/useRequest';

const classNames = {
  main: classnames('p-8', 'w-full', 'bg-white'),
  grid: classnames('grid', 'gap-8', 'grid-cols-4'),
};

export default function Index() {
  const { data, error, size, setSize } = useFetchImages();

  if (error) return <div>Oops, something went wrong!</div>;
  if (!data) return <div>Loading...</div>;

  const isLoadingMore = 0 < size && data && !data[size - 1];
  const loadMore = () => {
    if (!isLoadingMore) return setSize(size + 1);
  };

  return (
    <main className={classNames.main}>
      <InfiniteScroll
        className={classNames.grid}
        loadMore={loadMore}
        hasMore={true}
      >
        {[].concat(...data).map((url: string, i: number) => (
          <Image url={url} key={i} />
        ))}
      </InfiniteScroll>
    </main>
  );
}
