import React, { Fragment, useState } from 'react'
import MultipleCustomHooks from '../03-examples/MultipleCustomHooks'
import './useRef.css'

const RealExample = () => {
  const [show, setShow] = useState(false)

  return (
    <Fragment>
        <h1>RealExample</h1>
        <button 
            className="btn btn-primary mt-3"
            onClick={() => {
                setShow(!show)
            }}
        >
            Toggle component
        </button>
        { show && <MultipleCustomHooks /> }
    </Fragment>
  )
}

export default RealExample