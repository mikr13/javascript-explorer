import React from "react"
import Tabs from "@material-ui/core/Tabs"
import Grid from "@material-ui/core/Grid"
import { makeStyles } from "@material-ui/core/styles"
import { useSelector, useDispatch } from "react-redux"
import Tab from "@material-ui/core/Tab"
import { TOGGLE_TAB_INDEX } from "../../redux/UiReducer"

const a11yProps = (index) => ({
  id: `vertical-tab-${index}`,
  "aria-controls": `vertical-tabpanel-${index}`,
})

const useStyles = makeStyles((theme) => ({
  root: {
    borderRight: `1px solid ${theme.palette.divider}`,
  },
}))

const TabsList = () => {
  const classes = useStyles()
  const { tabIndex, tabs } = useSelector((state) => state.ui)
  const dispatch = useDispatch()

  const handleChange = (_, value) => dispatch({ type: TOGGLE_TAB_INDEX, value })

  return (
    <Grid xs={2}>
      <Tabs
        orientation="vertical"
        variant="scrollable"
        value={tabIndex}
        onChange={handleChange}
        aria-label="categories-tab"
        classes={{ ...classes }}
      >
        {tabs.map(({ name, value }) => (
          <Tab label={name} key={value} {...a11yProps(value)} />
        ))}
      </Tabs>
    </Grid>
  )
}

export default TabsList
