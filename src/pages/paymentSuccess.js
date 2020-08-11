import React from "react";
import { Component } from "react";
import { Link } from "react-router-dom";

export class PSuccess extends Component {
  render() {
    return (
      <div
        className="container text-center "
        style={{ marginTop: "5%", marginBottom: "5%" }}
      >
        <h1
          className="text-success"
          style={{ fontSize: 25, marginBottom: "5%" }}
        >
          {" "}
          پرداخت با موفقیت انجام شد.
        </h1>
        <br />
        <Link to="/">
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
            صفحه اصلی
          </span>{" "}
        </Link>
      </div>
    );
  }
}
