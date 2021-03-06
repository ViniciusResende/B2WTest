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
    scroll-behavior: smooth;
    overflow-y: scroll;
  }

  :root {
    --black: #000;
    --dark-gray: #15181C;
    --ligh-gray: #dedede;
    --medium-light-gray: #b8b8b8;
    --medium-gray: #202327;
    --white: #fff;
    --outline: #2F3336;
    --water-hover: #2C8ED6;
    --fire-hover: #db2100;
    --grass-hover: #009c00;
    --star: #fff200;
  }

`;