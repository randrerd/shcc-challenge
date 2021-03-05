import { Box, ChakraComponent, forwardRef } from '@chakra-ui/react';
import { motion, isValidMotionProp } from 'framer-motion';
import { FunctionComponent } from 'react';
import { grayBoxAnim, grayBoxAnimDesktop } from '@/lib/variants';
import { useMediaQuery } from 'react-responsive';

type Props = FunctionComponent<any>;

type Ref = ChakraComponent<'div', {}>;

const MotionBox = motion.custom(
  forwardRef<Ref, Props>((props, ref) => {
    const chakraProps = Object.fromEntries(
      // do not pass framer props to DOM element
      Object.entries(props).filter(([key]) => !isValidMotionProp(key))
    );
    return <Box ref={ref} {...chakraProps} />;
  })
);

const GrayBox = () => {
  const isDesktopOrLaptop = useMediaQuery({
    query: '(min-device-width: 1224px)',
  });

  return (
    <MotionBox
      position="absolute"
      zIndex="1"
      gridRow="13/15"
      gridColumn="19"
      bg="gray.100"
      width="5em"
      minHeight="100%"
      variants={isDesktopOrLaptop ? grayBoxAnimDesktop : grayBoxAnim}
      initial="init"
      animate="final"
    />
  );
};

export default GrayBox;
