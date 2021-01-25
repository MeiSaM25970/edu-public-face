import React, { Component } from "react";
import HomeIcon from "@material-ui/icons/Home";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import ShopIcon from "@material-ui/icons/Shop";
import CheckBoxIcon from "@material-ui/icons/CheckBox";
import { Link } from "react-router-dom";
export class BodyNavbarVideoProduct extends Component {
  id = this.props.data._id;

  render() {
    return (
      <div
        className="course-details-breadcrumb text-center ir-r"
        style={{ marginTop: 140 }}
      >
        <div className="breadcrumb d-block">
          <Link className="breadcrumb-item text-green" to="/">
            <HomeIcon style={{ position: "relative", float: "right" }} />
            <i></i> <span>خانه</span>
          </Link>
          <a href="/" className="breadcrumb-seperator " style={{ width: 15 }}>
            <ChevronLeftIcon
              style={{ position: "relative", top: "5px", width: "auto" }}
            />
          </a>
          <Link
            className="breadcrumb-item text-red"
            to="/videos"
            style={{ width: "auto" }}
          >
            <ShopIcon style={{ position: "relative", float: "right" }} />
            <p style={{ paddingRight: 10, width: 110 }}>{"فروشگاه سامانه"}</p>
          </Link>
          <a
            href="/videos"
            className="breadcrumb-seperator"
            style={{ width: 15 }}
          >
            <ChevronLeftIcon
              style={{ position: "relative", top: "5px", width: "auto" }}
            />
          </a>
          <Link
            className="breadcrumb-item text-warning"
            to={"/videos/" + this.id}
          >
            <CheckBoxIcon style={{ position: "relative", float: "right" }} />
            <span>{this.props.data.title}</span>
          </Link>
        </div>
      </div>
    );
  }
}
