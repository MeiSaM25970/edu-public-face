import React, { Fragment, Component } from "react";
import numeral from "numeral";
import moment from "moment-jalaali";
import momentTimeZone from "moment-timezone";
import { Link } from "react-router-dom";
import { API_SERVER_ADDRESS } from "../../env";

export class Product extends Component {
  state = { timeIsOver: false };
  data = this.props.data;
  scrollTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  componentDidMount() {
    this.timeIsOver2();
  }
  schedulesDate = () => {
    if (this.data.schedules.length) {
      return moment(this.data.schedules[0].date, "YYYY/MM/DD").format(
        "jYYYY/jM/jD"
      );
    } else {
      return " بزودی";
    }
  };
  // timeIsOver2 = () => {
  //   if (this.props.data.schedules.length) {
  //     const lastIndex = this.props.data.schedules.length - 1;
  //     const lastSchedule = this.props.data.schedules[lastIndex];
  //     const date = lastSchedule.date;
  //     let currentDate = moment().format("YYYY/MM/DD");

  //     console.log({
  //       data: this.props.data,
  //       lastIndex: lastIndex,
  //       lastSchedule: lastSchedule,
  //       date: date,
  //       currentDate: currentDate,
  //     });
  //     if (moment(currentDate) > moment(date)) {
  //       this.setState({ timeIsOver: true });
  //     }
  //   }
  // };
  async timeIsOver2() {
    if (this.data.schedules.length > 0) {
      const lastIndex = this.props.data.schedules.length - 1;
      const lastSchedule = this.props.data.schedules[lastIndex];
      const date = lastSchedule.date;

      let currentDate = moment().format("YYYY/MM/DD");

      if (moment(currentDate) > moment(date)) {
        this.setState({ timeIsOver: true });
      } else {
        if (moment(currentDate).isSame(date)) {
          const currentHour = Number(
            await momentTimeZone().tz("Asia/Tehran").format("HH")
          );
          const currentMinutes = Number(
            await momentTimeZone().tz("Asia/Tehran").format("mm")
          );
          const totalCurrentMinutes = currentHour * 60 + currentMinutes;

          const time = lastSchedule.time;
          const period = Number(lastSchedule.period) * 60;
          //calculate total amount of  schedule start time in minuets.
          const scheduleHour = Number(moment(time, "LT").format("HH"));
          const scheduleMinutes = Number(moment(time, "LT").format("mm"));
          const totalStartScheduleMinuts = scheduleHour * 60 + scheduleMinutes;
          const allowedTime = totalStartScheduleMinuts + period;
          if (totalCurrentMinutes > allowedTime) {
            this.setState({ timeIsOver: true });
          } else {
            this.setState({ timeIsOver: false });
          }
        } else {
          this.setState({ timeIsOver: false });
          return false;
        }
      }
    }
  }
  // const courseIsOver = () => {
  //   if (props.data.schedules && props.data.schedules.date) {
  //     const dateAndTime = Date();
  //     const windowsDate = moment(dateAndTime, "LLLL").format("YYYY/M/D");
  //     const windowsTime = moment(dateAndTime, "LLLL").format("kk");
  //     const arrayNumber = props.data.schedules.length - 1;
  //     const courseDate = props.data.schedules[arrayNumber].date;
  //     const courseTime = props.data.schedules[arrayNumber].time;
  //     const courseTimeTo24H = moment(courseTime, "LT").format("kk");
  //     const courseTimeHourSum = +courseTimeTo24H + 2;
  //     if (moment(windowsDate) > moment(courseDate)) {
  //       return true;
  //     } else {
  //       if (moment(windowsDate).isSame(courseDate)) {
  //         if (courseTimeHourSum <= windowsTime) {
  //           return true;
  //         } else {
  //           return false;
  //         }
  //       } else {
  //         return false;
  //       }
  //     }
  //   } else return false;
  // };
  OfflineMode = () => {
    return (
      <span className="value">
        <i className="zmdi zmdi-movie" style={{ marginTop: 5 }}></i>
        فایل آموزشی{" "}
      </span>
    );
  };
  // timeIsOver2();
  render() {
    return (
      <div className=" text-center tutorials popular ir-r">
        <div className="col-md-4 col-sm-6 col-xs-12">
          <div className="course-item ir-r position-product">
            <Link
              to={"/course/" + this.data._id}
              onClick={() => {
                // if (window.location.pathname !== "/") {
                this.scrollTop();
                // }
              }}
            >
              <div className="img-container">
                <img
                  src={
                    API_SERVER_ADDRESS + this.data.imageAddress ||
                    "/images/imageNotFound.webp"
                  }
                  alt={this.data.title}
                  style={{ height: "150px" }}
                />
                <span className="price">
                  {this.data.price === 0 ? (
                    "رایگان"
                  ) : (
                    <div> {numeral(this.data.price).format("0,0")} تومان</div>
                  )}
                </span>
              </div>
              <div className="category-with-bg " style={{ height: "184px" }}>
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
                    {this.data.teacherId
                      ? this.data.teacherId.firstName +
                        " " +
                        this.data.teacherId.lastName
                      : ""}
                  </span>
                </p>
                <p>
                  {this.data.isOffline ? (
                    this.OfflineMode()
                  ) : this.props.data.isExpired && this.state.timeIsOver ? (
                    <span className="title">
                      <i
                        className="zmdi zmdi-time"
                        style={{ marginTop: 5 }}
                      ></i>
                      {"دوره به اتمام رسید."}
                    </span>
                  ) : (
                    <Fragment>
                      <span className="title">
                        <i
                          className="zmdi zmdi-time"
                          style={{ marginTop: 5 }}
                        ></i>
                        شروع دوره:{" "}
                      </span>
                      <span className="value">{this.schedulesDate()}</span>
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
}
