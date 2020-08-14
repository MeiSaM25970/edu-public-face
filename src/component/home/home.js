import React, { Component, Fragment } from "react";
import { ProductList } from "../../component/Products/productList";
import { SimpleSlider } from "../../component/slideshow/";
import { TeacherList } from "../../component/teacherList/";
import { ShowMore } from "../../pages/component/showMore/showMore";
import { BodyButtons } from "../bodyButtons";
import { CoursesList } from "../courses";
import { Link } from "react-router-dom";
import { WhyUs } from "../../pages/";

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
          <div className="row">
            <Horizontal />
            <BodyButtons />
            <Horizontal text="عناوین دوره های در حال برگزاری " />
            <CoursesList products={this.props.data || ""} />
          </div>

          <div className="row">
            <MoreButton />
            <Horizontal text="محبوب ترین آموزش های آنلاین" />{" "}
            <ProductList products={this.props.data || ""} />
            <Horizontal />
            <ShowMore />
            <TeacherList data={this.props.data || ""} />
            <Horizontal text=" Leaningpage  پیشتاز در بستر آموزش مجازی ، چرا؟ " />
            <WhyUs />{" "}
          </div>
        </div>
      </Fragment>
    );
  }
}

export class Horizontal extends Component {
  render() {
    return (
      <div className="row">
        <div
          className="col-sm-12 text-center wow fadeInUpBig"
          data-wow-delay="0.5s"
        >
          <h3 className="section-title">{this.props.text}</h3>
        </div>
      </div>
    );
  }
}
export class MoreButton extends Component {
  render() {
    return (
      <Link
        style={{
          display: "block",
          textAlign: "center",
          margin: "50px auto",
        }}
        to="/courses"
      >
        بیشتر...
      </Link>
    );
  }
}
