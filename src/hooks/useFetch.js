import { useState, useEffect } from "react";

const useFetch = (url) => {
  const initialState = {
    data: null,
    loading: true,
    error: null,
  }
  const [state, setState] = useState(initialState);

  useEffect(() => {
    setState(initialState);
    fetch(url)
      .then((resp) => resp.json())
      .then((data) => {
        setState({
          data,
          error: null,
          loading: false,
        });
      });
  }, [url]);

  return state;
};

export default useFetch;
