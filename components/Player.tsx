import { useState } from 'react';
import ReactPlayer from 'react-player';
import useScroll from '@/lib/useScroll';

import { Box } from '@chakra-ui/layout';
import { customContainer } from '@/styles/theme';

import PlayerButton from './PlayerButton';
import MovingGrid from './MovingGrid';
import { MotionFlex } from './Motion';
import { playerBoxAnim } from '@/lib/variants';

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
  const [element, controls] = useScroll();

  const handleMouseEnter = () => {
    setOnMouseEnter(true);
  };

  const handleMouseLeave = () => {
    setOnMouseEnter(false);
  };

  return (
    <Box
      as="section"
      position="relative"
      margin="0 auto"
      width={customContainer}
      maxWidth="1011px"
      padding={{ base: '3.5em 0', sm: '0 0 3.5em 0' }}
      top={{ base: '10.5em', sm: '4.5em', md: 'initial' }}
      ref={element}
    >
      <MotionFlex
        animate={controls}
        variants={playerBoxAnim}
        visibility="hidden"
        opacity={0}
        position="relative"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        alignItems="center"
        justifyContent="center"
        maxWidth="637px"
        bottom={{
          base: 'initial',
          md: '1.4em',
        }}
        right={{ md: '8%' }}
        margin="0 auto"
        _before={{
          content: '""',
          background: 'black',
          opacity: !onPlaying ? 0.4 : 0,
          position: 'absolute',
          transition: 'all 0.7s ease',
          top: 0,
          width: '100%',
          height: '100%',
        }}
      >
        <ReactPlayer
          width="initial"
          height="initial"
          style={{ gridColumn: '1/-1', gridRow: '1/-1' }}
          url="/assets/media/test-video.mp4"
          onDuration={(duration) => onSetDuration(duration)}
          playing={onPlaying}
          onProgress={(state) => setOnProgress(state)}
        />
        <PlayerButton
          duration={onDuration}
          onSetPlaying={onSetPlaying}
          onPlaying={onPlaying}
          onProgress={onProgress}
          onPlayerMouseEnter={onMouseEnter}
        />
      </MotionFlex>
      <MovingGrid />
    </Box>
  );
};

export default Player;
