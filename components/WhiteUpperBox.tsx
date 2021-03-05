import { Box, ChakraComponent, forwardRef } from '@chakra-ui/react';
import { motion, isValidMotionProp } from 'framer-motion';
import { FunctionComponent } from 'react';
import { upperBoxAnim, upperBoxAnimDesktop } from '@/lib/variants';
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

const WhiteUpperBox = () => {
  const isDesktopOrLaptop = useMediaQuery({
    query: '(min-device-width: 1224px)',
  });

  return (
    <MotionBox
      gridRow="1/13"
      gridColumn="19/-1"
      bg="white"
      minHeight="100%"
      zIndex="1"
      variants={isDesktopOrLaptop ? upperBoxAnimDesktop : upperBoxAnim}
      initial="init"
      animate="final"
    />
  );
};

export default WhiteUpperBox;
