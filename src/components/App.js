/* eslint-disable react/style-prop-object */
/* eslint-disable jsx-a11y/anchor-has-content */
import React, { useMemo } from "react"
import { useSelector, useDispatch } from "react-redux"
import CssBaseline from "@material-ui/core/CssBaseline"
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles"
import Fab from "@material-ui/core/Fab"
import WbSunnyIcon from "@material-ui/icons/WbSunny"
import NightsStayIcon from "@material-ui/icons/NightsStay"
import Layout from "./ui/Layout"
import { changeDarkMode } from "../redux/UiReducer"

const App = () => {
  const { prefersDarkMode } = useSelector((state) => state.ui)
  const dispatch = useDispatch()

  const changeColor = () => dispatch(changeDarkMode())

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
      <Fab
        aria-label="theme-change"
        className="theme-switcher-fab"
        onClick={() => changeColor()}
      >
        {prefersDarkMode ? <WbSunnyIcon /> : <NightsStayIcon />}
      </Fab>
    </ThemeProvider>
  )
}

export default App
