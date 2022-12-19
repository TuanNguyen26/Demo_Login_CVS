import React from "react";
import { navigate } from "gatsby";
const PrivateRoute = ({ component: Component, location, ...rest }) => {
  const isLogin = localStorage.getItem("profileUs");
  if (!isLogin) {
    navigate("/app");
    return null;
  }
  return <Component {...rest} />;
};
export default PrivateRoute;
