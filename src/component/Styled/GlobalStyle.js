const { createGlobalStyle } = require("styled-components");

export const GlobalStyle = createGlobalStyle`

*,
*::after,
*::before{
    margin: 0;
    padding: 0;
    box-sizing: inherit;
  }
  
  body {
    box-sizing: border-box;
    background-color: hsl(216, 12%, 8%);
    height: 100vh;
    width: 100%;
    display: grid;
    place-items: center;
    padding: 0 1rem;
  }



`