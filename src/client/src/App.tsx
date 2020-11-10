import React, { useEffect } from "react";
import { Switch, Route } from "react-router-dom";

import "./App.css";
import Navbar from "./components/layouts/navbar";
import Landing from "./components/layouts/landing";
import Alert from "./components/layouts/alert";
import Login from "./components/login";
import Signup from "./components/signup";
import Profiles from "./components/profiles";
import { loadUser } from "./store/actions/auth";
import store from "./store/configureStore";

const App = () => {
  useEffect(() => {
    store.dispatch(loadUser());
  }, []);

  return (
    <>
      <Navbar />
      <Switch>
        <Route path="/" exact component={Landing} />
        <>
          {/* use <> inside Switch not anything else */}
          <section className="container">
            <Alert />
            <Route path="/signup" exact component={Signup} />
            <Route path="/login" exact component={Login} />
            <Route path="/profiles" exact component={Profiles} />
          </section>
        </>
      </Switch>
    </>
  );
};

export default App;
