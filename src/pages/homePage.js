import React, { Component, Fragment } from "react";
import { ProductList } from "../component/Products/productList";
import * as userService from "../service";
import { SimpleSlider } from "../component/slideshow/";
import { TeacherList } from "../component/teacherList/teacherList";

export class HomePage extends Component {
  state = { products: [] };
  fetchData() {
    userService.getProducts().then((response) => {
      this.setState({ products: response.data });
    });
  }
  componentDidMount() {
    this.fetchData();
  }

  render() {
    return (
      <Fragment>
        <SimpleSlider />
        <div className="container">
          <div className="row" style={{}}>
            <div
              className="col-sm-12 text-center margin-top-50 wow fadeInUpBig"
              data-wow-delay="0.5s"
            >
              <h3 className="section-title">محبوب ترین آموزش های آنلاین</h3>
            </div>
          </div>
          <div className="row">
            <ProductList products={this.state.products || ""} />
            <TeacherList data={this.state.products || ""} />
          </div>
        </div>
      </Fragment>
    );
  }
}
