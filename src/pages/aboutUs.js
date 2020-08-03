import React, { Component, Fragment } from "react";
import { BodyNavbarTel, About } from "../component/aboutUs";
export class AboutUs extends Component {
  render() {
    return (
      <Fragment>
        <BodyNavbarTel />
        <About />
      </Fragment>
    );
  }
}
