import {
  classnames,
  display,
  justifyContent,
  padding,
  margin,
  height,
  width,
  backgroundColor,
  borderRadius,
  animation,
} from 'tailwindcss-classnames';

const classNames = {
  main: classnames(
    display('flex'),
    justifyContent('justify-center'),
    padding('p-12'),
  ),
  logo: classnames(margin('mr-8', 'ml-16'), height('h-64')), // FIXME: refs. https://github.com/muhammadsammy/tailwindcss-classnames/issues/350
  // logo: classnames(margin('-mr-8', '-ml-16'), height('h-64')),
  dot: classnames(
    margin('my-auto', 'mr-1'),
    width('w-2.5'),
    height('h-2.5'),
    backgroundColor('bg-blue-200'),
    borderRadius('rounded-full'),
    animation('animate-bounce'),
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
