import React, { Component } from "react";
import HomeIcon from "@material-ui/icons/Home";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import DvrIcon from "@material-ui/icons/Dvr";
import CheckBoxIcon from "@material-ui/icons/CheckBox";
import { Link } from "react-router-dom";
export class BodyNavbar extends Component {
  id = this.props.props.match.params._id;

  render() {
    return (
      <div
        className="course-details-breadcrumb text-center ir-r"
        style={{ marginTop: 40 }}
      >
        <div className="breadcrumb d-block">
          <Link className="breadcrumb-item text-green" to="/">
            <HomeIcon style={{ position: "relative", float: "right" }} />
            <i></i> <span>خانه</span>
          </Link>
          <a className="breadcrumb-seperator " style={{ width: 15 }}>
            <ChevronLeftIcon
              style={{ position: "relative", top: "5px", width: "auto" }}
            />
          </a>
          <Link className="breadcrumb-item text-red" to="/edu">
            <DvrIcon style={{ position: "relative", float: "right" }} />
            دوره های آنلاین
          </Link>
          <a className="breadcrumb-seperator" style={{ width: 15 }}>
            <ChevronLeftIcon
              style={{ position: "relative", top: "5px", width: "auto" }}
            />
          </a>
          <Link className="breadcrumb-item text-warning" to={"/edu/" + this.id}>
            <CheckBoxIcon style={{ position: "relative", float: "right" }} />
            <span>{this.id}</span>
          </Link>
        </div>
      </div>
    );
  }
}
