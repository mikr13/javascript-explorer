import React from "react"
import { makeStyles } from "@material-ui/core/styles"
import Grid from "@material-ui/core/Grid"
import Typography from "@material-ui/core/Typography"
import Divider from "@material-ui/core/Divider"
import Card from "@material-ui/core/Card"
import CardActions from "@material-ui/core/CardActions"
import CardContent from "@material-ui/core/CardContent"
import Link from "@material-ui/core/Link"
import PropTypes from "prop-types"
import CodeCard from "./CodeCard"
import LaunchIcon from "@material-ui/icons/Launch"

const useStyles = makeStyles({
  title: {
    color: "#f50057",
  },
  divider: {
    marginTop: 20,
    marginBottom: 20,
  },
})

const CodeDetailsCard = React.memo(({ main, data, url, defaultCode }) => {
  const classes = useStyles()

  return (
    <Grid item xs={12}>
      <Card variant="outlined" elevation={3}>
        <CardContent>
          <Typography
            variant="h4"
            component="h2"
            gutterBottom
            className={classes.title}
          >
            {main}.{data.name}()
          </Typography>
          <Typography
            dangerouslySetInnerHTML={{ __html: data.desc }}
          ></Typography>
          <Divider className={classes.divider} />
          <CodeCard data={data} defaultCode={defaultCode} />
        </CardContent>
        <CardActions>
          {url && url.length && (
            <Link variant="h5" href={url} target="_blank" rel="noreferrer">
              See the docs <LaunchIcon />
            </Link>
          )}
        </CardActions>
      </Card>
    </Grid>
  )
})

CodeDetailsCard.propTypes = {
  data: PropTypes.object.isRequired,
  main: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
  defaultCode: PropTypes.string.isRequired,
}

export default CodeDetailsCard
