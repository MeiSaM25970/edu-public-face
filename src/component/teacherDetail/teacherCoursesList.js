import React, { Component } from "react";
import { TeacherCourses } from "./teacherCourses";

import { Loading } from "../Loading";

export class TeacherCoursesList extends Component {
  render() {
    return !this.props.courses ? (
      <Loading />
    ) : (
      <div className="col-sm-9">
        <h1>
          {this.props.teacher.firstName + " " + this.props.teacher.lastName}
        </h1>
        <div
          dangerouslySetInnerHTML={{ __html: this.props.teacher.description }}
        />
        <div id="courses-container">
          {this.props.courses.map((data, index) => (
            <div key={index}>
              <TeacherCourses data={data} teacherId={this.props.teacher} />
            </div>
          ))}
        </div>
      </div>
    );
  }
}
