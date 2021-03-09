import {
  upperBoxAnim,
  upperBoxAnimSm,
  upperBoxAnimMd,
  upperBoxAnimXl,
} from '@/lib/variants';
import { useMergeRefs } from '@chakra-ui/hooks';
import { useMediaQuery } from 'react-responsive';
import { MotionBox } from './Motion';

const WhiteUpperBox = () => {
  const isBreakpointXl = useMediaQuery({
    query: '(min-device-width: 80em)',
  });
  const isBreakpointSm = useMediaQuery({ query: `(min-device-width: 30em)` });
  const isBreakpointMd = useMediaQuery({ query: `(min-device-width: 48em)` });

  const getVariants = () => {
    const obj = [
      { breakpoint: isBreakpointMd, variants: upperBoxAnimMd },
      { breakpoint: isBreakpointXl, variants: upperBoxAnimXl },
      { breakpoint: isBreakpointSm, variants: upperBoxAnimSm },
    ];

    const result = obj.filter((o) => o.breakpoint)[0];

    return result ? result.variants : upperBoxAnim;
  };

  return (
    <MotionBox
      gridRow={{ base: '1/19', xl: '1/19' }}
      gridColumn="19/-1"
      bg="white"
      minHeight="100%"
      zIndex="2"
      variants={getVariants()}
      initial="init"
      animate="final"
    />
  );
};

export default WhiteUpperBox;
