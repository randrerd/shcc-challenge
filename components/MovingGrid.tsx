import { MotionBox } from './Motion';
import {
  playerGridAnim,
  playerGridItem1Anim,
  playerGridItem2Anim,
} from '@/lib/variants';
import useScroll from '@/lib/useScroll';

const MovingGrid = () => {
  const [element, controls] = useScroll();

  return (
    <MotionBox
      top="8%"
      width={{ base: '100%', md: '85%' }}
      background="gray.200"
      opacity="0.05"
      position="absolute"
      zIndex="-1"
      variants={playerGridAnim}
      animate={controls}
      ref={element}
    >
      <MotionBox
        paddingY="1.5em"
        background="white"
        variants={playerGridItem1Anim}
      />
      <MotionBox
        paddingY="7em"
        background="white"
        variants={playerGridItem2Anim}
      />
    </MotionBox>
  );
};

export default MovingGrid;
