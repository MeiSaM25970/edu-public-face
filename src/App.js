import React from "react";
import "./App.css";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import { HomePage } from "./pages/";
import { TopHeader, BottomHeader } from "./component/publicHeader";
import { Login } from "./component/Auth";
import { DetailPage } from "./pages/index";
import "./App.css";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <TopHeader />
        <BottomHeader />
        <div className="container">
          <Switch>
            <Route path="/" exact>
              <HomePage />
            </Route>
            <Route path="/auth/login" component={Login} />

            <Route path="/:_id/edu" component={DetailPage} />

            <Redirect to="/" />
          </Switch>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
