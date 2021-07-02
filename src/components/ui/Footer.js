import React from "react"
import { makeStyles } from "@material-ui/core/styles"
import Link from "@material-ui/core/Link"
import GitHub from "@material-ui/icons/GitHub"
import LinkedIn from "@material-ui/icons/LinkedIn"

const useStyles = makeStyles((theme) => ({
  footer: {
    position: "absolute",
    marginTop: 40,
    width: "100%",
    padding: theme.spacing(3, 2),
    // marginTop: "auto",
    backgroundColor:
      theme.palette.type === "light"
        ? theme.palette.grey[200]
        : theme.palette.grey[800],
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
  },
  icons: {
    padding: 5,
    marginLeft: 10,
    marginRight: 10,
  },
}))

export default function Footer() {
  const classes = useStyles()

  return (
    <footer className={classes.footer}>
      <Link
        className={classes.icons}
        href="https://github.com/mikr13/"
        target="_blank"
      >
        <GitHub />
      </Link>
      <Link
        className={classes.icons}
        href="https://www.linkedin.com/in/mikr13"
        target="_blank"
      >
        <LinkedIn />
      </Link>
    </footer>
  )
}
