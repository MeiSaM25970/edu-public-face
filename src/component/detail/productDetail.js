import React, { Component } from "react";
import "../../css/material-icons.css";
import * as userService from "../../service";
export class ProductDetail extends Component {
  state = {
    data: {
      schedules: [{ date: "" }, { time: "1" }, { priod: "" }, { _id: "" }],
      products: [
        {
          image: "",
          teacher_name: "",
          teacher_description: "",
          start_at: "",
          title: "",
          price: "",
          registered: "",
          price_title: "",
          strong: "",
          description: ``,
        },
      ],
    },
  };
  componentDidMount() {
    const id = this.props.data.products._id;
    userService
      .getProductById(id)
      .then(({ data }) => this.setState({ data }, console.log(this.state)));
  }
  render() {
    return this.state.data.products.map((item, index) => (
      <div className="card pricing" key={index}>
        <div className="card-content">
          <div className="card-header">
            <h1
              className="course-title"
              style={{ fontSize: 20, fontWeight: 700, marginBottom: 10 }}
            >
              {item.title}
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
                <i className="zmdi zmdi-time " style={{ marginRight: 10 }}></i>
                {this.state.data.schedules.time}
              </span>
              <span className="views">
                <i className="zmdi zmdi-eye"></i>
                {item.registered} ثبت نام
              </span>
            </p>
          </div>
          <div className="card-body">
            <div className="col-md-12 col-xs-12 pricing-item ">
              <div className="col-md-4 col-xs-12 price-info">
                <div className="price-title">
                  ثبت نام در دوره {item.price_title}
                </div>
                <div className="price-date">فعال تا پایان برگزاری دوره</div>
              </div>
              <div className="col-md-4 col-xs-12 text-center price-capacity">
                <small>ظرفیت باقیمانده : </small>
                <strong>{item.strong - item.registered}</strong>
              </div>
              <div className="col-md-4 col-xs-12 text-center">
                <a className="btn-pricing" href="/CoursePay/index/14333">
                  <span>{item.price}</span>
                  ثبت نام
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    ));
  }
}
