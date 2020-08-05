import React, { Component } from "react";
import { Link } from "react-router-dom";
import HomeIcon from "@material-ui/icons/Home";

import DvrIcon from "@material-ui/icons/Dvr";

export class BodyNavbarAC extends Component {
  render() {
    return (
      <div
        className="course-details-breadcrumb text-center ir-r container d-block"
        style={{ marginTop: 40 }}
      >
        <div className="breadcrumb text-center">
          <Link className="breadcrumb-item text-green" to="/">
            <HomeIcon style={{ position: "relative", float: "right" }} />
            <i></i> <span>خانه</span>
          </Link>
          <i
            className=" zmdi zmdi-chevron-left"
            style={{ paddingRight: 5 }}
          ></i>
          <Link className="breadcrumb-item text-red" to="/courses">
            <DvrIcon
              style={{
                position: "relative",
                float: "right",
                marginRight: "10px",
              }}
            />
            <span style={{ marginRight: 10 }}> دوره های آنلاین</span>
          </Link>
        </div>
      </div>
    );
  }
}
