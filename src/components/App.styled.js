import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`

body {
    background-color: ${({ theme }) => theme.colors.appBg} ;
}

h1, h2, h3, h4, h5, h6 {
    margin:0
}

`;
