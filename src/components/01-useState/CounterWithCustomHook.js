import React, { Fragment } from "react";
import useCounter from "../../hooks/useCounter";
import "./counter.css";

const CounterWithCustomHook = () => {
  const { state, increment, decrement, reset } = useCounter();

  return (
    <Fragment>
      <h1>Counter With CustomHook: {state}</h1>
      <hr />
      <button className="btn btn-primary me-4" onClick={() => increment()}> +1</button>
      <button className="btn btn-primary me-4" onClick={() => reset()}> Reset</button>
      <button className="btn btn-primary" onClick={() => decrement()}> -1</button>
    </Fragment>
  );
};

export default CounterWithCustomHook;
