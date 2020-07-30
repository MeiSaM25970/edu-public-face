import React, { Component } from "react";

export class SlideShowText extends Component {
  render() {
    return (
      <div
        className="slide-overlay"
        style={{ top: "50%", right: 0, transform: "translateY(-50%)" }}
      >
        <h2>
          {" "}
          آنلاین آموزان بستریست برای همه جهت برگزاری کلاس های آنلاین، آزمون های
          آنلاین، وبینارها و ...
        </h2>
        <p>
          آموزشگاه ها، مدرسان، دانش آموزان و ...رایگان ثبت نام کنید و وارد پنل
          خود شوید.
        </p>
      </div>
    );
  }
}
