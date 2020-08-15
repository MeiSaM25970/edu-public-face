import React, { Component, Fragment } from "react";
import { Link } from "react-router-dom";

export class ShowMore extends Component {
  render() {
    return (
      <Fragment>
        <div
          className="row container"
          style={{ transform: "translateY(17px)" }}
        >
          <div className="col-sm-10 col-sm-offset-1 text-center">
            <h3 className="section-title">برخی از مدرسان برگ دانش</h3>
            <p className="section-description ">
              همه شما مدرسین محترم هم می توانید با ثبت نام در برگ دانش به
              برگزاری دوره های مختلف در زمینه هایی که در آن ها تخصص دارید،
              بپردازید.
            </p>
            <Link to="/teachers">
              <div className="btn btn-info">
                <i className="zmdi zmdi-account" style={{ paddingLeft: 5 }}></i>
                همه مدرسان ما
              </div>
            </Link>
          </div>
        </div>
        <br />
        <br />
      </Fragment>
    );
  }
}
