import React, { useEffect } from "react";
import { Switch, Route, Redirect } from "react-router-dom";

import "./App.css";
import { loadUser } from "./store/actions/auth";
import store, { AppState } from "./store/configureStore";

import Navbar from "./components/layouts/navbar";
import Landing from "./components/layouts/landing";
import Alert from "./components/layouts/alert";
import Login from "./components/login";
import Signup from "./components/signup";
import Profiles from "./components/profiles";
import { connect } from "react-redux";

const App = ({ isAuthenticated }: { isAuthenticated: boolean }) => {
  useEffect(() => {
    store.dispatch(loadUser());
  }, []);

  const protectRoute = (
    component: JSX.Element,
    val: boolean = false,
    redirectTo: string = "/dashboard"
  ) => {
    if (isAuthenticated === val) return component;
    return <Redirect to={redirectTo} />;
  };

  return (
    <>
      {
        //@ts-ignore
        <Navbar />
      }
      <Switch>
        <Route path="/" exact render={() => protectRoute(<Landing />)} />
        <>
          {/* use <> inside Switch not anything else */}
          <section className="container">
            <Alert />
            <Route
              path="/signup"
              exact
              render={routeProps => protectRoute(<Signup {...routeProps} />)}
            />
            <Route
              path="/login"
              exact
              render={routeProps => protectRoute(<Login {...routeProps} />)}
            />
            <Route path="/profiles" exact component={Profiles} />
            <Route
              path="/dashboard"
              exact
              render={() => protectRoute(<h1>test</h1>, true, "/")}
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
