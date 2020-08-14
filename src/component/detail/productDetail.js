import React, { Component } from "react";
import "../../css/material-icons.css";
import numeral from "numeral";
import { SumPeriod } from "./sumPeriod";
import { Link } from "react-router-dom";
import * as userInfo from "../../component/detail/service";

export class ProductDetail extends Component {
  state = {
    url: "",
    disableButton: false,
    participant: {},
    checkPaymentLink: false,
  };
  id = this.props.data._id || "";
  token = this.props.userInfo.token || "";

  setClassLink() {
    console.log({ link: this.props.participant });
    this.setState({
      url: this.props.participant.classLink,
      disableButton: true,
    });
  }

  componentDidMount() {
    console.log(this.props);
    if (!this.props.userInfo.token) {
      return this.setState({ url: "http://dashboard.learningpage.ir" });
    } else if (this.props.participant.isParticipant) {
      console.log("gikhar");
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
  createButton() {
    console.log("start");
    if (!this.props.userInfo.token) {
      return (
        <a className="btn-pricing" href={this.state.url}>
          <span>{numeral(this.props.data.price).format(0, 0)}</span>
          ثبت نام
        </a>
      );
    } else if (this.props.participant.isParticipant) {
      console.log(this.state.url);
      return (
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
            <span>{numeral(this.props.data.price).format(0, 0)}</span>
          )}
          {this.state.disableButton ? "" : "ثبت نام"}
        </button>
      );
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
              <div className="col-md-4 col-xs-12 text-center">
                {this.props.data.isExpired ? (
                  <Link className="btn-pricing" to="/">
                    دوره به اتمام رسید.
                  </Link>
                ) : (
                  this.createButton()
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
