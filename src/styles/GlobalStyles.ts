import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;

    color: var(--white);
  }

  html, body, #root {
    max-height: 100vh;
    max-width: 100vw;

    height: 100%;
    width: 100%;
  }

  *, button, input {
    border: 0;
    background: none;
    font-family: --apple-system, system-ui, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  }

  html {
    background: var(--primary);
  }

  :root {
    --black: #000;
    --dark-gray: #15181C;
    --ligh-gray: #7A7A7A;
    --medium-gray: #202327;
    --white: #fff;
    --outline: #2F3336;
    --water: #33A1F2;
    --water-hover: #2C8ED6;
    --fire: #ff2600;
    --fire-hover: #db2100;
    --star: #fff200;
  }

`;