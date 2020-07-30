import React, { Component } from "react";
import "../../css/material-icons.css";
import numeral from "numeral";
export class ProductDetail extends Component {
  render() {
    return (
      <div className="card pricing" style={{ marginTop: 10, marginBottom: 0 }}>
        <div className="card-content">
          <div className="card-header">
            <h1
              className="course-title"
              style={{ fontSize: 20, fontWeight: 700, marginBottom: 10 }}
            >
              {this.props.data.product.title}
            </h1>
            <p
              className="more-details"
              style={{ fontWeight: 700, fontSize: 13, paddingRight: 10 }}
            >
              <span className="lessons">
                <i className="zmdi zmdi-assignment"></i> سایر آموزشها - آزاد
                (عمومی)
              </span>
              <span className="duration">
                <i className="zmdi zmdi-time " style={{ paddingRight: 10 }}></i>
                مدت کلاس {this.props.data.product.schedules[0].time}
              </span>
              <span className="views" style={{ paddingRight: 10 }}>
                <i className="zmdi zmdi-eye"></i>
                {this.props.data.product.registered} ثبت نام
              </span>
            </p>
          </div>
          <div className="card-body">
            <div className="col-md-12 col-xs-12 pricing-item ">
              <div className="col-md-4 col-xs-12 price-info">
                <div className="price-title">
                  ثبت نام در دوره {this.props.data.product.price_title}
                </div>
                <div className="price-date">فعال تا پایان برگزاری دوره</div>
              </div>
              <div className="col-md-4 col-xs-12 text-center price-capacity">
                <small>ظرفیت باقیمانده : </small>
                <strong>
                  {this.props.data.product.strong -
                    this.props.data.product.registered}
                </strong>
              </div>
              <div className="col-md-4 col-xs-12 text-center">
                <a className="btn-pricing" href="/CoursePay/index/14333">
                  <span>
                    {numeral(this.props.data.product.price).format(0, 0)}
                  </span>
                  ثبت نام
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
