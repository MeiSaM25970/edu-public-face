import React, { Component } from "react";
import { ExamList, ExamMap } from "../component/exam";
import { Loading } from "../component/Loading";
import * as service from "../service";
import { scrollTop } from "./comingSoon";
export class ExamPage extends Component {
  state = {};

  componentDidMount() {
    this.fetchAllExams();
    scrollTop();
  }

  fetchAllExams() {
    service
      .fetchExam()
      .then((res) => this.setState({ exams: res.data }))
      .catch((err) => {
        console.log(err);
        this.props.history.replace("/error");
      })
      .finally(() => scrollTop());
  }
  render() {
    return (
      <div className="container" style={{ minHeight: 800 }}>
        <ExamMap />
        {this.state.exams ? <ExamList exams={this.state.exams} /> : <Loading />}
      </div>
    );
  }
}
