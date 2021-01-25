import React, { Component, Fragment } from "react";
import * as userService from "../service";
import { ELogo, Description } from "../component/detail/";
import { Error } from "../component/error";
import { Loading } from "../component/Loading";
import { reactLocalStorage } from "reactjs-localstorage";
import { BodyNavbarExam } from "../component/exam/examMap";
import { AboutTeacherExam } from "../component/exam/aboutTeacher";
import { ExamDetail } from "../component/exam/examDetail";
import { SuggestedExam } from "../component/exam/suggestExams";

export class ExamDetailPage extends Component {
  state = {
    error: false,
    loading: true,
    participant: {},
    paymentLink: {},
    loadingParticipant: true,
    students: [],
    suggestExam: [],
  };

  user = reactLocalStorage.getObject("userInfo");
  scrollTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  async fetchData(id) {
    await userService
      .fetchExamById(id)
      .then(
        async ({ data }) =>
          await this.setState({
            data: data.exam,
            loading: false,
            students: data.students,
            suggestExam: data.suggestedExams,
          })
      )
      .catch(() => {
        this.setState({ loading: false, error: true });
      });
  }
  checkParticipant(id, token) {
    userService
      .participantExam(id, token)
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
  initialState = () =>
    this.setState({
      error: false,
      loading: true,
      participant: {},
      paymentLink: {},
      loadingParticipant: true,
      students: [],
      suggestExam: [],
    });
  async componentWillReceiveProps(newProps) {
    await this.initialState();
    const id = newProps.match.params._id;
    const token = this.user.token;
    await this.fetchData(id);
    if (token) {
      await this.checkParticipant(id, token);
    } else {
      await this.setState({ loadingParticipant: false });
    }
  }

  render() {
    if (this.state.error) {
      return <Error />;
    }
    // console.log(this.state);
    return this.state.loading ? (
      <Loading />
    ) : (
      <Fragment>
        <div className="container">
          <BodyNavbarExam data={this.state.data} />
          <div className="row">
            <div className="col-md-3 col-xs-12 left-side">
              <ELogo />
              {/* <ShortLink props={this.props} /> */}
              <AboutTeacherExam data={this.state.data.teacher} />
            </div>
            <div className="col-md-9 col-xs-12 right-side">
              {this.state.loadingParticipant ? (
                "درحال پردازش..."
              ) : (
                <ExamDetail
                  data={this.state.data}
                  participant={this.state.participant}
                  userInfo={this.user || ""}
                  students={this.state.students}
                />
              )}
              <Description data={this.state.data} />
            </div>
          </div>
        </div>
        <SuggestedExam data={this.state.suggestExam} {...this.props} />
      </Fragment>
    );
  }
}
