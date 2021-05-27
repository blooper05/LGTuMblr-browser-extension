import { classnames } from 'tailwindcss-classnames';

const classNames = {
  card: classnames(
    'm-auto',
    'rounded-lg',
    'shadow-lg',
    'cursor-pointer',
    'overflow-hidden',
  ),
  image: classnames('w-full', 'h-full', 'object-cover'),
};

export default function Image({ url }: { url: string }) {
  return (
    <div className={classNames.card}>
      <img className={classNames.image} src={url} />
    </div>
  );
}
