import React, { Fragment, useState } from "react";
import numeral from "numeral";
import moment from "moment-jalaali";
import { Link } from "react-router-dom";
import { API_SERVER_ADDRESS } from "../../env";

export function TeacherCourses(props) {
  const data = props.data;
  const scrollTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const schedulesDate = () => {
    if (data.schedules.length) {
      return moment(data.schedules[0].date, "YYYY/MM/DD").format("jYYYY/jM/jD");
    } else {
      return " بزودی";
    }
  };

  const OfflineMode = () => {
    return (
      <span className="value">
        <i className="zmdi zmdi-movie" style={{ marginTop: 5 }}></i>
        فیلم آموزشی{" "}
      </span>
    );
  };

  return (
    <div className=" text-center tutorials popular ir-r">
      <div className="col-md-4 col-sm-6 col-xs-12">
        <div className="course-item ir-r position-product">
          <Link
            to={"/course/" + data._id}
            onClick={() => {
              scrollTop();
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
              <span className="price">
                {data.price === 0 ? (
                  "رایگان"
                ) : (
                  <div> {numeral(data.price).format("0,0")} تومان</div>
                )}
              </span>
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
                  {props.teacherId.firstName + " " + props.teacherId.lastName}{" "}
                </span>
              </p>
              <p>
                {data.isOffline ? (
                  OfflineMode()
                ) : (
                  <Fragment>
                    <span className="title">
                      <i
                        className="zmdi zmdi-time"
                        style={{ marginTop: 5 }}
                      ></i>
                      شروع دوره:{" "}
                    </span>
                    <span className="value">{schedulesDate()}</span>
                  </Fragment>
                )}
              </p>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}
