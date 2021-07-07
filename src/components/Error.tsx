import { classnames } from 'tailwindcss-classnames';

const classNames = {
  main: classnames('flex', 'justify-center', 'p-12'),
  message: classnames('my-auto', 'text-blue-400'),
};

const Component = () => {
  return (
    <div className={classNames.main}>
      <span className={classNames.message}>Oops, something went wrong!</span>
    </div>
  );
};

export default Component;
