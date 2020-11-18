import React, { useEffect } from "react";
import "./App.css";
import { loadUser } from "./store/actions/auth";
import store from "./store/configureStore";

import Navbar from "./components/layouts/navbar";
import Routes from "./routes";

function App() {
  useEffect(() => {
    store.dispatch(loadUser());
  }, []);

  return (
    <>
      <Navbar />
      <Routes />
    </>
  );
}

export default App;
