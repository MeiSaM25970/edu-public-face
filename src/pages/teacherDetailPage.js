import React, { Component } from "react";
import * as userService from "../service";
import { TeacherDetail, TeacherCoursesList } from "../component/teacherDetail/";
import { Error } from "../component/error";
import { Loading } from "../component/Loading";
import Pagination from "react-js-pagination";

export class TeacherDetailPage extends Component {
  state = {
    loading: true,
    error: false,
    activePage: 1,
    coursesLength: "",
    data: { courses: [] },
    current: [],
  };
  async componentDidMount() {
    const id = this.props.match.params.id;
    this.scrollTop();
    await this.fetchData(id);
    await this.filterCourses(this.state.activePage);
  }

  fetchData(id) {
    userService
      .getTeacher(id)
      .then((res) => {
        this.setState({
          loading: false,
          data: res.data,
          coursesLength: res.data.courses.length,
        });
      })

      .catch(() => {
        this.setState({ loading: false, error: true });
      });
  }
  scrollTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  async filterCourses(pageNumber) {
    const id = this.props.match.params.id;
    const data = { ...this.state.data };
    const beginIndex = (+pageNumber - 1) * 6;
    const endIndex = beginIndex + 6;
    if (this.state.data.courses[beginIndex]) {
      await this.setState({
        current: data.courses.slice(beginIndex, endIndex),
      });
      await console.log({ setCurrent: this.state });
    } else {
      await this.fetchData(id);
      await this.setState({
        current: this.state.data.courses.slice(beginIndex, endIndex),
      });
    }
  }
  handlePageChange(pageNumber) {
    this.setState({ activePage: pageNumber });
    this.filterCourses(pageNumber);
  }
  render() {
    if (this.state.error) {
      return <Error />;
    }
    return this.state.loading ? (
      <Loading />
    ) : (
      <main id="teacher-single" style={{ marginTop: 100 }}>
        <div className="container teacher-page">
          <div className="row">
            <TeacherDetail data={this.state.data} />

            <TeacherCoursesList
              courses={this.state.current}
              teacher={this.state.data.teacher}
            />
            <div className="row container text-center">
              <Pagination
                activePage={this.state.activePage}
                itemsCountPerPage={6}
                totalItemsCount={this.state.coursesLength}
                pageRangeDisplayed={5}
                onChange={this.handlePageChange.bind(this)}
                getPageUrl={(pageNumber) => "/courses/?page=" + pageNumber}
                hideFirstLastPages={false}
              />
            </div>
          </div>
        </div>
      </main>
    );
  }
}
