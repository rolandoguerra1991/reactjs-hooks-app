import React from 'react'

const ShowIncrement = React.memo(({increment}) => {
    console.log('aaa')
  return (
    <button className='btn btn-primary' onClick={increment}>
        +1
    </button>
  )
})

export default ShowIncrement