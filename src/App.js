import React from "react";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import { TopHeader, BottomHeader } from "./component/publicHeader";
import { Login } from "./component/Auth";
import {
  ComingSoon,
  DetailPage,
  AboutUs,
  Teachers,
  CoursesPage,
  HomePage,
  PSuccess,
  PFail,
  PoliciesPage,
  TariffPage,
  Shopping,
  ShoppingDetailPage,
  TeacherDetailPage,
  InviteToCooperatePage,
  ExamPage,
  ExamDetailPage,
} from "./pages/";
import { Footer } from "./component/footer";
import Page from "./component/pageTitle/pageTitle";
import "./App.css";
import { LoginHelp } from "./component/help";
import { Certificate } from "./component/certificate";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <div className="pages-header">
          <TopHeader />
          <BottomHeader />
        </div>
        <Switch>
          <Route
            path="/coming-soon"
            exact
            render={(props) => (
              <Page title="بزودی">
                <ComingSoon {...props} />
              </Page>
            )}
          />

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
            path="/certificate"
            render={(props) => (
              <Page title="راهنمای صدور گواهی داخلی">
                <Certificate {...props} />
              </Page>
            )}
          />
          <Route
            path="/payment/success"
            render={(props) => (
              <Page title="پرداخت موفق ">
                <PSuccess {...props} />
              </Page>
            )}
          />
          <Route
            path="/payment/fail"
            render={(props) => (
              <Page title="پرداخت ناموفق ">
                <PFail {...props} />
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
            path="/OnlineExam"
            render={(props) => (
              <Page title=" آزمون آنلاین">
                <ExamPage {...props} />
              </Page>
            )}
          />
          <Route
            path="/teachers/:name/:id"
            render={(props) => (
              <Page title=" همه مدرسان">
                <TeacherDetailPage {...props} />
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
            path="/exam/:_id"
            render={(props) => (
              <Page title="دوره های آنلاین ">
                <ExamDetailPage {...props} />
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
          <Route
            path="/help"
            render={(props) => (
              <Page title="راهنمای ورود ">
                <LoginHelp {...props} />
              </Page>
            )}
          />
          <Route
            path="/policies"
            render={(props) => (
              <Page title="قوانین و مقررات">
                <PoliciesPage {...props} />
              </Page>
            )}
          />
          <Route
            path="/tariff"
            render={(props) => (
              <Page title="تعرفه ها">
                <TariffPage {...props} />
              </Page>
            )}
          />
          <Route
            path="/videos"
            exact
            render={(props) => (
              <Page title="فروشگاه سامانه">
                <Shopping {...props} />
              </Page>
            )}
          />
          <Route
            path="/videos/:_id"
            render={(props) => (
              <Page title="فروشگاه سامانه">
                <ShoppingDetailPage {...props} />
              </Page>
            )}
          />
          <Route
            path="/job-request"
            render={(props) => (
              <Page title="درخواست همکاری مدرس">
                <InviteToCooperatePage {...props} />
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
