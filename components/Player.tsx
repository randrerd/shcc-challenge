import { useState } from 'react';
import { Box } from '@chakra-ui/layout';
import ReactPlayer from 'react-player';
import PlayerButton from './PlayerButton';

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
  const [onMouseLeave, setOnMouseLeave] = useState<boolean>(false);

  const handleMouseEnter = () => {
    setOnMouseEnter((s) => (!s ? true : false));
  };

  return (
    <Box
      position="absolute"
      gridColumn={{ base: '1', xl: '4' }}
      gridRow={{ base: '14', xl: '18' }}
      display="grid"
      gridTemplateRows="repeat(10,1fr)"
      gridTemplateColumns="repeat(10,1fr)"
      onMouseEnter={handleMouseEnter}
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
        onPlayerHover={onMouseEnter}
      />
    </Box>
  );
};

export default Player;
