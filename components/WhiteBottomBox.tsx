import {
  bottomBoxAnim,
  bottomBoxAnimSm,
  bottomBoxAnimMd,
  bottomBoxAnimXl,
} from '@/lib/variants';
import { useMediaQuery } from 'react-responsive';
import { MotionBox } from './Motion';

const WhiteBottomBox = () => {
  const isBreakpointXl = useMediaQuery({
    query: '(min-device-width: 80em)',
  });
  const isBreakpointSm = useMediaQuery({ query: `(min-device-width: 30em)` });

  const isBreakpointMd = useMediaQuery({ query: `(min-device-width: 48em)` });

  const getVariants = () => {
    const obj = [
      { breakpoint: isBreakpointMd, variants: bottomBoxAnimMd },
      { breakpoint: isBreakpointXl, variants: bottomBoxAnimXl },
      { breakpoint: isBreakpointSm, variants: bottomBoxAnimSm },
    ];

    const result = obj.filter((o) => o.breakpoint)[0];

    return result ? result.variants : bottomBoxAnim;
  };
  return (
    <MotionBox
      gridColumn="26/-1"
      zIndex="2"
      bg="white"
      position="absolute"
      width="full"
      minHeight="100%"
      gridRow="9/-1"
      variants={getVariants()}
      initial="init"
      animate="final"
    />
  );
};

export default WhiteBottomBox;
