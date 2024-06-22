import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  body {
    background-color: ${({ theme }) => theme.palette.background.default};
    color: ${({ theme }) => theme.palette.text.primary};
    margin: 0;
    padding: 0;
    font-family: 'Roboto', sans-serif;
  }

  a {
    color: ${({ theme }) => theme.palette.primary.main};
  }

  .MuiPaper-root {
    background-color: ${({ theme }) => theme.palette.background.paper};
  }

  .MuiButton-root {
    color: ${({ theme }) => theme.palette.text.primary};
  }
`;

export default GlobalStyles;