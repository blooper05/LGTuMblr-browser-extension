import { Center, Image, HStack, Circle } from '@chakra-ui/react';
import { motion } from 'framer-motion';

const MotionHStack = motion(HStack);
const MotionCircle = motion(Circle);

const Component = ({ withLogo }: { withLogo?: boolean }) => (
  <Center height={withLogo ? '100vh' : '15vh'}>
    {withLogo && <Image height={64} src="/images/logo.svg" />}
    <MotionHStack
      spacing={1}
      animate="animate"
      variants={{
        animate: { transition: { delayChildren: 0.1, staggerChildren: 0.2 } },
      }}
    >
      {[...Array(3)].map((i: number) => (
        <MotionCircle
          size={2.5}
          bgColor="blue.200"
          variants={{
            animate: {
              y: ['-25%', '0%', '-25%'],
              transition: {
                duration: 1,
                repeat: Infinity,
                repeatType: 'reverse',
                ease: [
                  [0.8, 0, 1, 1],
                  [0, 0, 0.2, 1],
                  [0.8, 0, 1, 1],
                ],
              },
            },
          }}
          key={i}
        />
      ))}
    </MotionHStack>
  </Center>
);

export default Component;
