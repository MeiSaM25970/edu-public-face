import React, { Component } from "react";
import "../../css/material-icons.css";
import numeral from "numeral";
import { SumPeriod } from "./sumPeriod";
import { reactLocalStorage } from "reactjs-localstorage";
import { Link } from "react-router-dom";

export class ProductDetail extends Component {
  state = { userInfo: { toke: "" } };
  componentDidMount() {
    const user = reactLocalStorage.getObject("userInfo");
    this.setState({ userInfo: user });
  }
  participantsLink() {
    if (this.props.participant.isParticipant) {
      return "https://www.skyroom.online/ch/reza135/room-5f2ead8c5cb0773abc4ed19e-5f2fb67c7e026b38c0383996/t/eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJleHAiOjE1OTY5NjgwMDYsInVpZCI6MzQ3MDYyMX0.b6dGPDdUGXH1ao0VCjbMd7JUfRLspcd_g4LyhkZT54o/l/fa";
    } else {
      return this.state.userInfo.token
        ? "https://sandbox.zarinpal.com/pg/StartPay/000000000000000000000000000000034485"
        : "http://dashboard.learningpage.ir";
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
                  <a
                    className="btn-pricing"
                    // onClick={() => this.setState({ click: !this.state.click })}
                    href={this.participantsLink()}
                  >
                    <span>{numeral(this.props.data.price).format(0, 0)}</span>
                    ثبت نام
                  </a>
                )}
                <br />
                <small className="text-danger">
                  {this.state.click
                    ? "با شماره تلفن 09335456570 تماس بگیرید."
                    : ""}
                </small>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
