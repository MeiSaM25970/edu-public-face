import React, { Component, Fragment } from "react";
import * as userService from "../service";
import { TeachersList, BodyNavbarAT } from "../component/teachers/";
export class Teachers extends Component {
  state = { data: [] };
  fetchData() {
    userService.getAllTeacher().then((response) => {
      this.setState({
        data: response.data,
      });
    });
  }
  componentDidMount() {
    this.fetchData();
  }
  render() {
    return (
      <Fragment>
        <BodyNavbarAT data={this.state.data} />
        <TeachersList data={this.state.data} />
      </Fragment>
    );
  }
}
