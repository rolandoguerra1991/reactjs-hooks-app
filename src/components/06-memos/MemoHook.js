import React, { Fragment, useMemo, useState } from 'react'
import procesoPesado from '../../helpers/procesoPesado';
import useCounter from '../../hooks/useCounter'
import '../02-useEffect/effects.css'

const MemoHook = () => {
  const {counter, increment} = useCounter(5000);
  const [show, setShow] = useState(false);

  const procesoProcesado = useMemo(() => procesoPesado(counter), [counter])

  return (
    <Fragment>
      <h1>MemoHook</h1>
      <h2>Counter : <small>{counter}</small></h2>
      <h3>{procesoProcesado}</h3>
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

export default MemoHook