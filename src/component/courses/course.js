import React from "react";
import numeral from "numeral";
import moment from "moment-jalaali";
import { Link } from "react-router-dom";

export function Course(props) {
  const data = props.data;
  const scrollTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <div
      className=" text-center tutorials popular ir-r"
      //   style={{ width: "25%" }}
    >
      <div className="col-md-2 col-sm-3 col-xs-4">
        <div className="course-item ir-r position-product d-inline-block text-truncate">
          <Link
            to={"/course/" + data._id}
            onClick={() => {
              scrollTop();
            }}
          >
            <small className="" style={{ width: 50 }}>
              {data.title}
            </small>

            {/* <div className="category-with-bg " style={{}}>
              <h5
                className="course-title d-inline-block text-truncate"
                title={data.title}
              >
                
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
           */}
          </Link>
        </div>
      </div>
    </div>
  );
}
