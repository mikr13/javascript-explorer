import React from 'react'
import Box from '@material-ui/core/Box'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'

const Arrays = () => {
  const id = `input-Array`
  return (
    <Box>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Typography variant="h2">Array Explorer</Typography>
          <Typography variant="subtitle1">Find the array method you need without digging through the docs</Typography>
        </Grid>
        <Grid item xs={12}>
          <label htmlFor={id}>
            <Typography variant="body1">I have an Array, I would like to: </Typography>
          </label>
        </Grid>
        <Grid item xs={12}>
        </Grid>
      </Grid>
    </Box>
  )
}

export default Arrays
