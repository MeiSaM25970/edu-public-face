import React, { Component } from "react";
import * as userService from "../../service";
import { API_SERVER_ADDRESS } from "../../env";
export class TeacherList extends Component {
  state = { data: [] };
  fetchData() {
    userService.getLimitTeachers().then((response) => {
      this.setState({
        data: response.data,
      });
    });
  }
  componentDidMount() {
    this.fetchData();
  }
  render() {
    return (
      <div className="container pros">
        <div className="row text-center">
          {this.state.data.map((item, index) => (
            <div className="col-md-3 col-sm-6 col-xs-12" key={index}>
              <div className="card card-profile teacher-item">
                <div
                  className="card-avatar"
                  style={{ width: 100, height: 100 }}
                >
                  <img
                    style={{ width: "100%", height: "100%" }}
                    className={item.firstName + " " + item.lastName}
                    src={
                      API_SERVER_ADDRESS + item.imageAddress ||
                      API_SERVER_ADDRESS + "/images/imageNotFound.svg"
                    }
                    alt="teacherImage"
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
                    {/* <Link to={"/edu/" + item.firstName + "-" + item.lastName}> */}{" "}
                    {item.firstName + " " + item.lastName}
                    {/* </Link> */}
                  </h4>
                  <p className=" description d-inline-block text-truncate">
                    {item.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }
}
