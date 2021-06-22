import React from 'react'
import { useSelector } from "react-redux"
import TabPanel from './TabPanel'
import Arrays from '../ds/Arrays'
import Objects from '../ds/Objects'
import Strings from '../ds/Strings'

const DataStructuresTab = () => {
  const { tabIndex } = useSelector((state) => state.ui)

  return (
    <>
      <TabPanel index={0} value={tabIndex}>
        <Arrays />
      </TabPanel>
      <TabPanel index={1} value={tabIndex}>
        <Objects />
      </TabPanel>
      <TabPanel index={2} value={tabIndex}>
        <Strings />
      </TabPanel>
    </>
  )
}

export default DataStructuresTab
