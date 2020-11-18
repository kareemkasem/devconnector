import React from "react";
import { connect } from "react-redux";
import { Redirect, Route } from "react-router-dom";
import { AppState } from "../../store/configureStore";

function ProtectedRoute({
  isAuthenticated,
  componentIfAuth,
  path,
  component,
}: ProtectedRouteProps) {
  const protectRoute = (
    component: JSX.Element,
    returnComponentWhenAuth: boolean = true
  ): JSX.Element => {
    if (isAuthenticated === returnComponentWhenAuth) return component;
    return <Redirect to={returnComponentWhenAuth ? "/" : "/dashboard"} />;
  };
  return (
    <Route
      path={path}
      exact
      render={() => protectRoute(component, componentIfAuth)}
    />
  );
}

const mapStateToProps = (state: AppState) => {
  return { isAuthenticated: state.auth.isAuthenticated };
};

export default connect(mapStateToProps)(ProtectedRoute);

interface ProtectedRouteProps {
  isAuthenticated?: boolean;
  componentIfAuth?: boolean;
  component: JSX.Element;
  path: string;
}
