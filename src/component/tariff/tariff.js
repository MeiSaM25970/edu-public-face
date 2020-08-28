import React, { Component } from "react";
import { Link } from "react-router-dom";
export class Tariff extends Component {
  state = { mouseHover: false };
  initialClass = "col-md-4 col-sm-6 col-xs-12 ";
  hoverClass = "col-md-4 col-sm-6 col-xs-12 tariff-hover";

  render() {
    return (
      <div
        className={this.state.mouseHover ? this.hoverClass : this.initialClass}
        style={{ marginTop: 20, marginBottom: 20 }}
        onMouseEnter={
          (() => this.setState({ mouseHover: true }), console.log("hover"))
        }
      >
        <div className="tariff-items ir-r position-product">
          <div
            className="category-with-bg "
            style={{ minHeight: "250px", height: 350 }}
          >
            <h5 title={this.props.data.title}>{this.props.data.title}</h5>
            <p>
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
