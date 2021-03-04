import { Box, Image } from '@chakra-ui/react';
import GrayBox from './GrayBox';
import WhiteBottomBox from './WhiteBottomBox';
import WhiteUpperBox from './WhiteUpperBox';

const Picture = () => {
  return (
    <>
      <Box
        position="relative"
        display="grid"
        gridTemplateColumns="repeat(30, 1fr)"
        gridTemplateRows={{
          base: 'repeat(24, 1.81rem)',
          lg: 'repeat(24,1.8rem)',
        }}
      >
        <WhiteUpperBox />
        <GrayBox />
        <Image
          zIndex="0"
          gridColumn="9 / -1"
          gridRow="1"
          ml="auto"
          src="/assets/images/tommy-denim__header-men.jpg"
        />
        <Image
          position="absolute"
          gridRow="1"
          gridColumn="13 / span 4"
          paddingTop="109%"
          zIndex="2"
          src="/assets/images/guy_arm.png"
        />
        <WhiteBottomBox />
      </Box>
    </>
  );
};

export default Picture;
