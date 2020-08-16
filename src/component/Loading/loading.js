import React, { Component } from "react";
import ReactLoading from "react-loading";

export class Loading extends Component {
  render() {
    return (
      <div
        className="container text-center"
        style={{ width: "100%", height: "500px" }}
      >
        <div
          className="container  m-auto "
          style={{ width: 40, marginTop: "10%" }}
        >
          <ReactLoading
            type="spinningBubbles"
            color="blue"
            height="40px"
            width="40px"
          />
        </div>
      </div>
    );
  }
}
