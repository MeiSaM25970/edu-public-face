import React, { Component, Fragment } from "react";
import { ProductList } from "../component/Products/productList";
import * as userService from "../service";

export class HomePage extends Component {
  state = { products: [] };
  fetchData() {
    userService.getProducts().then((response) => {
      this.setState({ products: response.data.products });
    });
  }
  componentDidMount() {
    this.fetchData();
  }

  render() {
    return (
      <Fragment>
        <div className="row">
          <div
            className="col-sm-12 text-center margin-top-50 wow fadeInUpBig"
            data-wow-delay="0.5s"
          >
            <h3 className="section-title">محبوب ترین آموزش های آنلاین</h3>
          </div>
        </div>
        <div className="row">
          <ProductList products={this.state.products} />
        </div>
      </Fragment>
    );
  }
}
