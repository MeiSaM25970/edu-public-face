import React, { Component } from "react";
import HomeIcon from "@material-ui/icons/Home";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import DvrIcon from "@material-ui/icons/Dvr";
import CheckBoxIcon from "@material-ui/icons/CheckBox";
export class BodyNavbar extends Component {
  id = this.props.props.match.params._id;

  render() {
    return (
      <div
        className="course-details-breadcrumb text-center ir-r"
        style={{ marginTop: 40 }}
      >
        <div className="breadcrumb d-block">
          <a className="breadcrumb-item text-green" href="/">
            <HomeIcon style={{ position: "relative", float: "right" }} />
            <i></i> <span>خانه</span>
          </a>
          <a className="breadcrumb-seperator " style={{ width: 15 }}>
            <ChevronLeftIcon
              style={{ position: "relative", top: "5px", width: "auto" }}
            />
          </a>
          <a className="breadcrumb-item text-red" href="/edu">
            <DvrIcon style={{ position: "relative", float: "right" }} />
            دوره های آنلاین
          </a>
          <a className="breadcrumb-seperator" style={{ width: 15 }}>
            <ChevronLeftIcon
              style={{ position: "relative", top: "5px", width: "auto" }}
            />
          </a>
          <a
            className="breadcrumb-item text-warning"
            href={"/" + this.id + "/edu"}
          >
            <CheckBoxIcon style={{ position: "relative", float: "right" }} />
            <span>{this.id}</span>
          </a>
        </div>
      </div>
    );
  }
}
