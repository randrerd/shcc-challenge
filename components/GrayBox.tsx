import {
  grayBoxAnim,
  grayBoxAnimXl,
  grayBoxAnimSm,
  grayBoxAnimMd,
} from '@/lib/variants';
import { useMediaQuery } from 'react-responsive';
import { MotionBox } from './Motion';

const GrayBox = () => {
  const isBreakpointXl = useMediaQuery({
    query: '(min-device-width: 80em)',
  });
  const isBreakpointSm = useMediaQuery({ query: `(min-device-width: 30em)` });

  const isBreakpointMd = useMediaQuery({ query: `(min-device-width: 48em)` });

  const getVariants = () => {
    const obj = [
      { breakpoint: isBreakpointMd, variants: grayBoxAnimMd },
      { breakpoint: isBreakpointXl, variants: grayBoxAnimXl },
      { breakpoint: isBreakpointSm, variants: grayBoxAnimSm },
    ];

    const result = obj.filter((o) => o.breakpoint)[0];

    return result ? result.variants : grayBoxAnim;
  };

  return (
    <MotionBox
      position="absolute"
      zIndex="2"
      gridRow={{ base: '11/14', xl: '16/19' }}
      gridColumn="19"
      bg="gray.100"
      width="5em"
      minHeight="100%"
      variants={getVariants()}
      initial="init"
      animate="final"
    />
  );
};

export default GrayBox;
