"use client";

import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;   
    }

    html {
        font-size: 62.5%;
    }

    body {
        -webkit-font-smoothing: antialiased;
        font-size: 16px;
        background: ${(props) => props.theme.gray900}
    } 
    
    body, input, textarea, button {
        font-family: 'Roboto';
        font-weight: 400;
    }
`;
