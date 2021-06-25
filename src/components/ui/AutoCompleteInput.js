import React from "react"
import Autocomplete from "@material-ui/lab/Autocomplete"
import TextField from "@material-ui/core/TextField"
import PropTypes from "prop-types"
import { makeStyles } from "@material-ui/core/styles"

const useStyles = makeStyles(() => ({
  root: {
    marginTop: 10,
  },
}))

const AutoCompleteInput = React.memo(
  ({ id, options, changeValue, label = 0 }) => {
    const classes = useStyles()

    return (
      <Autocomplete
        id={id}
        className={classes.root}
        options={options}
        getOptionLabel={(option) => option[label]}
        selectOnFocus
        onChange={(_, val) => changeValue(val)}
        getOptionSelected={(option, val) =>
          option[label] === val[label] || null
        }
        renderInput={(params) => (
          <TextField {...params} label="Choose operation" variant="outlined" />
        )}
      />
    )
  }
)

AutoCompleteInput.propTypes = {
  id: PropTypes.string.isRequired,
  options: PropTypes.array.isRequired,
  changeValue: PropTypes.func.isRequired,
  label: PropTypes.any,
}

export default AutoCompleteInput
