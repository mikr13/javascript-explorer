import React, { useState } from "react"
import Grid from "@material-ui/core/Grid"
import Alert from "@material-ui/lab/Alert"
import Typography from "@material-ui/core/Typography"
import PropTypes from "prop-types"
import AutoCompleteInput from "../ui/AutoCompleteInput"
import DetailsCard from "../ui/DetailsCard"

const Details = ({ label }) => {
  const id = `input-${label.toLowerCase()}`
  const idSub = `${id}-sub-option`
  const [valueTopLevel, changeValueTopLevel] = useState()
  const [valueSubLevel, changeValueSubLevel] = useState()
  const data = require(`../../assets/json/${label.toLowerCase()}.en.json`)

  const change = (val) => {
    changeValueSubLevel()
    changeValueTopLevel(val)
  }

  return (
    <Grid container spacing={3}>
      <Grid item xs={12}>
        <Typography variant="h2">{label} Explorer</Typography>
        <Typography variant="subtitle1">
          Find the {label.toLowerCase()} method you need without digging through
          the docs
        </Typography>
      </Grid>
      {data.specialNote && (
        <Grid item xs={12}>
          <Alert icon={false} severity="warning">
            {data.specialNote}
          </Alert>
        </Grid>
      )}
      {data.dropdownLabel && (
        <Grid item xs={12}>
          <label htmlFor={id}>
            <Typography variant="body1">{data.dropdownLabel}</Typography>
          </label>
        </Grid>
      )}
      {data.options && (
        <Grid item xs={12}>
          <AutoCompleteInput
            id={id}
            options={Object.entries(data.options)}
            changeValue={change}
          />
        </Grid>
      )}
      {valueTopLevel && valueTopLevel.length && (
        <>
          <Grid item xs={12}>
            <label htmlFor={idSub}>
              <Typography variant="body1">
                {valueTopLevel[1].dropdownLabel}
              </Typography>
            </label>
          </Grid>
          <Grid item xs={12}>
            <AutoCompleteInput
              id={idSub}
              options={valueTopLevel[1].options}
              changeValue={changeValueSubLevel}
              label="shortDesc"
            />
          </Grid>
        </>
      )}
      {valueSubLevel && Object.keys(valueSubLevel).length && (
        <DetailsCard
          main="String"
          url={`${data.baseUrl}${valueSubLevel.name}`}
          data={valueSubLevel}
          defaultCode={data.defaultCode}
        />
      )}
    </Grid>
  )
}

Details.propTypes = {
  label: PropTypes.string.isRequired,
}

export default Details
