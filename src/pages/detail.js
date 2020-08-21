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
import { reactLocalStorage } from "reactjs-localstorage";
import { DownloadLinks } from "../component/shoppingDetail/downloadLinks";

// const queryString = require("query-string");

export class DetailPage extends Component {
  state = {
    error: false,
    loading: true,
    participant: {},
    paymentLink: {},
    loadingParticipant: true,
  };

  user = reactLocalStorage.getObject("userInfo");
  scrollTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

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
      .then((response) => {
        this.setState({
          participant: response.data,
        });
      })
      .catch((e) => {
        console.log(e);
        // namyeshe payam khata
      })
      .finally(() => this.setState({ loadingParticipant: false }));
  }

  componentDidMount() {
    const id = this.props.match.params._id;
    const token = this.user.token;
    this.scrollTop();
    this.fetchData(id);
    if (token) {
      this.checkParticipant(id, token);
    } else {
      this.setState({ loadingParticipant: false });
    }
  }

  componentWillReceiveProps(newProps) {
    const id = newProps.match.params._id;
    const token = this.user.token;
    if (this.props.match.params._id !== id) {
      this.fetchData(id);
      if (token) {
        this.checkParticipant(id, token);
      } else {
        this.setState({ loadingParticipant: false });
      }
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
              {this.state.loadingParticipant ? (
                "درحال پردازش..."
              ) : (
                <ProductDetail
                  data={this.state.data}
                  participant={this.state.participant}
                  userInfo={this.user || ""}
                />
              )}
              <Description data={this.state.data} />
              {!this.state.data.isOffline ? (
                <Period data={this.state.data} />
              ) : this.state.participant.isParticipant ? (
                <DownloadLinks data={this.state.data.videos} />
              ) : (
                ""
              )}
            </div>
          </div>
        </div>
        <SuggestedCourse data={this.state.data.suggestedCourse} />
      </Fragment>
    );
  }
}
