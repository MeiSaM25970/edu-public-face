import React, { Component, Fragment } from "react";
import * as userInfo from "../component/detail/service";
import * as userService from "../service";
import {
  BodyNavbar,
  ELogo,
  AboutTeacher,
  ProductDetail,
  Description,
  Period,
} from "../component/detail/";
import { SuggestedCourse } from "../component/detail/suggestedCourse";
import { Error } from "../component/error";
import { Loading } from "../component/Loading";

const queryString = require("query-string");

export class DetailPage extends Component {
  state = { error: false, loading: true, participant: {}, paymentLink: {} };

  user = queryString.parse(this.props.location.search);

  fetchData(id) {
    userService
      .getProductById(id)
      .then(({ data }) => this.setState({ data, loading: false }))
      .catch(() => {
        this.setState({ loading: false, error: true });
      });
  }
  checkParticipant(id, token) {
    userInfo
      .getCheckParticipant(id, token)
      .then((response) => this.setState({ participant: response.data }));
  }
  paymentLink(id, token) {
    userInfo
      .getPaymentLink(id, token)
      .then((response) => this.setState({ paymentLink: response.data }));
  }
  componentDidMount() {
    const id = this.props.match.params._id;
    const token = this.user.token;
    this.fetchData(this.props.match.params._id);
    this.checkParticipant(id, token);
    this.paymentLink(id, token);
  }

  componentWillReceiveProps(newProps) {
    const id = newProps.match.params._id;
    if (this.props.match.params._id !== id) {
      this.fetchData(id);
    }
  }

  render() {
    if (this.state.error) {
      return <Error />;
    }
    return this.state.loading ? (
      <Loading />
    ) : (
      <Fragment>
        <div className="container">
          <BodyNavbar data={this.state.data} />
          <div className="row">
            <div className="col-md-3 col-xs-12 left-side">
              <ELogo />
              {/* <ShortLink props={this.props} /> */}
              <AboutTeacher data={this.state.data} />
            </div>
            <div className="col-md-9 col-xs-12 right-side">
              <ProductDetail
                data={this.state.data}
                participant={this.state.participant}
                userInfo={this.user || ""}
                paymentLink={this.state.paymentLink}
              />
              <Description data={this.state.data} />
              <Period data={this.state.data} />
            </div>
          </div>
        </div>
        <SuggestedCourse data={this.state.data.suggestedCourse} />
      </Fragment>
    );
  }
}
