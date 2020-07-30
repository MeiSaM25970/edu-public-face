import React, { Component, Fragment } from "react";
import { BodyNavbarTel, TelUs } from "../component/telUs";
export class TelUsPage extends Component {
  render() {
    return (
      <Fragment>
        <BodyNavbarTel />;
        <TelUs />
      </Fragment>
    );
  }
}
