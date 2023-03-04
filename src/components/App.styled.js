import { createGlobalStyle } from 'styled-components';
import 'react-toastify/dist/ReactToastify.css';

export const GlobalStyle = createGlobalStyle`
* {
    box-sizing: border-box;
}

:root {
  --toastify-font-family: 'Roboto';
  --toastify-color-light: #fff;
  --toastify-color-dark: #121212;

  --toastify-color-info: #00A3FF;
  --toastify-color-success: #41c74e;
  --toastify-color-warning: #f1c40f;
  --toastify-color-error: #C81D1D;

  --toastify-icon-color-info: var(--toastify-color-info);
  --toastify-icon-color-success: var(--toastify-color-success);
  --toastify-icon-color-warning: var(--toastify-color-warning);
  --toastify-icon-color-error: var(--toastify-color-error);
}

body {
    background-color: ${({ theme }) => theme.colors.outsideBg} ;
}

h1, h2, h3, h4, h5, h6 {
    margin:0
}

ul {
  margin: 0;
  padding: 0;
  list-style: none;
}
`;
