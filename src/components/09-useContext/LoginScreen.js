import React, { Fragment, useContext } from "react";
import { UserContext } from "./UserContext";

const LoginScreen = () => {
  const { setUser } = useContext(UserContext);
  const user = {
    id: 1,
    name: "Rolando Guerra",
    email: "rolandoguerra1991@gmail.com",
  };
  return (
    <Fragment>
      <h3>Login</h3>
      <hr/>
      <button className="btn btn-primary" onClick={() => setUser(user)}>
        New
      </button>
    </Fragment>
  );
};

export default LoginScreen;
