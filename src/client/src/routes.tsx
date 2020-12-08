import React from "react";
import { Switch } from "react-router-dom";
import ProtectedRoute from "./components/utils/protectedRoute";

import Landing from "./components/layouts/landing";
import Alert from "./components/layouts/alert";
import Login from "./components/auth/login";
import Signup from "./components/auth/signup";
import DashBoard from "./components/dashboard/dashboard";
import CreateProfile from "./components/profile-forms/create-profile";
import LoadingRoute from "./components/utils/loadingRoute";
import Profiles from "./components/profiles/profiles";

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
            <ProtectedRoute path="/dashboard" exact element={<DashBoard />} />
            <LoadingRoute path="/profiles" exact element={<Profiles />} />
            <ProtectedRoute
              path="/create-profile"
              exact
              element={<CreateProfile />}
            />
          </section>
        </>
      </Switch>
    </>
  );
}

export default Routes;
