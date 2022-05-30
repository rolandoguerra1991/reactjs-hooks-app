import React, { Fragment, useEffect, useState } from 'react'

const Message = () => {
  const [ coords, setCoords ] = useState({ x:0, y:0 });
  const { x, y } = coords;
  const mouseMove = ({x, y}) => {
    console.log({ x, y });
    setCoords({ x, y });
  }

  useEffect(() => {
    console.log('Component Mounted!!');
    window.addEventListener('mousemove', mouseMove);
    return () => {
      console.log('Component Unmounted!!');
      window.removeEventListener('mousemove', mouseMove);
    }
  }, [])
  
  return (
    <Fragment>
      <p>You are Great!!!</p>
      <p>X: {x} Y: {y}</p>
    </Fragment>
  )
}

export default Message