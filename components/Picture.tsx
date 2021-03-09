import { Box, Image } from '@chakra-ui/react';
import GrayBox from './GrayBox';
import WhiteBottomBox from './WhiteBottomBox';
import WhiteUpperBox from './WhiteUpperBox';

const Picture = () => {
  return (
    <>
      <Box
        position="relative"
        gridColumn="1/-1"
        display="grid"
        gridTemplateColumns="repeat(30, 1fr)"
        gridTemplateRows="repeat(52,2%)"
      >
        <WhiteUpperBox />
        <GrayBox />
        <Image
          zIndex="1"
          gridColumn={{ base: '3/-1', md: '9 / -1' }}
          gridRow="1"
          ml="auto"
          src="/assets/images/tommy-denim__header-men.jpg"
        />
        <Image
          position="absolute"
          gridRow="1"
          gridColumn="13 / span 4"
          paddingTop="109%"
          zIndex={{ base: '1', xl: '3' }}
          display={{ base: 'none', xl: 'block' }}
          src="/assets/images/guy_arm.png"
        />
        <WhiteBottomBox />
      </Box>
    </>
  );
};

export default Picture;
