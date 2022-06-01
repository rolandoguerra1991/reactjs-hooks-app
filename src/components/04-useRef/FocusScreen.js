import React, { Fragment, useRef } from 'react'
import './useRef.css'

const FocusScreen = () => {
  const input = useRef()

  const handleFocus = () => {
    input.current.focus()
  }

  return (
    <Fragment>
        <h1>FocusScreen</h1>
        <hr/>
        <input
            ref={input}
            type="text"
            className="form-control mb-5"
        />
        <button 
            className='btn btn-outline-primary'
            onClick={handleFocus}
        >
            Focus
        </button>
    </Fragment>
  )
}

export default FocusScreen