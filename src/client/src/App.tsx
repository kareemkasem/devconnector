import React, { useEffect } from "react";
import { Switch, Route, Redirect } from "react-router-dom";

import "./App.css";
import { loadUser } from "./store/actions/auth";
import store, { AppState } from "./store/configureStore";

import Navbar from "./components/layouts/navbar";
import Landing from "./components/layouts/landing";
import Alert from "./components/layouts/alert";
import Login from "./components/auth/login";
import Signup from "./components/auth/signup";
import Profiles from "./components/profiles";
import { connect } from "react-redux";
import DashBoard from "./components/dashboard/dashboard";

const App = ({ isAuthenticated }: { isAuthenticated: boolean }) => {
  useEffect(() => {
    store.dispatch(loadUser());
  }, []);

  const protectRoute = (
    component: JSX.Element,
    returnComponentWhenAuth: boolean = true
  ): JSX.Element => {
    if (isAuthenticated === returnComponentWhenAuth) return component;
    return <Redirect to={returnComponentWhenAuth ? "/" : "/dashboard"} />;
  };

  return (
    <>
      {
        //@ts-ignore
        <Navbar />
      }
      <Switch>
        <Route path="/" exact render={() => protectRoute(<Landing />, false)} />
        <>
          {/* use <> inside Switch not anything else */}
          <section className="container">
            <Alert />
            <Route
              path="/signup"
              exact
              render={() => protectRoute(<Signup />, false)}
            />
            <Route
              path="/login"
              exact
              render={() => protectRoute(<Login />, false)}
            />
            <Route path="/profiles" exact component={Profiles} />
            <Route
              path="/dashboard"
              exact
              render={() => protectRoute(<DashBoard />)}
            />
          </section>
        </>
      </Switch>
    </>
  );
};

const mapStateToProps = (state: AppState) => {
  return { isAuthenticated: state.auth.isAuthenticated };
};

export default connect(mapStateToProps)(App);
