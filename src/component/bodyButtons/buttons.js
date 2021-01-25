import React, { Component } from "react";
import { Link } from "react-router-dom";

export class BodyButtons extends Component {
  render() {
    return (
      <div className="text-center">
        <a
          title="عضویت متقاضی و یا مدرسین در برگ دانش"
          href={
            this.props.userLocalStorage.token
              ? "https://dashboard.edu.tad-group.ir/login"
              : "https://dashboard.edu.tad-group.ir/login"
          }
          className="btn btn-success"
          style={{ fontSize: 16 }}
        >
          ثبت نام متقاضی/مدرس
        </a>
        <Link
          title="فروشگاه سامانه"
          to="/videos"
          className="btn btn-success"
          style={{ margin: "0px 20px" }}
        >
          {" "}
          <h4 style={{ fontSize: 20 }}>فروشگاه سامانه</h4>
          <h4 style={{ fontSize: 16, display: "block" }}>
            (محصولات : آموزشی ، علمی و فرهنگی )
          </h4>
        </Link>
        <Link
          title="راهنمای صدور گواهی داخلی"
          to="/certificate"
          className="btn btn-success"
        >
          <h4 style={{ fontSize: 16, display: "block" }}>صدور گواهی داخلی </h4>
        </Link>
      </div>
    );
  }
}
