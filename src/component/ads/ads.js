import React, { Component } from "react";
import { API_SERVER_ADDRESS } from "../../env";
class Ad extends Component {
  state = { closeStyle: { display: "block" } };
  render() {
    return (
      <div className="ad-holder" style={this.state.closeStyle}>
        <span
          onClick={() => {
            this.props.className === "ad-center"
              ? (document.getElementsByClassName("ad-center")[0].style.display =
                  "none")
              : this.setState({ closeStyle: { display: "none" } });
          }}
        >
          x
        </span>
        <a
          style={{ display: "block", width: "100%" }}
          href={this.props.link}
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            style={{ display: "block" }}
            height="100%"
            src={API_SERVER_ADDRESS + this.props.imageAddress}
            alt="تبلیغات"
          />
        </a>
      </div>
    );
  }
}

export default Ad;
