import React, { Component } from "react";
import { Link } from "react-router-dom";
export class TeacherList extends Component {
  render() {
    console.log(this.props.products);
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
            <Link to="/allteacher">
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
          {this.props.products.map((item, index) => (
            <div className="col-md-3 col-sm-6 col-xs-12">
              <div className="card card-profile teacher-item" key={index}>
                <div className="card-avatar">
                  <img className={item.teacher_name} src={item.image} />
                  <span className="course-count">
                    <span>{item.schedules[0].priod}</span>
                    <small>دوره</small>
                  </span>
                </div>
                <div className="card-content">
                  {/* <h6 className="category text-gray">
                      دسته ها 
                       </h6> */}
                  <h4 className="card-title">
                    <Link to={"/edu/" + item.teacher_name}>
                      {" "}
                      {item.teacher_name}
                    </Link>
                  </h4>
                  <p className="description">{item.teacher_description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }
}
