import React, { Component } from "react";
export class Description extends Component {
  render() {
    const data = this.props.data;
    return (
      <div className="card" style={{ marginTop: 25, marginBottom: 0 }}>
        <div className="card-content">
          <h3 className="sec-title">توضیحات تکمیلی دوره</h3>
          {/* <div className="abs">{{ __html: data.description }}</div> */}
          <div
            className="abs"
            dangerouslySetInnerHTML={{ __html: data.description }}
          />
          <div className="abs"></div>
        </div>
      </div>
    );
  }
}
