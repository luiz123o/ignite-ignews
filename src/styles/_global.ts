import { createGlobalStyle, css } from 'styled-components'

export default createGlobalStyle`
  ${({ theme }) => css`
    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
      outline: 0;
    }
    html {
      height: 100%;
      @media (min-width: 1981px) {
        font-size: 80%;
      }
      @media (min-width: 1000px) {
        font-size: 93.75%;
      }
      @media (min-width: 720px) {
        font-size: 87.5%;
      }
    }
    body {
      height: 100%;
      text-rendering: optimizeLegibility !important;
      -webkit-font-smoothing: antialiased !important;
      -moz-osx-font-smoothing: grayscale;
      background: ${theme.colors.background};
      color: ${theme.colors.text};
    }
    body,
    #__next {
      min-height: 100vh;
      position: relative;
      display: flex;
      flex-direction: column;
    }
    #__next {
      height: 100%;
    }
    body,
    input,
    button {
      font: 1rem 'Roboto', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto,
        Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji',
        'Segoe UI Symbol';
      line-height: 1.48;
      border: 0;
    }
    a {
      text-decoration: none;
      background: none;
      font-weight: 500;
      cursor: pointer;
      border: 0;
      color: inherit;
      transition: 180ms ease-in-out;
    }
    button {
      cursor: pointer;
      border: 0;
      background: none;
    }
    ul {
      list-style: none;
      text-align: left;
      padding: 0;
    }
    h1,
    h2,
    h3,
    h4,
    h5,
    strong {
      color: ${theme.colors.titles};
    }
  `}
`
