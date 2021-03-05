import { upperBoxAnim, upperBoxAnimDesktop } from '@/lib/variants';
import { useMediaQuery } from 'react-responsive';
import { MotionBox } from './Motion';

const WhiteUpperBox = () => {
  const isDesktopOrLaptop = useMediaQuery({
    query: '(min-device-width: 1224px)',
  });

  return (
    <MotionBox
      gridRow="1/15"
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
