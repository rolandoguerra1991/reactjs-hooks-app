import React, { Fragment } from "react";
import useForm from "../../hooks/useForm";
import "./effects.css";

const FormWithCustomHook = () => {
  const [formValues, handleInputChange, handleSubmit] = useForm({
    name: "",
    email: "",
    password: "",
  });

  const { name, email, password } = formValues;

  return (
    <Fragment>
      <h1>useEffect</h1>
      <hr />
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <input
            type="text"
            name="name"
            className="form-control"
            placeholder="Name"
            value={name}
            onChange={handleInputChange}
          />
        </div>
        <div className="mb-3">
          <input
            type="text"
            name="email"
            className="form-control"
            value={email}
            placeholder="Email"
            onChange={handleInputChange}
          />
        </div>
        <div className="mb-3">
          <input
            type="password"
            name="password"
            className="form-control"
            value={password}
            placeholder="*****"
            onChange={handleInputChange}
          />
        </div>
        <button className="btn btn-primary">
            Save changes
        </button>
      </form>
    </Fragment>
  );
};

export default FormWithCustomHook;
