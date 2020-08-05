import React from "react";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import { TopHeader, BottomHeader } from "./component/publicHeader";
import { Login } from "./component/Auth";
import { DetailPage, AboutUs, Teachers, CoursesPage, HomePage } from "./pages/";
import { Footer } from "./component/footer";
import Page from "./component/pageTitle/pageTitle";
import "./App.css";

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
            path="/teachers"
            render={(props) => (
              <Page title=" همه مدرسان">
                <Teachers {...props} />
              </Page>
            )}
          />

          <Route
            path="/course/:_id"
            render={(props) => (
              <Page title="دوره های آنلاین ">
                <DetailPage {...props} />
              </Page>
            )}
          />
          <Route
            path="/courses"
            render={(props) => (
              <Page title=" همه دوره های آنلاین ">
                <CoursesPage {...props} />
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
