import React from "react";
import numeral from "numeral";
import moment from "moment-jalaali";
import { Link } from "react-router-dom";
import { API_SERVER_ADDRESS } from "../../env";
import { DownloadLinks } from "../shoppingDetail/downloadLinks";

export function Product(props) {
  const data = props.data;
  console.log({ data: data });
  const scrollTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  const courseIsOver = () => {
    if (props.data.schedules && props.data.schedules.date) {
      const dateAndTime = Date();
      const windowsDate = moment(dateAndTime, "LLLL").format("YYYY/M/D");
      const windowsTime = moment(dateAndTime, "LLLL").format("kk");
      const arrayNumber = props.data.schedules.length - 1;
      const courseDate = props.data.schedules[arrayNumber].date;
      const courseTime = props.data.schedules[arrayNumber].time;
      const courseTimeTo24H = moment(courseTime, "LT").format("kk");
      const courseTimeHourSum = +courseTimeTo24H + 2;
      if (moment(windowsDate) > moment(courseDate)) {
        return true;
      } else {
        if (moment(windowsDate).isSame(courseDate)) {
          if (courseTimeHourSum <= windowsTime) {
            return true;
          } else {
            return false;
          }
        } else {
          return false;
        }
      }
    } else return false;
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

              {props.data.isExpired && courseIsOver() ? (
                <span className="price">دوره به اتمام رسید.</span>
              ) : (
                <span className="price">
                  {data.price === 0 ? (
                    "رایگان"
                  ) : (
                    <div> {numeral(data.price).format("0,0")} تومان</div>
                  )}
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
                  {data.schedules
                    ? moment(data.schedules[0].date, "YYYY/MM/DD").format(
                        "jYYYY/jM/jD"
                      )
                    : " بزودی"}
                </span>
              </p>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}
