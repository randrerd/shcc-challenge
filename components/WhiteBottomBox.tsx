import { Box, ChakraComponent, forwardRef } from '@chakra-ui/react';
import { motion, isValidMotionProp } from 'framer-motion';
import { FunctionComponent } from 'react';
import { bottomBoxAnim, bottomBoxAnimDesktop } from '@/lib/variants';
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

const WhiteBottomBox = () => {
  const isDesktopOrLaptop = useMediaQuery({
    query: '(min-device-width: 1224px)',
  });

  return (
    <MotionBox
      gridColumn="26/-1"
      bg="white"
      position="absolute"
      width="full"
      minHeight="100%"
      gridRow="13/-1"
      variants={isDesktopOrLaptop ? bottomBoxAnimDesktop : bottomBoxAnim}
      initial="init"
      animate="final"
    />
  );
};

export default WhiteBottomBox;
