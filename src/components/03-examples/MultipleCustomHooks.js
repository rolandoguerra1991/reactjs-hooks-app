import React from "react";
import useCounter from "../../hooks/useCounter";
import useFetch from "../../hooks/useFetch";
import "./example.css";

const MultipleCustomHooks = () => {
  const { counter, increment } = useCounter(1);
  const { loading, data } = useFetch(
    `https://www.breakingbadapi.com/api/quotes/${counter}`
  );

  const { author, quote } = !!data && data[0];

  return (
    <React.Fragment>
      <h1>BrakingBad Quotes</h1>
      <hr />
      {loading ? (
        <div className="alert alert-info">loading...</div>
      ) : (
        <blockquote className="blockquote text-end">
          <p>{quote}</p>
          <footer className="blockquote-footer">{author}</footer>
        </blockquote>
      )}

      <button className="btn btn-primary" onClick={increment}>Next Quote</button>
    </React.Fragment>
  );
};

export default MultipleCustomHooks;
