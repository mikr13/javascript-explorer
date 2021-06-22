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
import DataStructuresTab from "./DataStructuresTab"
import { changeDarkMode } from "../../redux/UiReducer"

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.background.paper,
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
  const { prefersDarkMode } = useSelector((state) => state.ui)
  const classes = useStyles()
  const dispatch = useDispatch()

  const changeColor = () => dispatch(changeDarkMode())

  return (
    <Container maxWidth="lg">
      <Typography variant="h1" noWrap={true}>
        <span>JavaScript</span> Explorer
      </Typography>
      <Grid container my={4} className={classes.root}>
        <Slider />
        <DataStructuresTab />
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
