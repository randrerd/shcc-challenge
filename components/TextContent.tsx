import {
  bottomHeadingListAnim,
  headingAnim,
  headingListAnim,
  heartAnim,
  textAnim,
  textStackAnim,
} from '@/lib/variants';
import { Box, Flex, Heading, Stack, Text } from '@chakra-ui/react';
import {
  MotionBox,
  MotionFlex,
  MotionHeading,
  MotionHeart,
  MotionStack,
  MotionText,
} from './Motion';

const heartSize = { base: '5.8rem', lg: '12.25rem' };

const headingProps = {
  fontSize: { base: '8rem', lg: '16rem' },
  lineHeight: 0.9,
  letterSpacing: { base: '10px', md: '30px', lg: '80px', xl: '35px' },
  fontWeight: 700,
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
      pt="4em"
      zIndex="2"
      position="absolute"
      color="brand"
    >
      <Box overflow="hidden">
        <MotionText
          fontWeight="700"
          fontSize="1.2rem"
          letterSpacing="2.5px"
          opacity={0}
          variants={textAnim}
          initial="init"
          animate="final"
        >
          24/7 LIVE.
        </MotionText>
      </Box>
      <MotionFlex
        ml={{ base: '-6px', lg: '-16px' }}
        align="center"
        visibility="hidden"
        opacity="0"
        variants={headingListAnim}
        initial="init"
        animate="final"
      >
        <MotionBox as="span" {...headingProps} variants={headingAnim}>
          L
        </MotionBox>
        <MotionHeart
          variants={heartAnim}
          fill="brand"
          fontSize={heartSize}
          width={{ base: '1.2em', xl: '1.4em' }}
        />
        <MotionBox
          as="span"
          ml={{ base: '1.25rem', lg: '2.48rem', xl: '1.7rem' }}
          mr={{ base: '0', xl: '2rem' }}
          {...headingProps}
          variants={headingAnim}
        >
          V
        </MotionBox>
        <MotionBox as="span" {...headingProps} variants={headingAnim}>
          E
        </MotionBox>
        <MotionBox as="span" {...headingProps} variants={headingAnim}>
          .
        </MotionBox>
      </MotionFlex>
      <Flex>
        <MotionStack
          mt={{ base: '8.5em', md: '0' }}
          width={{ base: '45%', md: '25%' }}
          minWidth={{ base: '11em', md: 'initial' }}
          visibility="hidden"
          opacity="0"
          variants={textStackAnim}
          initial="init"
          animate="final"
          background={{ base: '#edf2f7b5', md: 'initial' }}
          padding={{ base: '1em', md: 'initial' }}
          borderRadius={{ base: '2px', md: 'initial' }}
        >
          <Box>
            <Heading color="secondary" {...secondaryHeadingProps}>
              SPRING
            </Heading>
            <Heading {...secondaryHeadingProps}>2017</Heading>
          </Box>
          <Stack>
            <Text
              fontSize="1rem"
              color="secondary"
              letterSpacing="2.5px"
              fontWeight="600"
              lineHeight="1"
              width={{ xl: '60%' }}
            >
              WITH ANWAR HADID & SOPHIA RICHIE
            </Text>
            <Text
              fontFamily={`"Gill Sans",-apple-system,Arial,sans-serif`}
              lineHeight="1.2"
              fontSize="0.8rem"
              color="secondary"
              width={{ xl: '85%' }}
            >
              Engineered for perfect form and exceptional fit — whatever you do
              in them.
            </Text>
          </Stack>
        </MotionStack>

        <MotionFlex
          ml={{ base: '5.5em', lg: '8.75em' }}
          mt={{ base: 0, xl: '-20px' }}
          visibility="hidden"
          opacity="0"
          variants={bottomHeadingListAnim}
          initial="init"
          animate="final"
          position={{ base: 'absolute', md: 'initial' }}
          left={{ sm: '39%', md: 'initial' }}
        >
          <MotionBox
            as="span"
            {...headingProps}
            variants={headingAnim}
            letterSpacing="30px"
          >
            L
          </MotionBox>
          <MotionBox
            as="span"
            {...headingProps}
            variants={headingAnim}
            letterSpacing="30px"
          >
            .
          </MotionBox>
          <MotionBox
            as="span"
            {...headingProps}
            variants={headingAnim}
            letterSpacing="30px"
          >
            A
          </MotionBox>
          <MotionBox
            as="span"
            {...headingProps}
            variants={headingAnim}
            letterSpacing="30px"
          >
            .
          </MotionBox>
        </MotionFlex>
      </Flex>
    </Box>
  );
};

export default TextContent;
