import { classnames } from 'tailwindcss-classnames';
import InfiniteScroll from 'react-infinite-scroll-component';
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

  const fetchData = () => setSize(size + 1);
  const fetchedData = [].concat(...data);

  return (
    <main className={classNames.main}>
      <InfiniteScroll
        next={fetchData}
        hasMore={true}
        dataLength={fetchedData.length}
        loader={<div>Loading...</div>}
        className={classNames.grid}
      >
        {fetchedData.map((url: string, i: number) => (
          <Image url={url} key={i} />
        ))}
      </InfiniteScroll>
    </main>
  );
}
