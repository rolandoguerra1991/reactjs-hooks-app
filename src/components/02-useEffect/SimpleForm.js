import React, { Fragment, useState, useEffect } from "react";
import "./effects.css";
import Message from "./Message";

const SimpleForm = () => {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
  });

  const { name, email } = formState;

  const handleOnchange = ({ target }) => {
    const { name, value } = target;
    setFormState({
      ...formState,
      [name]: value,
    });
  };

  useEffect(() => {
    // console.log('First Render');
  }, []);

  useEffect(() => {
    // console.log('name has changed');
  }, [name]);

  useEffect(() => {
    // console.log('email has changed');
  }, [email]);

  return (
    <Fragment>
      <h1>useEffect</h1>
      <hr />
      <form>
        <div className="mb-3">
          <input
            type="text"
            name="name"
            className="form-control"
            placeholder="Name"
            value={name}
            onChange={handleOnchange}
          />
        </div>
        <div>
          <input
            type="text"
            name="email"
            className="form-control"
            value={email}
            placeholder="Email"
            onChange={handleOnchange}
          />
        </div>
      </form>
      {name === "123" && <Message />}
    </Fragment>
  );
};

export default SimpleForm;
