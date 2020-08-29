import React, { Component } from "react";
import { Course } from "./course";

export class CoursesList extends Component {
  render() {
    console.log({ coursesList: this.props });
    if (!this.props.products) {
      return (
        <div
          className="text-primary spinner-border mx-auto mt-5 d-block responsive-z-index"
          role="status"
        >
          <span className="sr-only">بارگیری...</span>
        </div>
      );
    } else
      return this.props.products.data.map((data, index) =>
        data.isOffline ? (
          ""
        ) : (
          <div key={index}>
            <Course data={data} />
          </div>
        )
      );
  }
}
