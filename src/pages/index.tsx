import { classnames } from 'tailwindcss-classnames';
import useSWR from 'swr';

export default function Index() {
  const classNames = {
    main: classnames('p-8', 'w-full', 'bg-white'),
    grid: classnames('grid', 'gap-8', 'grid-cols-4'),
    card: classnames(
      'm-auto',
      'rounded-lg',
      'shadow-lg',
      'cursor-pointer',
      'overflow-hidden',
    ),
    image: classnames('w-full', 'h-full', 'object-cover'),
  };

  const fetcher = (url: string) => fetch(url).then((res) => res.json());
  const API_URL = 'https://lgtumblr-api.herokuapp.com/images';

  const { data, error } = useSWR(API_URL, fetcher);

  if (error) return <div>Oops, something went wrong!</div>;
  if (!data) return <div>Loading...</div>;

  return (
    <main className={classNames.main}>
      <div className={classNames.grid}>
        {data.map((url: string) => {
          return (
            <div className={classNames.card} key={url}>
              <img className={classNames.image} src={url} />
            </div>
          );
        })}
      </div>
    </main>
  );
}
