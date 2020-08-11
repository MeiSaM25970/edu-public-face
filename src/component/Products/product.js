import React from "react";
import numeral from "numeral";
import moment from "moment-jalaali";
import { Link } from "react-router-dom";
import { API_SERVER_ADDRESS } from "../../env";

export function Product(props) {
  const data = props.data;
  const scrollTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <div className=" text-center tutorials popular ir-r">
      <div className="col-md-4 col-sm-6 col-xs-12">
        <div className="course-item ir-r position-product">
          <Link
            to={"/course/" + data._id}
            onClick={() => {
              // if (window.location.pathname !== "/") {
              scrollTop();
              // }
            }}
          >
            <div className="img-container">
              <img
                src={
                  API_SERVER_ADDRESS + data.imageAddress ||
                  "/images/imageNotFound.webp"
                }
                alt={data.title}
                style={{ minHeight: "100px", maxHeight: "150px" }}
              />

              {props.data.isExpired ? (
                <span className="price">دوره به اتمام رسید.</span>
              ) : (
                <span className="price">
                  {numeral(data.price).format("0,0")} تومان
                </span>
              )}
            </div>
            <div className="category-with-bg " style={{ height: "184px" }}>
              <h5
                className="course-title d-inline-block text-truncate"
                title={data.title}
              >
                {data.title}
              </h5>
              <p>
                <span className="title">
                  <i className="zmdi zmdi-account"></i> مدرس:
                </span>
                <span className="value">
                  {data.teacherId.firstName + " " + data.teacherId.lastName}{" "}
                </span>
              </p>
              <p>
                <span className="title">
                  <i className="zmdi zmdi-time"></i>
                  شروع دوره:{" "}
                </span>
                <span className="value">
                  {moment(data.schedules[0].date, "YYYY/MM/DD").format(
                    "jYYYY/jM/jD"
                  )}
                </span>
              </p>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}
