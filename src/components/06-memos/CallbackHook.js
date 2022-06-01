import React, { Fragment, useCallback, useState } from 'react'
import '../02-useEffect/effects.css'
import ShowIncrement from './ShowIncrement'

const CallbackHook = () => {
  const [counter, setCounter] = useState(50)

  const increment = useCallback(
    () => {
      setCounter(c => c + 1);
    },
    [setCounter],
  )
  
  return (
    <Fragment>
        <h1>CallbackHook: {counter}</h1>
        <hr/>
        <ShowIncrement increment={increment}/>
    </Fragment>
  )
}

export default CallbackHook