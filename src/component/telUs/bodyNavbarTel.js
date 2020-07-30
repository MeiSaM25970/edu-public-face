import React, { Component } from "react";
import { Link } from "react-router-dom";
export class BodyNavbarTel extends Component {
  render() {
    return (
      <div
        className="course-details-breadcrumb text-center ir-r container d-block"
        style={{ marginTop: 40 }}
      >
        <div className="breadcrumb text-center">
          <i
            className="breadcrumb-item text-green zmdi zmdi-home  zmdi-hc-2x"
            style={{ paddingLeft: 2 }}
          ></i>
          <Link to="/">
            <span
              className="breadcrumb-item text-green"
              style={{ paddingLeft: 2 }}
            >
              {"خانه"}
            </span>
          </Link>

          <i
            className=" zmdi zmdi-chevron-left"
            style={{ paddingRight: 5 }}
          ></i>
          <i
            className="breadcrumb-item text-red zmdi zmdi-phone"
            style={{ paddingRight: 10 }}
          ></i>
          <span
            className="breadcrumb-item text-red"
            style={{ paddingRight: 10 }}
          >
            تماس با ما
          </span>
        </div>
      </div>
    );
  }
}
