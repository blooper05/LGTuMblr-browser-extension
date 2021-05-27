import { classnames } from 'tailwindcss-classnames';

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

  const src = 'https://picsum.photos/500/750';

  return (
    <main className={classNames.main}>
      <div className={classNames.grid}>
        {[...Array(10)].map((_, i) => {
          return (
            <div className={classNames.card} key={i}>
              <img className={classNames.image} src={src} />
            </div>
          );
        })}
      </div>
    </main>
  );
}
