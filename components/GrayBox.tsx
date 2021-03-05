import { grayBoxAnim, grayBoxAnimDesktop } from '@/lib/variants';
import { useMediaQuery } from 'react-responsive';
import { MotionBox } from './Motion';

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
