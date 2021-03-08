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
      margin="0 auto"
      display="grid"
      // gridTemplateColumns="repeat(27,1fr)"
      // gridTemplateRows="repeat(12,70px)"
      gridTemplateColumns="repeat(31,1fr)"
      gridTemplateRows="repeat(25,43px)"
    >
      <TextContent />
      <Picture />
      <Player />
    </Box>
  );
};

export default Main;
