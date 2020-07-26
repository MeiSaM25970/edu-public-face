import React, { Component } from "react";
import { CopyToClipboard } from "react-copy-to-clipboard";

export class ShortLink extends Component {
  state = { value: this.props.props.match.url, copied: false };

  onChange = (e) => {
    this.setState({
      ...this.state.value,
      value: e.target.value,
      copied: false,
    });
  };

  onCopy = () => {
    this.setState({ copied: true });
  };
  render() {
    return (
      <div className="card d-block " style={{ marginTop: 20, marginBottom: 0 }}>
        <h6
          className=" text-center ir-r"
          style={{ marginTop: 20, marginBottom: 0 }}
        >
          لینک کوتاه دوره
        </h6>
        <br />
        <div className="text-center">
          <input
            type="text"
            className="short-link text-center"
            defaultValue={this.state.value}
          />
        </div>
        <CopyToClipboard text={this.state.value} onCopy={this.onCopy}>
          <button
            className="btn btn-success btn-sm"
            style={{
              margin: "auto",
              display: "block",
              marginTop: 10,
              marginBottom: 10,
            }}
          >
            کپی کردن لینک
          </button>
        </CopyToClipboard>

        <div className="text-center mx-auto">
          {this.state.copied ? <span>کپی شد.</span> : null}
        </div>
      </div>
    );
  }
}
