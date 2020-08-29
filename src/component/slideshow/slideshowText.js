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

/* <Fragment>
<div
  className="slide-overlay text-right container"
  style={{ top: 10, transform: "translateY(-20%)" }}
>
  <h2 style={{ textShadow: " 3px 2px 1px black" }}>
    {" "}
    سامانه ما ، بستری مطمئن برای برگزاری کلاس ها ، آزمون ها ، جلسات و
    وبینارها ...........{" "}
  </h2>
</div>
<div
  className="slide-overlay container"
  style={{ left: 0, bottom: 10, transform: "translateY(50%)" }}
>
  <h2
    className="text-left "
    style={{ textShadow: " 3px 2px 1px black" }}
  >
    {" "}
    بشرط دانستن خواستن توانستن است{" "}
  </h2>
</div>
</Fragment> */
