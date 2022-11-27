import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  :focus {
    box-shadow: 0 0 0 2px ${(props) => props.theme['yellow-dark']};
    outline: 0;
  }

  body {
    background-color: ${(props) => props.theme.background};
    color: ${(props) => props.theme['base-text']};
    -webkit-font-smoothing: antialiased;
  }

  body,
  input,
  textarea,
  button {
    font-family: 'Roboto', sans-serif;
    font-size: 1rem;
    font-weight: 400;
  }

  ul {
    list-style: none;
  }

  @media(max-width: 580px) {
    html {
      font-size: 87.5%;
    }
  }
`;
