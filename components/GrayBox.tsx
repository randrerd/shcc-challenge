import { Box } from '@chakra-ui/react';

const GrayBox = () => {
  return (
    <Box
      position="absolute"
      zIndex="1"
      gridRow="12"
      gridColumn="19"
      bg="gray.100"
      minW="5em"
      minH={{ base: '1.81rem', lg: '1.81rem' }}
    />
  );
};

export default GrayBox;
