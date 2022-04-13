import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
    * {
        padding: 0;
        margin: 0;
        box-sizing: border-box;
    }

    body{
        background-color: #ffffff;
        font-family: "Noto Sans KR",sans-serif;
    }
    
    a {
        color: inherit;
        text-decoration: none;
    }

    input, button {
        outline: none;
    }

    button {
        cursor: pointer;
    }

    ol, ul {
        list-style: none;
    }

    img {
        display: block;
    }
`

export default GlobalStyle;