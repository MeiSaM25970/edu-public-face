import React from "react";
import numeral from "numeral";
import moment from "moment-jalaali";
import { Link } from "react-router-dom";
import { API_SERVER_ADDRESS } from "../../env";

export function VideoProduct(props) {
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
            to={"/videos/" + data._id}
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
                  <div>{numeral(data.price).format("0,0")} تومان</div>
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
                  {data.teacherId.firstName + " " + data.teacherId.lastName}{" "}
                </span>
                <br />
                <span className="value">
                  <i className="zmdi zmdi-movie" style={{ marginTop: 30 }}></i>
                  فیلم آموزشی{" "}
                </span>
              </p>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}
