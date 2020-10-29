import React from "react";
import { Switch, Route } from "react-router-dom";

import "./App.css";
import Navbar from "./components/layouts/navbar";
import Landing from "./components/layouts/landing";
import Login from "./components/login";
import Signup from "./components/signup";
import Profiles from "./components/profiles";

const App = () => {
  return (
    <>
      <Navbar />
      <section className="container">
        <Switch>
          <Route path="/" exact component={Landing} />
          <Route path="/signup" exact component={Signup} />
          <Route path="/login" exact component={Login} />
          <Route path="/profiles" exact component={Profiles} />
        </Switch>
      </section>
    </>
  );
};

export default App;
