/* eslint-disable react/style-prop-object */
/* eslint-disable jsx-a11y/anchor-has-content */
import React, { useMemo } from "react"
import { useSelector } from "react-redux"
import CssBaseline from "@material-ui/core/CssBaseline"
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles"
import Layout from './ui/Layout'

const App = () => {
  const { prefersDarkMode } = useSelector((state) => state.ui)

  const theme = useMemo(
    () =>
      createMuiTheme({
        palette: {
          type: prefersDarkMode ? "dark" : "light",
        },
      }),
    [prefersDarkMode]
  )

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Layout />
    </ThemeProvider>
  )
}

export default App
