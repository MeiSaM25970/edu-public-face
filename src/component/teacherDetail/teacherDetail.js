import React, { Component } from "react";
import { API_SERVER_ADDRESS } from "../../env";
export class TeacherDetail extends Component {
  teacher = this.props.data.teacher;
  courses = this.props.data.courses;
  state = {};
  render() {
    return (
      <div className="col-sm-3">
        <div className="text-center">
          <img
            src={API_SERVER_ADDRESS + this.teacher.imageAddress || ""}
            alt={this.teacher.firstName + " " + this.teacher.lastName}
            className="teacher-avatar"
          />
        </div>

        <br />
        <h6 className="text-right">
          {" "}
          <span>اطلاعات مدرس</span>
        </h6>
        <p className="className-details text-right" style={{ marginTop: 10 }}>
          <span className="lessons text-muted">
            <i className="zmdi zmdi-assignment text-green"></i>{" "}
            <b>
              <u>{this.courses.length}</u>
            </b>
            {"  دوره برگزار شده  "}
          </span>
        </p>
      </div>
    );
  }
}
