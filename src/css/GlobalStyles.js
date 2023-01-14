import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`

:root {
    --background-color: #111;
    --letters-color: #fff;
}

* {
    box-sizing: border-box;
}

body {
    margin: 0;
    padding: 0;
    background-color: var(--background-color);
    color: var(--letters-color);
    font-family: 'Roboto', sans-serif;
}
`;
