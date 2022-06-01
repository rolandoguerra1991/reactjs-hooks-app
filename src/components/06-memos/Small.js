import React, { Fragment, memo } from 'react'

const Small = memo(({value}) => {
    console.log("<Small />")
  return (
    <Fragment>
        <small>{value}</small>
    </Fragment>
  )
})

export default Small