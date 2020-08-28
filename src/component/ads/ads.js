import React, { Component } from "react";
import { Link } from "react-router-dom";
import { API_SERVER_ADDRESS } from "../../env";
class Ad extends Component {
  state = { closeStyle: { display: "block" } };
  render() {
    return (
      <div className="ad-holder" style={this.state.closeStyle}>
        <span
          onClick={() => this.setState({ closeStyle: { display: "none" } })}
        >
          x
        </span>
        <a
          style={{ display: "block", width: "100%" }}
          href={this.props.link}
          target="_blank"
        >
          <img
            style={{ display: "block", width: "100%" }}
            height="100%"
            src={API_SERVER_ADDRESS + this.props.imageAddress}
          />
        </a>
      </div>
    );
  }
}

export default Ad;
