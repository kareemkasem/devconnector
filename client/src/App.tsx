import React, { useEffect } from "react";
import "./App.css";
import { loadUser } from "./store/actions/auth";
import store from "./store/configureStore";

import Navbar from "./components/layouts/navbar";
import Routes from "./routes";
import { RouteChildrenProps, withRouter } from "react-router-dom";
import { CLEAR_ALERTS } from "./store/actions/action.types";

function App(props: RouteChildrenProps) {
  useEffect(() => {
    store.dispatch(loadUser());
  }, []);

  useEffect(() => {
    store.dispatch({ type: CLEAR_ALERTS });
  }, [props.location]);

  return (
    <>
      <Navbar />
      <Routes />
    </>
  );
}

export default withRouter(App);
