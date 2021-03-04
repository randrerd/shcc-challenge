import { Box } from '@chakra-ui/react';
import Picture from './Picture';

const Main = () => {
  return (
    <Box
      position="relative"
      pt="4.5em"
      width={{ md: '95%', lg: '70%' }}
      margin="0 auto"
    >
      <Picture />
    </Box>
  );
};

export default Main;
