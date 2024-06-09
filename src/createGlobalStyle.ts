import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  /* Global styles */
  body {
    font-family: Arial, sans-serif;
    background-color: #f0f0f0;
    color: #333;
  }

`;

export default GlobalStyles;