import { useState } from 'react';
import { Box, Flex } from '@chakra-ui/layout';
import ReactPlayer from 'react-player';
import PlayerButton from './PlayerButton';
import { MotionBox } from './Motion';
import { useAnimation } from 'framer-motion';
import { playerOpacityAnim } from '@/lib/variants';

const Player = () => {
  const [onDuration, onSetDuration] = useState<number>(0);
  const [onPlaying, onSetPlaying] = useState<boolean>(false);
  const [onProgress, setOnProgress] = useState<{
    played: number;
    playedSeconds: number;
    loaded: number;
    loadedSeconds: number;
  }>({ played: 0, playedSeconds: 0, loaded: 0, loadedSeconds: 0 });
  const [onMouseEnter, setOnMouseEnter] = useState<boolean>(false);

  const controls = useAnimation();

  const handleMouseEnter = () => {
    setOnMouseEnter(true);
  };

  const handleMouseLeave = () => {
    setOnMouseEnter(false);
  };

  return (
    <Flex
      position="absolute"
      gridColumn={{ base: '1', xl: '4' }}
      gridRow={{ base: '14', xl: '18' }}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      alignItems="center"
      justifyContent="center"
    >
      <MotionBox
        boxSize="100%"
        background="gray.700"
        opacity="0.4"
        position="absolute"
        variants={playerOpacityAnim}
        animate={controls}
      />
      <ReactPlayer
        width="initial"
        height="initial"
        style={{ gridColumn: '1/-1', gridRow: '1/-1' }}
        url="/assets/media/test-video.mp4"
        onDuration={(duration) => onSetDuration(duration)}
        playing={onPlaying}
        onProgress={(state) => setOnProgress(state)}
        onPlay={() => controls.start('playing')}
        onPause={() => controls.start('paused')}
      />
      <PlayerButton
        duration={onDuration}
        onSetPlaying={onSetPlaying}
        onPlaying={onPlaying}
        onProgress={onProgress}
        onPlayerMouseEnter={onMouseEnter}
      />
    </Flex>
  );
};

export default Player;
