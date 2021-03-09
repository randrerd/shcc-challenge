import { useState } from 'react';
import { Box, Flex } from '@chakra-ui/layout';
import ReactPlayer from 'react-player';
import PlayerButton from './PlayerButton';
import { MotionBox } from './Motion';
import { useAnimation } from 'framer-motion';
import { playerOpacityAnim } from '@/lib/variants';
import { customContainer } from '@/styles/theme';

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
    <Box
      as="section"
      margin="0 auto"
      width={customContainer}
      maxWidth="1011px"
      py={{ base: '3.5em', md: '0' }}
    >
      <Flex
        position="relative"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        alignItems="center"
        justifyContent="center"
        maxWidth="637px"
        bottom={{ base: 'initial', md: '8.5em', xl: '2.5em' }}
        right={{ xl: '8%' }}
        margin="0 auto"
        _before={{
          content: '""',
          background: 'gray.700',
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
    </Box>
  );
};

export default Player;
