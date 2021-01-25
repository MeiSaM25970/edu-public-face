import React, { Component } from "react";
import "../../css/material-icons.css";
import numeral from "numeral";
// import { SumPeriod } from "./sumPeriod";
import * as userInfo from "../../component/detail/service";
import moment from "moment-jalaali";

export class ExamDetail extends Component {
  state = {
    url: "",
    disableButton: false,
    participant: {},
    checkPaymentLink: false,
    timeIsOver: false,
    data: {},
    startExam: false,
  };
  id = this.props.data._id || "";
  token = this.props.userInfo.token || "";
  type = "exam";

  async timeIsOver2() {
    let currentDate = moment().format("YYYY/MM/DD");

    if (moment(currentDate) > moment(this.state.data.endDate)) {
      this.setState({ timeIsOver: true });
    } else {
      if (moment(currentDate).isSame(this.state.data.startDate)) {
        let currentTime = moment().format("HH:MM");
        if (
          currentTime >= this.state.data.startTime &&
          currentTime <= this.state.data.endTime
        ) {
          this.setState({ timeIsOver: true, startExam: true });
        } else {
          if (currentTime < this.state.data.startTime) {
            this.setState({ timeIsOver: false, startExam: false });
          } else this.setState({ timeIsOver: true, startExam: false });
        }
      } else {
        this.setState({ timeIsOver: false });
        return false;
      }
    }
  }

  setExamLink(id, token) {
    this.setState({
      url: `https://exam.tad360.ir/exam/start/${id}?token=${token}`,
      disableButton: false,
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
    if (this.props.data) {
      this.timeIsOver2();
    }

    if (!this.props.userInfo.token) {
      return this.setState({ url: "https://dashboard.edu.tad-group.ir/login" });
    } else if (this.props.participant.isParticipant) {
      return this.setExamLink(this.id, this.props.userInfo.token);
    } else {
      this.setState({ checkPaymentLink: true });
    }
  }

  participantsLink() {
    this.paymentLink(this.type, this.id, this.token);
    this.setState({ disableButton: true });
  }
  paymentLink(type, id, token) {
    userInfo
      .getPaymentLink(type, id, token)
      .then((response) => (window.location.href = response.data.url))
      .catch((err) => console.log(err));
  }
  scrollToY = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  createButton() {
    if (this.props.data.isExpired && this.state.timeIsOver) {
      return (
        <span
          style={{ marginRight: "50%", display: "block" }}
          className="btn-pricing"
        >
          آزمون به اتمام رسید.
        </span>
      );
    } else {
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
        return (
          <a className="btn-pricing" href={this.state.url}>
            ورود به آزمون
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
                  ? " رایگان "
                  : numeral(this.props.data.price).format(0, 0)}
              </span>
            )}
            {this.state.disableButton
              ? ""
              : !this.props.data.isOffline
              ? "  ثبت نام  "
              : " خرید "}
          </button>
        );
      }
    }
  }

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
                {` مدت آزمون ${this.props.data.duration} دقیقه`}
              </span>
              {this.props.students ? (
                <span className="views" style={{ paddingRight: 10 }}>
                  <i className="zmdi zmdi-eye"></i>
                  {this.props.students.length} {" ثبت نام "}
                </span>
              ) : (
                ""
              )}
            </p>
          </div>
          <div className="card-body">
            <div className="col-md-12 col-xs-12 pricing-item ">
              <div
                className="col-md-4 col-xs-12 price-info "
                style={{ lineHeight: 2 }}
              >
                {/* <div className="price-title">
                  ثبت نام در آزمون {this.props.data.product.price_title}
                </div> */}
                <div className="title">فعال تا پایان برگزاری آزمون</div>
                <div>
                  {" "}
                  <span className="title " style={{ marginTop: 10 }}>
                    شروع آزمون:{" "}
                  </span>
                  <span className="value">
                    {moment(this.props.data.startDate, "YYYY/MM/DD").format(
                      "jYYYY/jMM/jDD"
                    )}
                  </span>
                </div>

                <div>
                  <span className="title"> پایه:</span>
                  <span className="value">
                    {"  " + this.props.data.field.name}
                  </span>
                </div>
                <p>
                  <span className="title"> جوابیه:</span>
                  <span className="value">
                    {this.props.data.answerStatus === 0
                      ? " ندارد "
                      : this.props.data.answerStatus === 1
                      ? " نمایش به شرکت کنندگان "
                      : this.props.data.answerStatus === 2
                      ? " نمایش بعد از آزمون "
                      : ""}
                  </span>
                </p>
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
                "آزمون به اتمام رسیده است."
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
