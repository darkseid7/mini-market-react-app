import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
 
 }

 a {
  all: unset;
 }

`;

const customMediaQuery = (maxWidth) => `@media (max-width: ${maxWidth}px)`;
export const media = {
  desktop_m: customMediaQuery(1200),
  tablet: customMediaQuery(1000),
  tablet_s: customMediaQuery(768),
  phone: customMediaQuery(480),
};
