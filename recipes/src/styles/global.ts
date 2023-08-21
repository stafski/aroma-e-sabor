import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    :root{
        font-size: 6.25%;
        --color-primary: #64B07E;
        --color-secondary: #A2D2B2;
        --green-500: #457254;
        --grey-600: #312C2C;
        --grey-300: #413F3F;
        --grey-200: #BBB3B3;
        --grey-100: #E1E1E1;
        --grey-0: #FEFEFE;
        --negative: #C42B2B;
    }
    *{
        box-sizing: border-box;
        margin: 0;
        padding: 0;
        font-family: 'Archivo', sans-serif;
    }
    button{
        cursor: pointer;
        background: transparent;
        border: none;
    }
    ul, ol{
        list-style: none;
    }
    input{
        border: none;
        background: transparent;
        border-radius: 0;
    }
    body{
        width: 100%;
        background-color: var(--grey-100);
    }
    #root{
        width: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
    }
    .Toastify__toast {
        font-size: 16rem;
    }
`;
