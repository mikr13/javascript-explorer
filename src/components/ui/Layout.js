import React from 'react'
import Container from '@material-ui/core/Container'
import Box from '@material-ui/core/Box'
import { makeStyles } from '@material-ui/core'
import { useSelector, useDispatch } from "react-redux"
import Typography from '@material-ui/core/Typography'
import Fab from '@material-ui/core/Fab'
import WbSunnyIcon from '@material-ui/icons/WbSunny'
import NightsStayIcon from '@material-ui/icons/NightsStay'
import Slider from './Slider'
import DataStructuresTab from './DataStructuresTab'
import { changeDarkMode } from '../../redux/UiReducer'

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
    display: 'flex'
  },
  fab: {
    position: 'absolute',
    bottom: theme.spacing(2),
    right: theme.spacing(2),
    backgroundColor: '#f50057',
    color: '#fff'
  }
}))

const Layout = () => {
  const { prefersDarkMode } = useSelector((state) => state.ui)
  const classes = useStyles()
  const dispatch = useDispatch()

  const changeColor = () => dispatch(changeDarkMode())

  return (
    <Container maxWidth="xl">
      <Typography variant="h1"><span>JavaScript</span> Explorer</Typography>
      <Box my={4} className={classes.root}>
        <Slider />
        <DataStructuresTab />
      </Box>
      <Fab aria-label="theme-change" className={classes.fab} onClick={() => changeColor()}>
        {prefersDarkMode ? <WbSunnyIcon /> : <NightsStayIcon />}
      </Fab>
    </Container>
  )
}

export default Layout
