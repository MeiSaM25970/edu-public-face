import React, { Component } from "react";
import Loading from "react-loading";

import { ExamList } from "./examList";

export class SuggestedExam extends Component {
  state = {};
  componentDidMount() {
    const data = this.props.data;
    this.setState({ data: data });
    console.log(data);
  }
  componentWillReceiveProps() {
    this.setState({ newProps: "received" });
  }
  render() {
    return this.state.data ? (
      <div className="container popular similar-posts">
        <div className="row">
          <div className="col-sm-12 text-center">
            <h3>آزمون های پیشنهادی</h3>
            <div className="scrolldown-placeholder">
              {" "}
              <span className="news-scrolldown">
                <i className="zmdi zmdi-chevron-down zmdi-hc-lg"></i>
              </span>{" "}
            </div>
          </div>
        </div>
        <ExamList exams={this.state} />
      </div>
    ) : (
      <Loading />
    );
  }
}
