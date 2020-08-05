import React, { Component } from "react";

export class SlideShowText extends Component {
  render() {
    return (
      <div
        className="slide-overlay"
        style={{ top: "50%", right: 0, transform: "translateY(-50%)" }}
      >
        <h2 style={{ textShadow: " 3px 2px 1px black" }}>
          {" "}
          به شرط دانستن، خواستن توانستن است.
        </h2>
        <p style={{ textShadow: " 2px 2px 2px black" }}>
          مدرسان، دانش آموزان و ...رایگان ثبت نام کنید و وارد پنل خود شوید.
        </p>
      </div>
    );
  }
}
