import React, { Component, Fragment } from "react";
import { ProductList } from "../../component/Products/productList";
import { SimpleSlider } from "../../component/slideshow/";
import { TeacherList } from "../../component/teacherList/";
import { ShowMore } from "../../pages/component/showMore/showMore";
import { BodyButtons } from "../bodyButtons";
import { CoursesList } from "../courses";
import { Link } from "react-router-dom";
import { WhyUs } from "../../pages/";
import Ad from "../ads/ads";

export class Home extends Component {
  state = { show: true };
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
    const centerAd = this.props.ads.find((ad) => ad.position === "main-center");
    return (
      <Fragment>
        <SimpleSlider />
        {centerAd ? (
          <div className="ad ad-center">
            {<Ad {...centerAd} className="ad-center" />}
          </div>
        ) : (
          ""
        )}
        {this.props.ads.length ? (
          <div className="ad ad-left">
            {this.props.ads
              .filter((ad) => ad.position === "left-side")
              .map((ad) => (
                <Ad link={ad.link} imageAddress={ad.imageAddress} />
              ))}
          </div>
        ) : (
          ""
        )}
        {this.props.ads.length ? (
          <div className="ad ad-right ">
            {this.props.ads
              .filter((ad) => ad.position === "right-side")
              .map((ad) => (
                <Ad link={ad.link} imageAddress={ad.imageAddress} />
              ))}
          </div>
        ) : (
          ""
        )}

        <div className="container">
          <div className="row ">
            <Horizontal />
            <BodyButtons userLocalStorage={this.props.userLocalStorage} />
            <Horizontal text="عناوین دوره های در حال برگزاری " />

            <CoursesList products={this.props.onlineData || ""} />
          </div>

          <div className="row ">
            <MoreButton />
            <Horizontal text="محبوب ترین آموزش های آنلاین" />{" "}
            <ProductList products={this.props.onlineData || ""} />
            <Horizontal />
            <ShowMore />
            <TeacherList />
            <Horizontal text=" Tad-Group  پیشتاز در بستر آموزش مجازی ، چرا؟ " />
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
