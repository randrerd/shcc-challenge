import { useInView } from 'react-intersection-observer';

import { Box, Flex } from '@chakra-ui/layout';

const MovingGrid = () => {
  const [element, view] = useInView({ threshold: 0.2 });

  return (
    <Flex
      flexDirection="column"
      top="8%"
      width={{ base: '100%', md: '85%' }}
      background="gray.200"
      opacity="0.55"
      position="absolute"
      zIndex="-1"
      ref={element}
    >
      <Box
        width="100%"
        paddingY="1.5em"
        background="white"
        transformOrigin="0% 0%"
        opacity={view ? '1' : '0'}
        transform={view ? 'scaleX(0.15)' : 'initial'}
        transitionDuration="1.4s"
        transitionProperty="transform"
        style={{
          transitionDelay: '0.7s',
          transitionTimingFunction: 'ease-out',
        }}
      />
      <Box
        width="100%"
        paddingY="7em"
        background="white"
        opacity={view ? '1' : '0'}
        transformOrigin="0% 0%"
        transform={view ? 'scaleX(0)' : 'initial'}
        transitionDuration="1.6s"
        transitionProperty="transform"
        style={{
          transitionDelay: '0.6s',
          transitionTimingFunction: 'ease-out',
        }}
      />
    </Flex>
  );
};

export default MovingGrid;
