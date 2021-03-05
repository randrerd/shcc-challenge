import { bottomBoxAnim, bottomBoxAnimDesktop } from '@/lib/variants';
import { useMediaQuery } from 'react-responsive';
import { MotionBox } from './Motion';

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
      gridRow="9/-1"
      variants={isDesktopOrLaptop ? bottomBoxAnimDesktop : bottomBoxAnim}
      initial="init"
      animate="final"
    />
  );
};

export default WhiteBottomBox;
