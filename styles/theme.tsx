import { extendTheme } from '@chakra-ui/react';
import { createBreakpoints } from '@chakra-ui/theme-tools';

const breakpoints = createBreakpoints({
  sm: '32em',
  md: '48em',
  lg: '90em',
  xl: '96em',
  '2xl': '105em',
});

const fonts = { body: `"Heroic Condensed",-apple-system,Arial,sans-serif` };

const global = {
  html: {
    minWidth: '360px',
    scrollBehavior: 'smooth',
    fontSize: { base: '16px', md: '18px', lg: '20px' },
  },
  '#__next': { display: 'flex', flexDirection: 'column', minHeight: '100vh' },
};

const colors = { brand: '#FF1A3E', secondary: '#00174f' };

const components = {
  Heading: {
    baseStyle: {
      fontFamily: `"Heroic Condensed",-apple-system,Arial,sans-serif`,
    },
  },
};

const CustomTheme = extendTheme({
  breakpoints,
  fonts,
  colors,
  components,
  styles: { global },
});

export const customContainer = { base: '90%', xl: '65%' };

export default CustomTheme;
