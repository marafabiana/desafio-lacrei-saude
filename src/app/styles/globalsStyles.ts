import { createGlobalStyle } from "styled-components";
import colors from "./colors";

export const GlobalStyle = createGlobalStyle`


  body {
    background: background: ${colors.brand.invert400};
    color: ${colors.brand.heading400};
    font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
    margin: 0;
    padding: 0;
  }

  h1, h2, h3, h4 {
    color: ${colors.brand.heading400};
  }
`;
