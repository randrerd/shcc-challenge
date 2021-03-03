import { Global } from '@emotion/react';

const Fonts = () => (
  <Global
    styles={`
    @font-face {
        font-family: "Heroic Condensed";
        src: url("/assets/fonts/heroiccondensed-medium-webfont.woff");
        font-style: normal;
        font-weight: 500;
        font-display: swap;
      }

      @font-face {
        font-family: "Heroic Condensed";
        src: url("/assets/fonts/heroiccondensed-bold-webfont.woff");
        font-style: normal;
        font-weight: 700;
        font-display: swap;
      }

      @font-face {
        font-family: "Heroic Condensed";
        src: url("/assets/fonts/heroiccondensed-black-webfont.woff");
        font-style: normal;
        font-weight: 800;
        font-display: swap;
      }

      @font-face {
        font-family: "Heroic Condensed";
        src: url("/fonts/heroiccondensed-heavy-webfont.woff");
        font-style: normal;
        font-weight: 900;
        font-display: swap;
      }
      `}
  />
);

export default Fonts;
