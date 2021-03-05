import {
  bottomHeadingListAnim,
  headingAnim,
  headingListAnim,
  heartAnim,
  textAnim,
  textStackAnim,
} from '@/lib/variants';
import { Heart } from '@/styles/icons';
import { Box, Flex, Heading, Stack, Text } from '@chakra-ui/react';
import {
  MotionFlex,
  MotionHeading,
  MotionHeart,
  MotionStack,
  MotionText,
} from './Motion';

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
          width="1.2em"
        />
        <MotionHeading
          ml={{ base: '0.75rem', xl: '2.37rem' }}
          mr={{ base: '0', xl: '1.2rem' }}
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
          variants={textStackAnim}
          initial="init"
          animate="final"
        >
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
        </MotionStack>

        <MotionFlex
          ml={{ base: '-1.5em', xl: '-4.5em' }}
          mt={{ base: 0, xl: '-14px' }}
          variants={bottomHeadingListAnim}
          initial="init"
          animate="final"
        >
          <MotionHeading
            {...headingProps}
            variants={headingAnim}
            letterSpacing="22px"
          >
            L
          </MotionHeading>
          <MotionHeading
            {...headingProps}
            variants={headingAnim}
            letterSpacing="22px"
          >
            .
          </MotionHeading>
          <MotionHeading
            {...headingProps}
            variants={headingAnim}
            letterSpacing="22px"
          >
            A
          </MotionHeading>
          <MotionHeading
            {...headingProps}
            variants={headingAnim}
            letterSpacing="22px"
          >
            .
          </MotionHeading>
        </MotionFlex>
      </Flex>
    </Box>
  );
};

export default TextContent;
