import React, { Component } from "react";
import { Link } from "react-router-dom";
export class BodyNavbarITC extends Component {
  render() {
    return (
      <div
        className="course-details-breadcrumb text-center ir-r container d-block"
        style={{ marginTop: 140 }}
      >
        <div className="breadcrumb text-center">
          <Link to="/">
            <i
              className="breadcrumb-item text-green zmdi zmdi-home zmdi-hc-2x"
              style={{ transform: "translateY(4px)" }}
            ></i>
            <span
              className="breadcrumb-item text-green"
              style={{ paddingLeft: 5, paddingRight: 5 }}
            >
              {"خانه"}
            </span>
          </Link>

          <i
            className=" zmdi zmdi-chevron-left"
            style={{ paddingRight: 5 }}
          ></i>
          <i
            className="breadcrumb-item text-red zmdi zmdi-accounts zmdi-hc-2x"
            style={{
              paddingRight: 10,
              width: 18,
              height: 18,
              transform: "translateY(6px)",
            }}
          ></i>
          <span
            className="breadcrumb-item text-red"
            style={{ paddingRight: 17 }}
          >
            {"  درخواست همکاری مدرس  "}
          </span>
        </div>
      </div>
    );
  }
}
