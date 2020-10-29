import React from "react";
import "../styles/App.scss";
import { Switch, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact render={() => <h1>IT WORKS !!</h1>} />
      </Switch>
    </div>
  );
}

export default App;
