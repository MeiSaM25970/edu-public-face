import React from "react";
import Slider from "react-slick";
import { SlideShowText } from "./slideshowText";

export class SimpleSlider extends React.Component {
  render() {
    var settings = {
      dots: false,
      infinite: true,
      arrows: false,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 3000,
      adaptiveHeight: true,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            infinite: true,
            dots: true,
          },
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          },
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          },
        },
      ],
    };
    return (
      <div style={{ position: "relative" }}>
        <Slider {...settings}>
          <div className="image-slider">
            <img
              src={"/assets/1.jpg"}
              alt={"slideShow"}
              width="100%"
              height={"250px"}
            />
          </div>
          <div className="image-slider">
            <img
              src={"/assets/2.jpg"}
              alt={"slideShow"}
              width="100%"
              height="250px"
            />
          </div>
          <div className="image-slider">
            <img
              src={"/assets/3.png"}
              alt={"slideShow"}
              width="100%"
              height="250px"
            />
          </div>
        </Slider>
        <SlideShowText />
      </div>
    );
  }
}
