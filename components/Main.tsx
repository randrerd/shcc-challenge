import { customContainer } from '@/styles/theme';
import { Box } from '@chakra-ui/react';
import Picture from './Picture';
import Player from './Player';
import TextContent from './TextContent';

const Main = () => {
  return (
    <Box
      as="main"
      position="relative"
      pt="2.5em"
      width={customContainer}
      maxWidth="1011px"
      minHeight={{ base: '50vh', md: '80vh', xl: '85vh', '2xl': 'initial' }}
      margin="0 auto"
    >
      <TextContent />
      <Picture />
    </Box>
  );
};

export default Main;
