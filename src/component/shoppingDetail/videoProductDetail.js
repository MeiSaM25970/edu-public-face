import React, { Component } from "react";
import "../../css/material-icons.css";
import numeral from "numeral";
import { SumPeriod } from "./sumPeriod";
import { Link } from "react-router-dom";
import * as userInfo from "../../component/detail/service";
import { DownloadLinks } from "./downloadLinks";

const data = {
  isParticipant: true,
  urls: [
    { url: "http://www.learningpage.ir" },
    { url: "http://www.google.com" },
    { url: "http://www.msn.com" },
  ],
};
export class VideoProductDetail extends Component {
  state = {
    url: "",
    disableButton: false,
    checkPaymentLink: false,
    isParticipant: false,
    showLinks: false,
  };
  id = this.props.data._id || "";
  token = this.props.userInfo.token || "";

  // setClassLink() {
  //   this.setState({
  //     url: this.props.participant.classLink,
  //     disableButton: true,
  //   });
  // }

  componentDidMount() {
    if (!this.props.userInfo.token) {
      return this.setState({ url: "http://dashboard.learningpage.ir/login" });
    } else if (this.props.participant.isParticipant) {
      return this.setState({ isParticipant: true });
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
  onclickShowLinks() {
    this.setState({ showLinks: !this.state.showLinks });
  }
  createButton() {
    if (!this.props.userInfo.token) {
      return (
        <a className="btn-pricing" href={this.state.url}>
          <span>
            {this.props.data.price === 0
              ? "رایگان"
              : numeral(this.props.data.price).format(0, 0)}
          </span>
          ثبت نام
        </a>
      );
    } else if (this.props.participant.isParticipant) {
      return (
        <button className="btn-pricing" onClick={() => this.onclickShowLinks()}>
          مشاهده لینک دانلود{" "}
        </button>
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
                ? "رایگان"
                : numeral(this.props.data.price).format(0, 0)}
            </span>
          )}
          {this.state.disableButton ? "" : " خرید"}
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
              {/* <span className="duration">
                <i className="zmdi zmdi-time " style={{ paddingRight: 10 }}></i>
                مدت کلاس {<SumPeriod data={this.props.data} />} دقیقه
              </span> */}
              <span className="views" style={{ paddingRight: 10 }}>
                <i className="zmdi zmdi-eye"></i>
                {this.props.data.participants.length} ثبت نام
              </span>
            </p>
          </div>
          <div className="card-body">
            <div className="col-md-12 col-xs-12 pricing-item ">
              <div className="col-md-4 col-xs-12 price-info">
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
                {this.createButton()}
              </div>
            </div>
          </div>
        </div>
        {this.state.showLinks ? <DownloadLinks data={data} /> : ""}
      </div>
    );
  }
}
