import React, { Component } from "react";
import "../../css/material-icons.css";
import numeral from "numeral";
import { SumPeriod } from "./sumPeriod";
import * as userInfo from "../../component/detail/service";
import moment from "moment-jalaali";
// const momentTimeZone = require("moment-timezone");
export class ProductDetail extends Component {
  state = {
    url: "",
    disableButton: false,
    participant: {},
    checkPaymentLink: false,
    timeIsOver: false,
  };
  id = this.props.data._id || "";
  token = this.props.userInfo.token || "";
  timeIsOver2() {
    const lastIndex = this.props.data.schedules.length - 1;
    const lastSchedule = this.props.data.schedules[lastIndex];
    const date = lastSchedule.date;

    let currentDate = moment().format("YYYY/MM/DD");

    if (moment(currentDate) > moment(date)) {
      this.setState({ timeIsOver: true });
    }
  }
  // async timeIsOver2() {
  //   const lastIndex = this.props.data.schedules.length - 1;
  //   const lastSchedule = this.props.data.schedules[lastIndex];
  //   const date = lastSchedule.date;

  //   let currentDate = moment().format("YYYY/MM/DD");

  //   if (moment(currentDate) > moment(date)) {
  //     this.setState({ timeIsOverLoading: false });
  //     return true;
  //   }
  //   else {
  //     if (moment(currentDate).isSame(date)) {
  //       console.log("hear");
  //       const currentHour = Number(
  //         await momentTimeZone().tz("Asia/Tehran").format("HH")
  //       );
  //       const currentMinutes = Number(
  //         await momentTimeZone().tz("Asia/Tehran").format("mm")
  //       );
  //       const totalCurrentMinutes = currentHour * 60 + currentMinutes;

  //       const time = lastSchedule.time;
  //       const period = Number(lastSchedule.period) * 60;
  //       //calculate total amount of  schedule start time in minuets.
  //       const scheduleHour = Number(moment(time, "LT").format("HH"));
  //       const scheduleMinutes = Number(moment(time, "LT").format("mm"));
  //       const totalStartScheduleMinuts = scheduleHour * 60 + scheduleMinutes;
  //       const allowedTime = totalStartScheduleMinuts + period;
  //       if (totalCurrentMinutes > allowedTime) {
  //         console.log("2");

  //         this.setState({ timeIsOverLoading: false });

  //         return true;
  //       } else {
  //         this.setState({ timeIsOverLoading: false });
  //         return false;
  //       }
  //     } else {
  //       this.setState({ timeIsOverLoading: false });
  //       return false;
  //     }
  //   }
  // }
  // async timeIsOver2() {
  //   const lastIndex = this.props.data.schedules.length - 1;
  //   const lastSchedule = this.props.data.schedules[lastIndex];
  //   const date = lastSchedule.date;

  //   const currentDate = moment().format("YYYY/MM/DD");

  //   if (moment(currentDate) > moment(date)) {
  //     console.log("1");
  //     return true;
  //   } else {
  //     console.log(2);
  //     return false;
  //   }
  // }

  setClassLink() {
    this.setState({
      url: this.props.participant.classLink,
      disableButton: true,
    });
  }
  setInitialState() {
    this.setState({
      url: "",
      disableButton: false,
      participant: {},
      checkPaymentLink: false,
    });
  }

  componentDidMount() {
    if (this.props.data.schedules.length) {
      this.timeIsOver2();
    }

    if (!this.props.userInfo.token) {
      return this.setState({ url: "http://dashboard.learningpage.ir/login" });
    } else if (this.props.participant.isParticipant) {
      return this.setClassLink();
    } else {
      this.setState({ checkPaymentLink: true });
    }
  }

  participantsLink() {
    this.paymentLink(this.id, this.token);
    this.setState({ disableButton: true });
  }
  paymentLink(id, token) {
    userInfo
      .getPaymentLink(id, token)
      .then((response) => (window.location.href = response.data.url));
  }
  //  timeIsOver() {
  //   const dateAndTime = Date();
  //   const windowsDate = moment(dateAndTime, "LLLL").format("YYYY/M/D");
  //   const windowsTime = moment(dateAndTime, "LLLL").format("kk");
  //   const arrayNumber = this.props.data.schedules.length - 1;
  //   const courseDate = this.props.data.schedules[arrayNumber].date;
  //   const courseTime = this.props.data.schedules[arrayNumber].time;
  //   const courseTimeTo24H = moment(courseTime, "LT").format("kk");
  //   const courseTimeHourSum = +courseTimeTo24H + 2;
  //   console.log(this.props.data.schedules[arrayNumber]);
  //   if (moment(windowsDate) > moment(courseDate)) {
  //     return true;
  //   } else {
  //     if (moment(windowsDate).isSame(courseDate)) {
  //       if (courseTimeHourSum <= windowsTime) {
  //         return true;
  //       } else {
  //         return false;
  //       }
  //     } else {
  //       return false;
  //     }
  //   }
  // }
  scrollToY = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  createButton() {
    if (!this.props.userInfo.token) {
      return (
        <a className="btn-pricing" href={this.state.url}>
          <span>
            {this.props.data.price === 0
              ? " رایگان "
              : numeral(this.props.data.price).format(0, 0)}
          </span>
          ثبت نام
        </a>
      );
    } else if (this.props.participant.isParticipant) {
      return this.props.data.isOffline ? (
        ""
      ) : (
        <a className="btn-pricing" href={this.state.url}>
          ورود به کلاس
        </a>
      );
    } else {
      return (
        <button
          disabled={this.state.disableButton}
          className="btn-pricing"
          onClick={() => {
            if (this.state.checkPaymentLink) {
              this.participantsLink();
            }
          }}
        >
          {this.state.disableButton ? (
            "لطفا صبر کنید"
          ) : (
            <span>
              {this.props.data.price === 0
                ? "رایگان "
                : numeral(this.props.data.price).format(0, 0)}
            </span>
          )}
          {this.state.disableButton ? "" : "ثبت نام"}
        </button>
      );
    }
  }
  // isExpired() {
  //   this.timeIsOver2().then((res) => {
  //     if (res) {
  //       return <div> دوره به اتمام رسید.</div>;
  //     } else {
  //       return this.createButton();
  //     }
  //   });
  // }
  render() {
    return (
      <div className="card pricing" style={{ marginTop: 10, marginBottom: 0 }}>
        <div className="card-content">
          <div className="card-header">
            <h1
              className="course-title"
              style={{ fontSize: 20, fontWeight: 700, marginBottom: 10 }}
            >
              {this.props.data.title}
            </h1>
            <p
              className="more-details"
              style={{ fontWeight: 700, fontSize: 13, paddingRight: 10 }}
            >
              {/* <span className="lessons">
                <i className="zmdi zmdi-assignment"></i> سایر آموزشها - آزاد
                (عمومی)
              </span>
               */}
              <span className="duration">
                <i className="zmdi zmdi-time " style={{ paddingRight: 10 }}></i>
                مدت کلاس {<SumPeriod data={this.props.data} />} دقیقه
              </span>
              <span className="views" style={{ paddingRight: 10 }}>
                <i className="zmdi zmdi-eye"></i>
                {this.props.data.participants.length} ثبت نام
              </span>
            </p>
          </div>
          <div className="card-body">
            <div className="col-md-12 col-xs-12 pricing-item ">
              <div className="col-md-4 col-xs-12 price-info">
                {/* <div className="price-title">
                  ثبت نام در دوره {this.props.data.product.price_title}
                </div> */}
                <div className="price-date">فعال تا پایان برگزاری دوره</div>
              </div>
              <div className="col-md-4 col-xs-12 text-center price-capacity">
                {/* <small>ظرفیت باقیمانده : </small> */}
                {/* <strong>
                  {this.props.data.product.strong -
                    this.props.data.product.registered}
                </strong> */}
              </div>
              {this.state.timeIsOver &&
              this.props.data.isExpired &&
              !this.props.data.isOffline ? (
                "دوره به اتمام رسیده است."
              ) : (
                <div className="col-md-4 col-xs-12 text-center">
                  {this.createButton()}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    );
  }
}
