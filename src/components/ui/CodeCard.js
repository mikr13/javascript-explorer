import React from "react"
import { makeStyles } from "@material-ui/core/styles"
import Grid from "@material-ui/core/Grid"
import Box from "@material-ui/core/Box"
import Typography from "@material-ui/core/Typography"
import Card from "@material-ui/core/Card"
import CardContent from "@material-ui/core/CardContent"
import PropTypes from "prop-types"
import SyntaxHighlighter from 'react-syntax-highlighter';
import { docco } from 'react-syntax-highlighter/dist/esm/styles/hljs';

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
          <SyntaxHighlighter language="javascript" style={docco}>
            {`${defaultCode} \n${data.example}`}
          </SyntaxHighlighter>
          <Box className="usage2">
            <Typography
              variant="h5"
              component="h3"
              gutterBottom
              className={classes.title}
            >
              Output
            </Typography>
            <SyntaxHighlighter style={docco}>
              {`${data.output}`}
            </SyntaxHighlighter>
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
