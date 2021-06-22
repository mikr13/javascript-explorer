import React from 'react'
import Box from '@material-ui/core/Box'
import { makeStyles } from '@material-ui/core'
import PropTypes from 'prop-types'

const useStyles = makeStyles(() => ({
  root: {
    marginLeft: 30
  }
}))

const TabPanel = (props) => {
  const classes = useStyles()
  const { children, value, index, ...other } = props

  return (
    <Box
      role="tabpanel"
      hidden={value !== index}
      id={`tabpanel-${ index }`}
      aria-labelledby={`tab-${ index }`}
      className={classes.root}
      mx={2}
      {...other}
    >
      {value === index && (children)}
    </Box>
  )
}

TabPanel.propTypes = {
  children: PropTypes.node.isRequired,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
}

export default TabPanel
