import { Center, Image } from '@chakra-ui/react';
import { motion } from 'framer-motion';

const MotionCenter = motion(Center);

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
  <MotionCenter
    borderRadius="lg"
    boxShadow="lg"
    margin="auto"
    overflow="hidden"
    whileHover={{
      cursor: 'pointer',
      scale: 1.05,
      transition: { duration: 0.3, ease: 'backInOut' },
      translateY: '-0.5rem',
    }}
  >
    <Image src={url} alt="" onClick={handleClick} />
  </MotionCenter>
);

export default Component;
