import { classnames } from 'tailwindcss-classnames';

const classNames = {
  main: classnames('flex', 'justify-center', 'p-12'),
  logo: classnames('-mr-8', '-ml-16', 'h-64'),
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

const Component = ({ withLogo }: { withLogo?: boolean }) => (
  <div className={classNames.main}>
    {withLogo && <img className={classNames.logo} src="/images/logo.svg" />}
    <span className={classNames.dot} style={{ animationDelay: '100ms' }}></span>
    <span className={classNames.dot} style={{ animationDelay: '300ms' }}></span>
    <span className={classNames.dot} style={{ animationDelay: '500ms' }}></span>
  </div>
);

export default Component;
