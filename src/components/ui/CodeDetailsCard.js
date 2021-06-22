import React from "react"
import PropTypes from "prop-types"

const CodeDetailsCard = React.memo(({ data }) => {
  return <>{JSON.stringify(data)}</>
})

CodeDetailsCard.propTypes = {
  data: PropTypes.object.isRequired,
  main: PropTypes.string.isRequired,
}

export default CodeDetailsCard
