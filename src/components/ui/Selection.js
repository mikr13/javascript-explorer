import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from "react-redux"
import PropTypes from 'prop-types'
import Box from '@material-ui/core/Box'
import AutoCompleteInput from './AutoCompleteInput'

const Selection = ({ id, type, dispatchFunc }) => {
  const { topLevelOptions } = useSelector((state) => state[String(type).toLowerCase()])
  const [value, changeValue] = useState('')
  const options = Object.entries(topLevelOptions)
  const dispatch = useDispatch()

  useEffect(async () => {
    await dispatch(dispatchFunc(value))
  }, [value])

  return (
    <Box>
      <AutoCompleteInput options={options} changeValue={changeValue} id={id} />
    </Box>
  )
}

Selection.propTypes = {
  id: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  dispatchFunc: PropTypes.func.isRequired,
}

export default Selection
