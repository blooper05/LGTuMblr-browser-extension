import { classnames } from 'tailwindcss-classnames';
import Image from '../components/Image';
import useFetchImages from '../hooks/useRequest';

const classNames = {
  main: classnames('p-8', 'w-full', 'bg-white'),
  grid: classnames('grid', 'gap-8', 'grid-cols-4'),
};

export default function Index() {
  const { data, error } = useFetchImages();

  if (error) return <div>Oops, something went wrong!</div>;
  if (!data) return <div>Loading...</div>;

  return (
    <main className={classNames.main}>
      <div className={classNames.grid}>
        {data.map((url: string) => {
          return <Image url={url} key={url} />;
        })}
      </div>
    </main>
  );
}
