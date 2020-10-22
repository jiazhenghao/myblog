// import { ThemeProvider } from "styled-components"
// import Theme from "./src/themes/theme"
// import React from "react"

// export const wrapRootElement = ({ element }) => (
//   <ThemeProvider theme={Theme}>{element}</ThemeProvider>
// )

import { createGlobalStyle, ThemeProvider } from "styled-components"
import Theme from "./src/themes/theme"
import React from "react"

const GlobalStyles = createGlobalStyle`
    * {
        box-sizing: border-box;
        margin: 0;
        padding: 0;
    }

    body, html {
        font-family: ${props => props.theme.fonts.main};
        height: 100%;
        background-color: ${props => props.theme.colors.light1};
    }
`

export const wrapRootElement = ({ element }) => (
  <ThemeProvider theme={Theme}>
    <GlobalStyles />
    {element}
  </ThemeProvider>
)
