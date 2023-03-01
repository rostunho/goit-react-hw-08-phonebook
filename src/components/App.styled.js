import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`

* {
    box-sizing: border-box;
}

body {
    background-color: ${({ theme }) => theme.colors.outsideBg} ;
}

h1, h2, h3, h4, h5, h6 {
    margin:0
}



`;
