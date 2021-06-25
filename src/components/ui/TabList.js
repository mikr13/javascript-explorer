import React from "react"
import Grid from "@material-ui/core/Grid"
import { useSelector } from "react-redux"
import TabPanel from "./TabPanel"
import Details from "../ds/Details"

const TabList = () => {
  const { tabIndex } = useSelector((state) => state.ui)

  return (
    <Grid item md={12} lg={10}>
      <TabPanel index={0} value={tabIndex}>
        <Details label="String" />
      </TabPanel>
      <TabPanel index={1} value={tabIndex}>
        <Details label="Array" />
      </TabPanel>
      <TabPanel index={2} value={tabIndex}>
        <Details label="Object" />
      </TabPanel>
    </Grid>
  )
}

export default TabList
