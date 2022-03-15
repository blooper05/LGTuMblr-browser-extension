import {
  classnames,
  padding,
  width,
  backgroundColor,
  display,
  gridTemplateColumns,
  gap,
} from 'tailwindcss-classnames';
import InfiniteScroll from 'react-infinite-scroll-component';
import Image from '../components/Image';
import Loader from '../components/Loader';
import Error from '../components/Error';
import useFetchImages from '../hooks/useRequest';

const classNames = {
  main: classnames(
    padding('p-4'),
    width('w-full'),
    backgroundColor('bg-white'),
  ),
  grid: classnames(
    display('grid'),
    gridTemplateColumns('grid-cols-4'),
    gap('gap-8'),
    padding('p-4'),
  ),
};

export default function Index() {
  const { data, error, size, setSize } = useFetchImages();

  if (error) return <Error />;
  if (!data) return <Loader withLogo={true} />;

  const fetchData = () => setSize(size + 1);
  const fetchedData = [].concat(...data);

  return (
    <main className={classNames.main}>
      <InfiniteScroll
        next={fetchData}
        hasMore={true}
        dataLength={fetchedData.length}
        loader={<Loader />}
        className={classNames.grid}
      >
        {fetchedData.map((url: string, i: number) => (
          <Image url={url} key={i} />
        ))}
      </InfiniteScroll>
    </main>
  );
}
