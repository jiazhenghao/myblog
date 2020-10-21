import { ThemeProvider } from "styled-components"
import Theme from "./src/themes/theme"
import React from "react"

export const wrapRootElement = ({ element }) => (
  <ThemeProvider theme={Theme}>{element}</ThemeProvider>
)
