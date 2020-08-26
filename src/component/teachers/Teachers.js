import React, { Component } from "react";
import { Link } from "react-router-dom";
import { API_SERVER_ADDRESS } from "../../env";
export class TeachersList extends Component {
  render() {
    return (
      <div className="container pros" style={{ minHeight: 400 }}>
        <div className="row text-center">
          {this.props.data.map((item, index) => (
            <Link
              to={
                "/teachers/" +
                item.firstName +
                "-" +
                item.lastName +
                "/" +
                item._id
              }
            >
              <div className="col-md-3 col-sm-6 col-xs-12" key={index}>
                <div className="card card-profile teacher-item">
                  <div
                    className="card-avatar"
                    style={{ width: "100px", height: "100px" }}
                  >
                    <img
                      className={item.firstName + " " + item.lastName}
                      src={
                        API_SERVER_ADDRESS + item.imageAddress ||
                        API_SERVER_ADDRESS + "/images/imageNotFound.svg"
                      }
                      alt={item.firstName + " " + item.lastName}
                      style={{ width: "100%", height: "100%" }}
                    />
                    <span className="course-count">
                      <span>{item.coursesCount}</span>
                      <small>دوره</small>
                    </span>
                  </div>
                  <div className="card-content">
                    {/* <h6 className="category text-gray">
                        دسته ها
                         </h6> */}
                    <h4 className="card-title">
                      {" "}
                      {item.firstName + " " + item.lastName}
                    </h4>
                    <p
                      className="description d-inline-block text-truncate d-inline-block text-truncate"
                      // style={{ maxWidth: "150px" }}
                    >
                      {item.description}
                    </p>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    );
  }
}
