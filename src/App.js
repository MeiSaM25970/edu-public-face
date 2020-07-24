import React from "react";
import "./App.css";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import { HomePage } from "./pages/";
import { TopHeader, BottomHeader } from "./component/publicHeader";
import { Login } from "./component/Auth";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <TopHeader />
        <BottomHeader />
        <Switch>
          <Route path="/" exact>
            <HomePage />
          </Route>
          <Route path="/auth/login">
            <Login />
          </Route>
          <Redirect to="/" />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
