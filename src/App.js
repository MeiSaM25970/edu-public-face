import React from "react";
import "./App.css";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import { HomePage } from "./pages/";
import { TopHeader, BottomHeader } from "./component/publicHeader";
import { Login } from "./component/Auth";
import { DetailPage } from "./pages/index";
import "./App.css";
import { Footer } from "./component/footer";
import { TelUsPage } from "./pages/telUs";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <TopHeader />
        <BottomHeader />
        <Switch>
          <Route path="/" exact>
            <HomePage />
            <Footer />
          </Route>

          <Route path="/auth/login" component={Login} />

          <Route path="/edu/telus" exact component={TelUsPage} />
          <Route path="/edu/:_id" component={DetailPage} />
          <Redirect to="/" />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
