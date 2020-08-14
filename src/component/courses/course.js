import React from "react";
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
    <div className=" text-center tutorials popular ir-r">
      <Link
        to={"/course/" + data._id}
        onClick={() => {
          scrollTop();
        }}
      >
        {" "}
        <div className="col-md-2 col-sm-3 col-xs-4">
          <div className="course-item ir-r position-product d-inline-block text-truncate">
            <small className="" style={{ width: 50 }}>
              {data.title}
            </small>
          </div>
        </div>
      </Link>
    </div>
  );
}
