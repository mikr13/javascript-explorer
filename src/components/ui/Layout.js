import React from "react"
import Container from "@material-ui/core/Container"
import Grid from "@material-ui/core/Grid"
import { makeStyles } from "@material-ui/core"
import { useSelector, useDispatch } from "react-redux"
import Typography from "@material-ui/core/Typography"
import Fab from "@material-ui/core/Fab"
import WbSunnyIcon from "@material-ui/icons/WbSunny"
import NightsStayIcon from "@material-ui/icons/NightsStay"
import Slider from "./Slider"
import TabList from "./TabList"
import { changeDarkMode } from "../../redux/UiReducer"
import { useTheme } from "@material-ui/core/styles"
import useMediaQuery from "@material-ui/core/useMediaQuery"

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.background.paper,
    paddingTop: 10,
    paddingBottom: 30,
  },
  fab: {
    position: "absolute",
    bottom: theme.spacing(2),
    right: theme.spacing(2),
    backgroundColor: "#f50057",
    color: "#fff",
  },
}))

const Layout = () => {
  const theme = useTheme()
  const matches = useMediaQuery(theme.breakpoints.down("md"))
  const { prefersDarkMode } = useSelector((state) => state.ui)
  const classes = useStyles()
  const dispatch = useDispatch()

  const changeColor = () => dispatch(changeDarkMode())

  return (
    <Container maxWidth="lg">
      <Typography variant="h1" className={matches ? "responsive-h1" : ""}>
        <span>{matches ? "JS" : "JavaScript"}</span> Explorer
      </Typography>
      <Grid container my={4} className={classes.root}>
        <Slider />
        <TabList />
      </Grid>
      <Fab
        aria-label="theme-change"
        className={classes.fab}
        onClick={() => changeColor()}
      >
        {prefersDarkMode ? <WbSunnyIcon /> : <NightsStayIcon />}
      </Fab>
    </Container>
  )
}

export default Layout
