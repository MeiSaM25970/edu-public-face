import React, { Component } from "react";
import { Link } from "react-router-dom";
import { API_SERVER_ADDRESS } from "../../env";
class Ad extends Component {
  state = { closeStyle: {} };
  render() {
    return (
      <div style={this.state.closeStyle}>
        <span
          onClick={() => this.setState({ closeStyle: { display: "none" } })}
        >
          x
        </span>
        <a href={this.props.link} target="_blank">
          <img
            width="100%"
            height="100%"
            src={API_SERVER_ADDRESS + this.props.imageAddress}
          />
        </a>
      </div>
    );
  }
}

export default Ad;
