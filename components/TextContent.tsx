import {
  bottomHeadingListAnim,
  headingAnim,
  headingListAnim,
  heartAnim,
  textAnim,
  textStackAnim,
} from '@/lib/variants';
import { Box, Flex, Heading, Text } from '@chakra-ui/react';
import {
  MotionFlex,
  MotionHeading,
  MotionHeart,
  MotionStack,
  MotionText,
} from './Motion';

const heartSize = { base: '5.5rem', xl: '12rem' };

const headingProps = {
  fontSize: { base: '8rem', xl: '16rem' },
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
      <Box overflow="hidden">
        <MotionText
          fontWeight="700"
          fontSize="1.2rem"
          letterSpacing="2.5px"
          variants={textAnim}
          initial="init"
          animate="final"
        >
          24/7 LIVE.
        </MotionText>
      </Box>
      <MotionFlex
        ml={{ base: '-10px', md: '-19px' }}
        align="center"
        variants={headingListAnim}
        initial="init"
        animate="final"
      >
        <MotionHeading {...headingProps} variants={headingAnim}>
          L
        </MotionHeading>
        <MotionHeart
          variants={heartAnim}
          fill="brand"
          fontSize={heartSize}
          width={{ base: '1.2em', xl: '1.4em' }}
        />
        <MotionHeading
          ml={{ base: '0.75rem', xl: '2.35rem' }}
          mr={{ base: '0', xl: '2rem' }}
          {...headingProps}
          variants={headingAnim}
        >
          V
        </MotionHeading>
        <MotionHeading {...headingProps} variants={headingAnim}>
          E
        </MotionHeading>
        <MotionHeading {...headingProps} variants={headingAnim}>
          .
        </MotionHeading>
      </MotionFlex>
      <Flex>
        <MotionStack
          mt={{ base: '10em', md: '0' }}
          width={{ base: '41%', md: '25%' }}
          variants={textStackAnim}
          initial="init"
          animate="final"
          background={{ sm: '#f4f4f4c7', md: 'initial' }}
          padding={{ sm: '1em', md: 'initial' }}
          borderRadius={{ sm: '2px', md: 'initial' }}
        >
          <Box>
            <Heading color="secondary" {...secondaryHeadingProps}>
              SPRING
            </Heading>
            <Heading {...secondaryHeadingProps}>2017</Heading>
          </Box>
          <Box>
            <Text
              fontSize="1rem"
              // width="45%"
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
              // width={{ base: '34%', xl: '47%' }}
              fontSize="0.8rem"
              color="secondary"
            >
              Engineered for perfect form and exceptional fit -- whatever you do
              in them.
            </Text>
          </Box>
        </MotionStack>

        <MotionFlex
          ml={{ base: '5.5em', xl: '9em' }}
          mt={{ base: 0, xl: '-20px' }}
          variants={bottomHeadingListAnim}
          initial="init"
          animate="final"
          position={{ base: 'absolute', md: 'initial' }}
          left={{ sm: '39%', md: 'initial' }}
        >
          <MotionHeading
            {...headingProps}
            variants={headingAnim}
            letterSpacing="30px"
          >
            L
          </MotionHeading>
          <MotionHeading
            {...headingProps}
            variants={headingAnim}
            letterSpacing="30px"
          >
            .
          </MotionHeading>
          <MotionHeading
            {...headingProps}
            variants={headingAnim}
            letterSpacing="30px"
          >
            A
          </MotionHeading>
          <MotionHeading
            {...headingProps}
            variants={headingAnim}
            letterSpacing="30px"
          >
            .
          </MotionHeading>
        </MotionFlex>
      </Flex>
    </Box>
  );
};

export default TextContent;
