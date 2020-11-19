import React from "react";
import { connect } from "react-redux";
import { Redirect, Route, RouteProps } from "react-router-dom";
import { AppState } from "../../store/configureStore";

function ProtectedRoute({
  isAuthenticated,
  componentIfAuth,
  element,
  ...rest
}: ProtectedRouteProps) {
  if (componentIfAuth === undefined) componentIfAuth = true;
  return (
    <Route
      {...rest}
      render={() => {
        if (isAuthenticated === componentIfAuth) return element;
        return <Redirect to={componentIfAuth ? "/" : "/dashboard"} />;
      }}
    />
  );
}

const mapStateToProps = (state: AppState) => {
  return { isAuthenticated: state.auth.isAuthenticated };
};

export default connect(mapStateToProps)(ProtectedRoute);

interface ProtectedRouteProps extends RouteProps {
  isAuthenticated?: boolean;
  componentIfAuth?: boolean;
  element: JSX.Element;
}
