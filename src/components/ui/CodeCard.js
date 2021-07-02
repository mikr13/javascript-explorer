import React from "react"
import { makeStyles } from "@material-ui/core/styles"
import Grid from "@material-ui/core/Grid"
import Box from "@material-ui/core/Box"
import Typography from "@material-ui/core/Typography"
import Card from "@material-ui/core/Card"
import CardContent from "@material-ui/core/CardContent"
import PropTypes from "prop-types"

const useStyles = makeStyles({
  title: {
    color: "#f50057",
  },
})

const CodeDetailsCard = React.memo(({ data, defaultCode }) => {
  const classes = useStyles()

  return (
    <Grid item xs={12}>
      <Card variant="outlined" elevation={3}>
        <CardContent>
          <Typography
            variant="h5"
            component="h3"
            gutterBottom
            className={classes.title}
          >
            Usage
          </Typography>
          <Box className="usage-code usage1">
            <Typography
              variant="body1"
              component="span"
              dangerouslySetInnerHTML={{ __html: defaultCode }}
            ></Typography>
            <br />
            <br />
            <Typography
              variant="body1"
              component="span"
              className="exampleoutput"
              dangerouslySetInnerHTML={{ __html: data.example }}
            ></Typography>
          </Box>
          <Box className="usage2">
            <Typography
              variant="h5"
              component="h3"
              gutterBottom
              className={classes.title}
            >
              Output
            </Typography>
            <Box className="usage-code">
              <Typography
                variant="body1"
                component="span"
                className="exampleoutput2"
                dangerouslySetInnerHTML={{ __html: data.output }}
              ></Typography>
            </Box>
          </Box>
        </CardContent>
      </Card>
    </Grid>
  )
})

CodeDetailsCard.propTypes = {
  data: PropTypes.object.isRequired,
  defaultCode: PropTypes.string.isRequired,
}

export default CodeDetailsCard
