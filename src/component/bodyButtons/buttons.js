import React, { Component } from "react";
import { Link } from "react-router-dom";

export class BodyButtons extends Component {
  render() {
    return (
      <div className="text-center">
        <a
          title="عضویت متقاضی و یا مدرسین در برگ دانش"
          href="http://dashboard.learningpage.ir"
          className="btn btn-success"
          style={{ fontSize: 16 }}
        >
          ثبت نام متقاضی/مدرس
        </a>
        <Link
          title="بزودی..."
          to="/coming-soon"
          className="btn btn-success"
          style={{ margin: "0px 20px" }}
        >
          <h4 style={{ fontSize: 20, display: "block" }}>
            فروشگاه سامانه<h4 style={{ fontSize: 18 }}></h4>
            (محصولات : آموزشی ، علمی و فرهنگی )
          </h4>
        </Link>
        <Link title="بزودی..." to="/coming-soon" className="btn btn-success">
          <h4 style={{ fontSize: 16, display: "block" }}>صدور گواهی داخلی </h4>
        </Link>
      </div>
    );
  }
}
