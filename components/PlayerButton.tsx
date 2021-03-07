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
  onPlayerHover: boolean;
}

const PlayerButton = (props: IProps) => {
  const {
    duration,
    onPlaying,
    onSetPlaying,
    onProgress,
    onPlayerHover,
  } = props;

  const controls = useAnimation();
  const handlePlay = () => {
    onSetPlaying((p) => (!p ? true : false));
    controls.start('hide');
  };

  useEffect(() => {
    controls.start('init');
  }, [onPlayerHover]);

  return (
    <MotionBox
      position="absolute"
      cursor="pointer"
      gridColumn="5/7"
      gridRow="5/5"
      width="100%"
      display="grid"
      justifyContent="center"
      gridTemplateColumns="repeat(15,5px)"
      gridTemplateRows="repeat(15,5px)"
      variants={buttonBoxAnim}
      whileHover="hover"
      animate={controls}
      onClick={handlePlay}
    >
      <CircularProgress
        visibility="visible"
        gridColumn="1/-1"
        gridRow="1/-1"
        trackColor="transparent"
        color="brand"
        min={0}
        max={duration}
        value={onProgress.playedSeconds}
        thickness="3px"
        size="100px"
        bottom="12px"
        right="13px"
      />
      <MotionCircle
        variants={outerCircleAnim}
        zIndex="3"
        position="absolute"
        background="transparent"
        border="3px solid"
        borderColor="brand"
        top="-2px"
        left="23px"
        width="80px"
        height="80px"
      />
      <Circle
        position="absolute"
        width="35px"
        height="35px"
        background="brand"
        gridColumn="5"
        gridRow="5"
        color="white"
        fontSize="0.5rem"
        zIndex="3"
      >
        ►
      </Circle>
      <MotionCircle
        variants={transparentCircleAnim}
        position="absolute"
        background="brand"
        opacity="0"
        top="21px"
        left="49px"
        width="30px"
        height="30px"
        color="white"
        fontSize="0.5rem"
        zIndex="2"
      />
    </MotionBox>
  );
};

export default PlayerButton;
