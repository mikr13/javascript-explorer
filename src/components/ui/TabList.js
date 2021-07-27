import React from "react"
import Grid from "@material-ui/core/Grid"
import { useSelector } from "react-redux"
import TabPanel from "./TabPanel"
import Details from "../ds/Details"
import { tabs } from '../../assets/json/ui.json'

const TabList = () => {
  const { tabIndex } = useSelector((state) => state.ui)

  return (
    <Grid item md={12} lg={10}>
      {tabs.map((el, index) => (
        <TabPanel key={el.name} index={index} value={tabIndex}>
          <Details label={el.name} />
        </TabPanel>
      ))}
    </Grid>
  )
}

export default TabList
