import {
  classnames,
  display,
  justifyContent,
  padding,
  margin,
  textColor,
} from 'tailwindcss-classnames';

const classNames = {
  main: classnames(
    display('flex'),
    justifyContent('justify-center'),
    padding('p-12'),
  ),
  message: classnames(margin('my-auto'), textColor('text-blue-400')),
};

const Component = () => (
  <div className={classNames.main}>
    <span className={classNames.message}>Oops, something went wrong!</span>
  </div>
);

export default Component;
