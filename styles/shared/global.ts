import { css } from "@emotion/react";
import colors from "./colors";

const fontPath = "/fonts/";

const globalStyles = css`
  @font-face {
    font-family: "Fira Code";
    src: url("${fontPath}FiraCode-Medium.ttf") format("truetype");
    font-weight: 500;
    font-style: normal;
    font-display: swap;
  }

  @font-face {
    font-family: "Fira Code";
    src: url("${fontPath}FiraCode-Light.ttf") format("truetype");
    font-weight: 300;
    font-style: normal;
    font-display: swap;
  }

  @font-face {
    font-family: "Fira Code";
    src: url("${fontPath}FiraCode-Bold.ttf") format("truetype");
    font-weight: bold;
    font-style: normal;
    font-display: swap;
  }

  @font-face {
    font-family: "Fira Code";
    src: url("${fontPath}FiraCode-Regular.ttf") format("truetype");
    font-weight: normal;
    font-style: normal;
    font-display: swap;
  }

  @font-face {
    font-family: "Fira Code";
    src: url("${fontPath}FiraCode-SemiBold.ttf") format("truetype");
    font-weight: 600;
    font-style: normal;
    font-display: swap;
  }
  a {
    text-decoration: none;
  }
  a:hover {
    text-decoration: none;
  }
  *,
  html,
  body,
  h1,
  h2,
  h3,
  h4,
  h5,
  p,
  article,
  aside,
  figcaption,
  figure {
    margin: 0;
    padding: 0;
  }
  body {
    background-color: ${colors.BG_DARK};
  }
  *,
  :after,
  :before {
    box-sizing: border-box;
  }
  @media only screen and (min-width: 1200px) {
    html {
      fontsize: 16px;
    }
  }
  @media only screen and (min-width: 1400px) {
    html {
      fontsize: 18px;
    }
  }
  @media only screen and (min-width: 1800px) {
    html {
      fontsize: 20px;
    }
  }
`;
export default globalStyles;
