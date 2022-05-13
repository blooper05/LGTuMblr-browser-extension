import { Center, Image } from '@chakra-ui/react';

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
  <Center
    _hover={{
      cursor: 'pointer',
      transform: 'scale(1.1) translateY(-0.25rem)',
      transition: '500ms ease-in-out',
    }}
    borderRadius="lg"
    boxShadow="lg"
    margin="auto"
    overflow="hidden"
  >
    <Image boxSize="full" objectFit="cover" src={url} onClick={handleClick} />
  </Center>
);

export default Component;
