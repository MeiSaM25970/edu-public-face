import React, { Component } from "react";

import { ProductList } from "../Products/productList";

export class SuggestedCourse extends Component {
  render() {
    const data = this.props.data;
    if (!data) {
      return (
        <div
          className="text-primary spinner-border mx-auto mt-5 d-block"
          role="status"
        >
          <span className="sr-only">بارگیری...</span>
        </div>
      );
    }
    return (
      <div className="container popular similar-posts">
        <div className="row">
          <div className="col-sm-12 text-center">
            <h3>دوره های پیشنهادی</h3>
            <div className="scrolldown-placeholder">
              {" "}
              <span className="news-scrolldown">
                <i className="zmdi zmdi-chevron-down zmdi-hc-lg"></i>
              </span>{" "}
            </div>
          </div>
        </div>
        <ProductList products={this.props} />
        {console.log(this.props.data)}
      </div>
    );
  }
}
