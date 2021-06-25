import React from "react"
import Container from "@material-ui/core/Container"
import Grid from "@material-ui/core/Grid"
import { makeStyles } from "@material-ui/core"
import Typography from "@material-ui/core/Typography"
import Slider from "./Slider"
import TabList from "./TabList"
import { useTheme } from "@material-ui/core/styles"
import useMediaQuery from "@material-ui/core/useMediaQuery"

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.background.paper,
    paddingTop: 10,
    paddingBottom: 30,
  },
}))

const Layout = () => {
  const theme = useTheme()
  const matches = useMediaQuery(theme.breakpoints.down("md"))
  const classes = useStyles()

  return (
    <Container maxWidth="lg">
      <Typography variant="h1" className={matches ? "responsive-h1" : ""}>
        <span>{matches ? "JS" : "JavaScript"}</span> Explorer
      </Typography>
      <Grid container my={4} className={classes.root}>
        <Slider />
        <TabList />
      </Grid>
    </Container>
  )
}

export default Layout
