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

export default function Image({ url }: { url: string }) {
  return (
    <div className={classNames.card}>
      <img className={classNames.image} src={url} onClick={handleClick} />
    </div>
  );
}
