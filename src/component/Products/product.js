import React from "react";
import numeral from "numeral";

export function Product({ data }) {
  return (
    <div className=" text-center tutorials popular ir-r">
      <div className="col-md-4 col-sm-6 col-xs-12">
        <div className="course-item ir-r">
          <div className="img-container">
            <img src={data.image} alt={data.title} />
            <span className="price">
              {numeral(data.price).format("0,0")} تومان
            </span>
          </div>

          <div className="category-with-bg " style={{ height: "184px" }}>
            <h5 className="course-title" title={data.title}>
              {data.title}
            </h5>
            <p>
              <span className="title">
                <i className="zmdi zmdi-account"></i> مدرس:
              </span>
              <span className="value">{data.teacher_name} </span>
            </p>
            <p>
              <span className="title">
                <i className="zmdi zmdi-time"></i>
                شروع دوره:
              </span>
              <span className="value">{data.start_at} </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
