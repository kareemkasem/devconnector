import React from "react";
import { Switch, Route } from "react-router-dom";
import ProtectedRoute from "./components/utils/protectedRoute";

import Landing from "./components/layouts/landing";
import Alert from "./components/layouts/alert";
import Login from "./components/auth/login";
import Signup from "./components/auth/signup";
import Profiles from "./components/profiles";
import DashBoard from "./components/dashboard/dashboard";

function Routes() {
  return (
    <>
      <Switch>
        <ProtectedRoute
          path="/"
          exact
          element={<Landing />}
          componentIfAuth={false}
        />
        <>
          {/* use <> inside Switch not anything else */}
          <section className="container">
            <Alert />
            <ProtectedRoute
              path="/signup"
              exact
              element={<Signup />}
              componentIfAuth={false}
            />
            <ProtectedRoute
              path="/login"
              exact
              element={<Login />}
              componentIfAuth={false}
            />
            <Route path="/profiles" exact component={Profiles} />
            <ProtectedRoute path="/dashboard" exact element={<DashBoard />} />
          </section>
        </>
      </Switch>
    </>
  );
}

export default Routes;
