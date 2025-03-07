import React from "react";
import { Route, } from "react-router-dom";

const FreeRoute = ({ component: Component, ...rest }) => {
  return (
    <Route
      {...rest}
      render={(props) => {
        return <Component {...props} />;
      }}
    />
  );
};

export default FreeRoute;