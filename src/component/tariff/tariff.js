import React, { Component } from "react";
import "./tariff.css";

export class Tariff extends Component {
  colors = [
    "primary",
    "success",
    "danger",
    "info",
    "warning",
    "primary",
    "success",
    "danger",
    "info",
    "warning",
    "primary",
    "success",
    "danger",
    "info",
    "warning",
    "primary",
    "success",
    "danger",
    "info",
    "warning",
  ];

  render() {
    const colors = this.colors;
    return (
      <div className="col-md-4 col-sm-6 col-xs-12 mb-5">
        <div className="card text-center">
          <div
            className={`card-header btn-${
              colors[this.props.index]
                ? colors[this.props.index]
                : colors[this.props.index]
            }`}
            style={{
              fontWeight: "bold",
              padding: "10px 0 10px 0",
            }}
          >
            <p style={{ marginTop: "0" }}>{this.props.data.title}</p>
          </div>
          <div
            className="card-body mb-0 direction-rtl"
            style={{ padding: "0 10px 0 10px" }}
          >
            <div className="tariff-subtitle">
              <div
                className="card-subtitle text-muted"
                style={{
                  fontSize: "12px",
                  fontWeight: "bold",
                  marginTop: "22px",
                }}
              >
                {this.props.data.subtitle}
              </div>
            </div>
            <div className="tariff-price">
              <strong>{this.props.data.price}</strong>
            </div>
            <div className="tariff-desc">
              <span>{this.props.data.description}</span>
            </div>
            <div className="tariff-offer">
              <div
                className="card-subtitle text-muted"
                style={{
                  fontSize: "12px",
                  fontWeight: "bold",
                  marginBottom: "27px",
                }}
              >
                {this.props.data.offer}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
