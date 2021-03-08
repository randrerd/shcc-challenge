import {
  buttonBoxAnim,
  outerCircleAnim,
  transparentCircleAnim,
} from '@/lib/variants';
import { Box, Circle } from '@chakra-ui/layout';
import { CircularProgress } from '@chakra-ui/progress';
import { Dispatch, SetStateAction, useEffect } from 'react';
import { MotionCircle, MotionBox } from './Motion';
import { useAnimation } from 'framer-motion';

interface IProps {
  duration: number;
  onPlaying: boolean;
  onSetPlaying: Dispatch<SetStateAction<boolean>>;
  onProgress: {
    played: number;
    playedSeconds: number;
    loaded: number;
    loadedSeconds: number;
  };
  onPlayerMouseEnter: boolean;
}

const PlayerButton = (props: IProps) => {
  const {
    duration,
    onPlaying,
    onSetPlaying,
    onProgress,
    onPlayerMouseEnter,
  } = props;

  const controls = useAnimation();
  const handlePlay = () => {
    onSetPlaying((p) => (!p ? true : false));
  };

  useEffect(() => {
    if (!onPlayerMouseEnter && onPlaying) {
      controls.start('hide');
    } else controls.start('show');

    return controls.stop;
  }, [onPlayerMouseEnter]);

  return (
    <MotionBox
      position="absolute"
      cursor="pointer"
      display="flex"
      justifyContent="center"
      alignItems="center"
      variants={buttonBoxAnim}
      whileHover="hover"
      animate={controls}
      onClick={handlePlay}
    >
      <Box />
      <CircularProgress
        opacity={!onPlaying ? '1' : '0'}
        trackColor="transparent"
        color="brand"
        min={0}
        max={duration}
        value={onProgress.playedSeconds}
        thickness="3px"
        size="100px"
        transition="all 0.5s ease"
      />
      <MotionCircle
        variants={outerCircleAnim}
        zIndex="3"
        position="absolute"
        background="transparent"
        border="3px solid"
        borderColor="brand"
        width="97.5px"
        height="97.5px"
        visibility={!onProgress.playedSeconds ? 'visible' : 'hidden'}
      />
      <Circle
        position="absolute"
        width="35px"
        height="35px"
        background="brand"
        color="white"
        fontSize="0.35rem"
        zIndex="3"
      >
        {!onPlaying ? '►' : '❚❚'}
      </Circle>
      <MotionCircle
        variants={transparentCircleAnim}
        position="absolute"
        background="brand"
        opacity="0"
        width="35px"
        height="35px"
        zIndex="2"
      />
    </MotionBox>
  );
};

export default PlayerButton;
