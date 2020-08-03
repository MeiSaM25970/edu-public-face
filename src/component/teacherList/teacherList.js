import React, { Component } from "react";
import { Link } from "react-router-dom";
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
        <div className="row">
          <div className="col-sm-10 col-sm-offset-1 text-center">
            <h3 className="section-title">برخی از مدرسان آنلاین آموزان</h3>
            <p className="section-description">
              همه شما مدرسین محترم هم می توانید با ثبت نام در آنلاین آموزان به
              برگزاری دوره های مختلف در زمینه هایی که در آن ها تخصص دارید،
              بپردازید.
            </p>
            <Link to="/allteachers">
              <div className="btn btn-info">
                <i className="zmdi zmdi-account" style={{ paddingLeft: 5 }}></i>
                همه مدرسان ما
              </div>
            </Link>
          </div>
        </div>
        <br />
        <br />
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
                    <Link to={"/edu/" + item.firstName + "-" + item.lastName}>
                      {" "}
                      {item.firstName + " " + item.lastName}
                    </Link>
                  </h4>
                  <p className="description">{item.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }
}
