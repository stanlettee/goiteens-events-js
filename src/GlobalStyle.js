import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
body {
    background-color: #ebebebff;
}

* {
    box-sozing: border-box;
}

h1, h2, h3, h4, p, a, ul, li {
    margin: 0;
    padding: 0;
}

ul {
    list-style: none;
}

a {
    text-decoration: none;
}
    
`