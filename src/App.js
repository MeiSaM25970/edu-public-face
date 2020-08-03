import React from "react";
import "./App.css";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import { HomePage } from "./pages/";
import { TopHeader, BottomHeader } from "./component/publicHeader";
import { Login } from "./component/Auth";
import { DetailPage } from "./pages/index";
import "./App.css";
import { Footer } from "./component/footer";
import { AboutUs } from "./pages/";
import { AllTeachers } from "./pages";
import Page from "./component/pageTitle/pageTitle";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <TopHeader />
        <BottomHeader />

        <Switch>
          <Route
            path="/"
            exact
            render={(props) => (
              <Page title="صفحه اصلی">
                <HomePage {...props} />
              </Page>
            )}
          />
          <Route
            path="/aboutUs"
            render={(props) => (
              <Page title="درباره ما">
                <AboutUs {...props} />
              </Page>
            )}
          />
          <Route
            path="/auth/login"
            render={(props) => (
              <Page title=" ورود">
                <Login {...props} />
              </Page>
            )}
          />
          <Route
            path="/allteachers"
            render={(props) => (
              <Page title=" همه مدرسان">
                <AllTeachers {...props} />
              </Page>
            )}
          />

          <Route
            path="/edu/:_id"
            render={(props) => (
              <Page title="دوره های آنلاین ">
                <DetailPage {...props} />
              </Page>
            )}
          />
          <Redirect to="/" />
        </Switch>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
