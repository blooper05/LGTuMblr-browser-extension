import {
  classnames,
  overflow,
  margin,
  borderRadius,
  boxShadow,
  transitionProperty,
  transitionDuration,
  transitionTimingFunction,
  hardwareAcceleration,
  scale,
  translate,
  cursor,
  objectFit,
  width,
  height,
} from 'tailwindcss-classnames';

const classNames = {
  card: classnames(
    overflow('overflow-hidden'),
    margin('m-auto'),
    borderRadius('rounded-lg'),
    boxShadow('shadow-lg'),
    transitionProperty('transition'),
    transitionDuration('duration-500'),
    transitionTimingFunction('ease-in-out'),
    hardwareAcceleration('transform-gpu'),
    scale('hover:scale-110'),
    translate('hover:translate-y-1'), // FIXME: refs. https://github.com/muhammadsammy/tailwindcss-classnames/issues/350
    // translate('hover:-translate-y-1'),
    cursor('cursor-pointer'),
  ),
  image: classnames(
    objectFit('object-cover'),
    width('w-full'),
    height('h-full'),
  ),
};

const REGEXP = new RegExp('https://64.media.tumblr.com/');
const PREFIX =
  'https://res.cloudinary.com/hbt3vhx4z/t_lgtm/f_auto,q_auto/tumblr/';

const handleClick = (event: React.MouseEvent<HTMLImageElement, MouseEvent>) => {
  const originalUrl = event.currentTarget.src;
  const lgtmizedUrl = originalUrl.replace(REGEXP, PREFIX);

  chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
    tabs[0].id && chrome.tabs.sendMessage(tabs[0].id, { lgtmizedUrl });
  });

  navigator.clipboard.writeText(lgtmizedUrl);
};

const Component = ({ url }: { url: string }) => (
  <div className={classNames.card}>
    <img className={classNames.image} src={url} onClick={handleClick} />
  </div>
);

export default Component;
