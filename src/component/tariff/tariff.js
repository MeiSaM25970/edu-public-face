import React, { Component } from "react";

export class Tariff extends Component {
  state = { mouseHover: false };
  initialClass = "col-md-4 col-sm-6 col-xs-12 ";
  hoverClass = "col-md-4 col-sm-6 col-xs-12 tariff-hover";

  render() {
    return (
      <div
        className="col-md-4 col-sm-6 col-xs-12 "
        style={{ marginTop: 20, marginBottom: 20 }}
      >
        <div
          className="tariff-items ir-r position-product"
          onMouseEnter={() => this.setState({ mouseHover: true })}
          onMouseLeave={() => this.setState({ mouseHover: false })}
        >
          <div
            className="category-with-bg "
            style={{ minHeight: "250px", height: 350 }}
          >
            <h5
              style={
                this.state.mouseHover
                  ? { backgroundColor: "#ccc", transition: "0.5s" }
                  : { backgroundColor: "#fff", transition: "0.5s" }
              }
              title={this.props.data.title}
            >
              {this.props.data.title}
            </h5>
            <p style={{ rotate: "" }}>
              <span className="value">{this.props.data.price}</span>
            </p>
            <p>
              <span className="sub">{this.props.data.subtitle}</span>
            </p>
            <p>
              <span className="des text-muted">
                {this.props.data.description}
              </span>
            </p>
            <p>
              <span className="offer">{this.props.data.offer}</span>
            </p>
          </div>
        </div>
      </div>
    );
  }
}
