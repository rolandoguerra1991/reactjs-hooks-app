import { useState, useEffect, useRef } from "react";

const useFetch = (url) => {
  const initialState = {
    data: null,
    loading: true,
    error: null,
  }
  const [state, setState] = useState(initialState);

  const isMounted = useRef(true)

  useEffect(() => {
    return () => {
      isMounted.current = false
    }
  }, []);

  useEffect(() => {
    setState(initialState);
    fetch(url)
      .then((resp) => resp.json())
      .then((data) => {
        if (isMounted.current) {
          setState({
            data,
            error: null,
            loading: false,
          });
        }
      });
  }, [url]);

  return state;
};

export default useFetch;
