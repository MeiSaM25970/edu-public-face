import React, { Component, Fragment } from "react";
import * as userService from "../service";
import {
  BodyNavbar,
  ELogo,
  ShortLink,
  AboutTeacher,
  ProductDetail,
  Description,
} from "../component/detail/";

export class DetailPage extends Component {
  state = {
    data: {
      schedules: [
        { date: "" },
        { time: [{ hours: "1" }, { min: "2" }] },
        { priod: "" },
        { _id: "" },
      ],
      products: [
        {
          image: "",
          teacher_name: "",
          teacher_description: "",
          start_at: "",
          title: "",
          price: "",
          description: ``,
          schedules: [{ date: "" }, { time: "1" }, { priod: "" }, { _id: "" }],
        },
      ],
    },
  };
  componentDidMount() {
    const id = this.props.match.params._id;
    userService
      .getProductById(id)
      .then(({ data }) => this.setState({ data }, console.log(this.state)));
  }

  render() {
    const data = this.state.data;
    if (!data) {
      return (
        <div
          className="text-primary spinner-border mx-auto mt-5 d-block"
          role="status"
        >
          <span className="sr-only">بارگیری...</span>
        </div>
      );
    }
    return (
      <Fragment>
        <BodyNavbar props={this.props} />
        <div className="row">
          <div className="col-md-3 col-xs-12 left-side">
            <ELogo />
            <ShortLink props={this.props} />
            <AboutTeacher props={this.props} />
          </div>
          <div className="col-md-9 col-xs-12 right-side">
            <ProductDetail data={this.state.data || ""} />
            <Description />
          </div>
        </div>
      </Fragment>
    );
  }
}
