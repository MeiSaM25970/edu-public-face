import React, { Component, Fragment } from "react";
import { ProductList } from "../../component/Products/productList";
import { SimpleSlider } from "../../component/slideshow/";
import { TeacherList } from "../../component/teacherList/";
import { ShowMore } from "../../pages/component/showMore/showMore";
import { Auth } from "../Auth/auth";

export class Home extends Component {
  scrollTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  componentDidMount() {
    this.scrollTop();
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
            <Auth />
            <ProductList products={this.props.data || ""} />
            <ShowMore />
            <TeacherList data={this.props.data || ""} />
          </div>
        </div>
      </Fragment>
    );
  }
}
