import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
:root{
    --color : #fff;
    --basecolor : #242C36;
    --content : #777B84;
    --content2 : #303741;
}
html{
    font-size: 62.5%;
}
body{
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
}
`

export default GlobalStyles;