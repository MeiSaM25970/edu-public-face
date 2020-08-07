import React, { Component } from "react";

export class Error extends Component {
  render() {
    return (
      <div className="col-6 container" style={{}}>
        <div style={{ paddingTop: 50, paddingBottom: 50 }}>
          <img
            style={{
              display: "block",
              width: "30%",
              margin: "auto",
              transform: "translateY(30px)",
            }}
            src="/images/errors-icon.svg"
          />

          <h1
            className="d-block text-center"
            style={{
              padding: 20,
              borderRadius: 8,
              background: "#fff",
              boxShadow: "5px 5px 15px #66666610",
              maxWidth: "75%",
              margin: "auto",
              position: "relative",
            }}
          >
            خطای اتصال با سرور
          </h1>
        </div>
      </div>
    );
  }
}
