import React, { Component, Fragment } from "react";
import * as userService from "../service";
import { TeachersList, BodyNavbarAT } from "../component/teachers/";
import { Error } from "../component/error";
import { Loading } from "../component/Loading";
export class Teachers extends Component {
  state = { data: [], error: false, loading: true };
  fetchData() {
    userService
      .getAllTeacher()
      .then((response) => {
        this.setState({
          data: response.data,
          loading: false,
        });
      })
      .catch(() => this.setState({ error: true, loading: false }));
  }
  componentDidMount() {
    this.fetchData();
  }
  render() {
    if (this.state.error) {
      return <Error />;
    }
    return this.state.loading ? (
      <Loading />
    ) : (
      <Fragment>
        <BodyNavbarAT data={this.state.data} />
        <TeachersList data={this.state.data} />
      </Fragment>
    );
  }
}
