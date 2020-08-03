import React, { Component, Fragment } from "react";
import * as userService from "../service";
import { BodyNavbarAT } from "../component/allTeachers/bodyNavbarAT";
import { AllTeachersList } from "../component/allTeachers/allTeachers";
export class AllTeachers extends Component {
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
        <AllTeachersList data={this.state.data} />
      </Fragment>
    );
  }
}
