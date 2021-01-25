import React, { Component } from "react";
import numeral from "numeral";
import { Link } from "react-router-dom";
import { Fragment } from "react";
import moment from "moment-jalaali";
export class Exam extends Component {
  state = {};
  data = this.props.exam;
  scrollTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  componentDidMount() {
    this.expired();
  }
  expired() {
    const currentTime = moment().format("YYYY/MM/DD");
    if (moment(currentTime) > moment(this.data.endDate)) {
      this.setState({ isExpired: true });
    } else {
      if (
        (currentTime < this.data.endDate &&
          currentTime > this.data.startDate) ||
        currentTime === this.data.startDate
      ) {
        this.setState({ isExpired: false, startExam: true });
      }
    }
  }
  render() {
    return (
      <div className="col-md-4 col-sm-6 col-xs-12">
        <div className="course-item ir-r position-product">
          <Link
            to={"/exam/" + this.data._id}
            onClick={() => {
              this.scrollTop();
            }}
          >
            <div className="img-container">
              <span className="price">
                {this.data.price === 0 ? (
                  "رایگان"
                ) : (
                  <div> {numeral(this.data.price).format("0,0")} تومان</div>
                )}
              </span>
            </div>
            <div className="category-with-bg " style={{ height: "290px" }}>
              <h5
                className="course-title d-inline-block text-truncate"
                title={this.data.title}
              >
                {this.data.title}
              </h5>
              <p>
                <span className="title">
                  <i className="zmdi zmdi-account"></i> مدرس:
                </span>
                <span className="value">
                  {this.props.teacher
                    ? " " +
                      this.props.teacher.firstName +
                      " " +
                      this.props.teacher.lastName
                    : ""}
                </span>
              </p>
              <p>
                {this.data.isExpired || this.state.isExpired ? (
                  <span className="title">
                    <i className="zmdi zmdi-time" style={{ marginTop: 5 }}></i>
                    {"آزمون به اتمام رسید."}
                  </span>
                ) : this.state.startExam ? (
                  <span className="title">
                    <i className="zmdi zmdi-time" style={{ marginTop: 5 }}></i>
                    {"آزمون در حال برگذاری می باشد."}
                  </span>
                ) : (
                  <Fragment>
                    <span className="title">
                      <i
                        className="zmdi zmdi-time"
                        // style={{ marginTop: 5 }}
                      ></i>
                      شروع آزمون:{" "}
                    </span>
                    <span className="value">
                      {moment(this.data.startDate, "YYYY/MM/DD").format(
                        "jYYYY/jMM/jDD"
                      )}
                    </span>
                  </Fragment>
                )}
              </p>
              <p>
                <span className="title">
                  <i className="zmdi zmdi-time-interval"></i> مدت آزمون:
                </span>
                <span className="value">
                  {"  " + this.data.duration + " دقیقه"}
                </span>
              </p>
              <p>
                <span className="title">
                  <i className="zmdi zmdi-assignment"></i> پایه:
                </span>
                <span className="value">{" " + this.data.field.name}</span>
              </p>
              <p>
                <span className="title">
                  <i className="zmdi zmdi-case-check"></i> جوابیه:
                </span>
                <span className="value">
                  {this.data.answerStatus === 0
                    ? " ندارد "
                    : this.data.answerStatus === 1
                    ? " نمایش به شرکت کنندگان "
                    : this.data.answerStatus === 2
                    ? " نمایش بعد از آزمون "
                    : ""}
                </span>
              </p>
            </div>
          </Link>
        </div>
      </div>
    );
  }
}
