import { classnames } from 'tailwindcss-classnames';

const classNames = {
  main: classnames('flex', 'justify-center', 'p-12'),
  message: classnames('my-auto', 'text-blue-400'),
};

export default function Loader() {
  return (
    <div className={classNames.main}>
      <span className={classNames.message}>Oops, something went wrong!</span>
    </div>
  );
}
