import React, { Component } from "react";
export class ShowMore extends Component {
  state = { show: false };
  render() {
    return (
      <div className={this.state.show ? "opened" : "holder"}>
        <button className="btn btn-text-info">Show More</button>
      </div>
    );
  }
}
