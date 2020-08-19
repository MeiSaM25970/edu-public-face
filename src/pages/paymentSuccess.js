import React from "react";
import { Component } from "react";
import { Link } from "react-router-dom";
const queryString = require("query-string");
export class PSuccess extends Component {
  state = { courseId: "" };
  componentDidMount() {
    const courseIdQueryString = window.location.search;
    if (courseIdQueryString) {
      const courseIdObject = queryString.parse(courseIdQueryString);
      this.setState({ courseId: courseIdObject.id });
      console.log(courseIdObject);
    } else {
      console.log("آی دی دوره وارد نشده و یا اشتباه است.");
    }
  }
  render() {
    return (
      <div
        className="container text-center "
        style={{ marginTop: 250, marginBottom: "5%", minHeight: 300 }}
      >
        <h1
          className="text-success"
          style={{ fontSize: 25, marginBottom: "5%" }}
        >
          {" "}
          پرداخت با موفقیت انجام شد.
        </h1>
        <br />
        <Link to={"/course/" + this.state.courseId}>
          <span
            style={{
              padding: "10px 20px",
              borderRadius: 8,
              background: "#fff",
              boxShadow: "0px 5px 15px #ccc",
              maxWidth: "75%",
              margin: "auto",
              position: "relative",
            }}
          >
            بازگشت به دوره{" "}
          </span>{" "}
        </Link>
      </div>
    );
  }
}
