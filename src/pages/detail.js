import React, { Component } from "react";
import * as userService from "../service";
import {
  BodyNavbar,
  ELogo,
  ShortLink,
  AboutTeacher,
  ProductDetail,
  Description,
  Period,
} from "../component/detail/";

export class DetailPage extends Component {
  state = {};
  componentDidMount() {
    const id = this.props.match.params._id;
    userService.getProductById(id).then(({ data }) => this.setState({ data }));
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
      <div className="container">
        <BodyNavbar props={this.props} />
        <div className="row">
          <div className="col-md-3 col-xs-12 left-side">
            <ELogo />
            <ShortLink props={this.props} />
            <AboutTeacher data={this.state.data} />
          </div>
          <div className="col-md-9 col-xs-12 right-side">
            <ProductDetail data={this.state.data} />
            <Description data={this.state.data} />
            <Period data={this.state.data} />
          </div>
        </div>
      </div>
    );
  }
}
