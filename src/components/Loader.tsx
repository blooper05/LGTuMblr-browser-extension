import { classnames } from 'tailwindcss-classnames';

const classNames = {
  main: classnames('flex', 'justify-center', 'p-12'),
  dot: classnames(
    'my-auto',
    'mr-1',
    'w-2.5',
    'h-2.5',
    'bg-blue-200',
    'rounded-full',
    'animate-bounce',
  ),
};

export default function Loader() {
  return (
    <div className={classNames.main}>
      <span
        className={classNames.dot}
        style={{ animationDelay: '100ms' }}
      ></span>
      <span
        className={classNames.dot}
        style={{ animationDelay: '300ms' }}
      ></span>
      <span
        className={classNames.dot}
        style={{ animationDelay: '500ms' }}
      ></span>
    </div>
  );
}
