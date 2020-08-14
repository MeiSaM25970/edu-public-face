import React, { Component } from "react";
import { Course } from "./course";
import { Link } from "react-router-dom";

export class CoursesList extends Component {
  render() {
    if (!this.props.products) {
      return (
        <div
          className="text-primary spinner-border mx-auto mt-5 d-block"
          role="status"
        >
          <span className="sr-only">بارگیری...</span>
        </div>
      );
    }
    return this.props.products.data.map((data, index) => (
      <div key={index}>
        <Course data={data} />
      </div>
    ));
  }
}