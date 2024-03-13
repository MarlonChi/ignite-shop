"use client";

import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;   
    }

    body {
        -webkit-font-smoothing: antialiased;
        background: ${(props) => props.theme.gray900};
        color: ${(props) => props.theme.white};
    } 
    
    body, input, textarea, button {
        font-family: 'Roboto';
        font-weight: 400;
    }
`;
