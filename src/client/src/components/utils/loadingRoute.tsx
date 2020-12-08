import React from "react";
import { connect } from "react-redux";
import { Route, RouteProps } from "react-router-dom";
import { MoonLoader } from "react-spinners";
import { AppState } from "../../store/configureStore";

function LoadingRoute({
  authLoading,
  profileLoading,
  element,
  ...rest
}: LoadingdRouteProps) {
  const loading = authLoading || profileLoading;

  return (
    <Route
      {...rest}
      render={() => {
        return (
          <>
            <div style={{ display: loading ? "none" : "initial" }}>
              {element}
            </div>
            <div className="loader-page">
              <MoonLoader loading={loading} size={100} color="#00A3B8" />
            </div>
          </>
        );
      }}
    />
  );
}

const mapStateToProps = (state: AppState) => {
  return {
    authLoading: state.auth.loading,
    profileLoading: state.profile.loading,
  };
};

export default connect(mapStateToProps)(LoadingRoute);

interface LoadingdRouteProps extends RouteProps {
  authLoading: boolean;
  profileLoading: boolean;
  element: JSX.Element;
}
