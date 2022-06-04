import React, { Fragment, useContext } from "react";
import { UserContext } from "./UserContext";

const HomeScreen = () => {
  const { user } = useContext(UserContext);

  return (
      <Fragment>
          <div>HomeScreen</div>
          <pre>
              {JSON.stringify(user, null, 3)}
          </pre>
      </Fragment>
  );
};

export default HomeScreen;
