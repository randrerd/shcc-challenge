import { Heart } from '@/styles/icons';
import { Box, Flex, Heading, Stack, Text } from '@chakra-ui/react';

const heartSize = { base: '5.5rem', xl: '12.5rem' };

const headingProps = {
  fontSize: { base: '8rem', xl: '17.5rem' },
  lineHeight: 0.9,
  letterSpacing: { base: '10px', xl: '35px' },
};

const secondaryHeadingProps = {
  lineHeight: 0.95,
  letterSpacing: '4px',
  fontSize: { base: '1.4rem', lg: '1.8rem' },
};

const TextContent = () => {
  return (
    <Box
      fontFamily="Heroic Condensed, Arial, sans-serif"
      pt="6.85em"
      zIndex="2"
      position="absolute"
      color="brand"
    >
      <Text fontWeight="700" fontSize="1.2rem" letterSpacing="2.5px">
        24/7 LIVE.
      </Text>
      <Flex ml={{ base: '-10px', md: '-19px' }} align="center">
        <Heading {...headingProps}>L</Heading>
        <Heart fill="brand" fontSize={heartSize} width="1.6em" />
        <Heading
          ml="0.45rem"
          mr={{ base: '0', xl: '3.5rem' }}
          {...headingProps}
        >
          V
        </Heading>
        <Heading {...headingProps}>E</Heading>
        <Heading {...headingProps}>.</Heading>
      </Flex>
      <Flex>
        <Stack mt={{ base: '10em', md: '0' }}>
          <Box>
            <Heading color="secondary" {...secondaryHeadingProps}>
              SPRING
            </Heading>
            <Heading {...secondaryHeadingProps}>2017</Heading>
          </Box>

          <Text
            fontSize="1rem"
            width="45%"
            color="secondary"
            letterSpacing="2.5px"
            fontWeight="600"
            lineHeight="1"
          >
            WITH ANWAR HADID & SOPHIA RICHIE
          </Text>
          <Text
            fontFamily={`"Gill Sans",-apple-system,Arial,sans-serif`}
            lineHeight="1.2"
            width={{ base: '34%', xl: '47%' }}
            fontSize="0.8rem"
            color="secondary"
          >
            Engineered for perfect form and exceptional fit -- whatever you do
            in them.
          </Text>
        </Stack>

        <Flex ml="-1.5em" mt={{ base: 0, xl: '-14px' }}>
          <Heading {...headingProps}>L</Heading>
          <Heading {...headingProps}>.</Heading>
          <Heading {...headingProps}>A</Heading>
          <Heading {...headingProps}>.</Heading>
        </Flex>
      </Flex>
    </Box>
  );
};

export default TextContent;
