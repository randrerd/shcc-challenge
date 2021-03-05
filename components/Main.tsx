import { customContainer } from '@/styles/theme';
import { Box } from '@chakra-ui/react';
import Picture from './Picture';
import TextContent from './TextContent';

const Main = () => {
  return (
    <Box
      position="relative"
      pt="2.5em"
      width={customContainer}
      margin="0 auto"
      display="grid"
      gridTemplateColumns="repeat(27,1fr)"
      gridTemplateRows="repeat(12,70px)"
    >
      <TextContent />
      <Picture />
    </Box>
  );
};

export default Main;
