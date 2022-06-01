import React, { Fragment, useState } from 'react'
import useCounter from '../../hooks/useCounter'
import '../02-useEffect/effects.css'
import Small from './Small';

const Memos = () => {
  const {counter, increment} = useCounter();
  const [show, setShow] = useState(false)
  return (
    <Fragment>
      <h1>Counter : <Small value={counter}/></h1>
      <button
        className='btn btn-primary me-3'
        onClick={increment}
      >
        +1
      </button>
      <button
        className='btn btn-primary'
        onClick={setShow}
      >
        Toggle
      </button>
    </Fragment>
  )
}

export default Memos