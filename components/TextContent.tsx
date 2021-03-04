import { Heart } from '@/styles/icons';
import { Box, Flex, Heading, Text } from '@chakra-ui/react';

const heartSize = { base: '8rem', lg: '13.5rem' };

const headingProps = {
  fontSize: { base: '12rem', lg: '17.5rem' },
  lineHeight: 0.9,
};

const TextContent = () => {
  return (
    <Box
      fontFamily="Heroic Condensed, Arial, sans-serif"
      pt="5em"
      zIndex="2"
      position="absolute"
      color="brand"
    >
      <Text>24/7 LIVE.</Text>
      <Flex ml="-19px" align="center" wrap="wrap">
        <Heading {...headingProps}>L</Heading>
        <Heart fill="brand" fontSize={heartSize} width="1.6em" />
        <Heading ml="2.5" {...headingProps}>
          V
        </Heading>
        <Heading {...headingProps}>E.</Heading>
      </Flex>
    </Box>
  );
};

export default TextContent;
