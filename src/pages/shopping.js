import React, { Component, Fragment } from "react";
import { VideoProductList, BodyNavbarShopping } from "../component/shopping/";
import * as userService from "../service";
import Pagination from "react-js-pagination";

export class Shopping extends Component {
  state = { data: {}, activePage: 1 };
  fetchData(page, count, type) {
    userService
      .getCourses(page, count, type)
      .then((response) => {
        this.setState({ data: response.data, loading: false });
      })
      .catch(() => {
        this.setState({ loading: false, error: true });
      });
  }
  componentDidMount() {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
    this.fetchData(this.state.activePage, 12, "&type=offline");
  }
  handlePageChange(pageNumber) {
    this.setState({ ...this.state, activePage: pageNumber });
    this.fetchData(pageNumber, 12, "&type=offline");
    this.props.history.push("/videos?page=" + pageNumber);
  }
  render() {
    return (
      <Fragment>
        <BodyNavbarShopping />
        <VideoProductList shoppingData={this.state.data} />
        <div className="row container text-center">
          <Pagination
            activePage={this.state.activePage}
            itemsCountPerPage={12}
            totalItemsCount={this.state.data.totalCount || 50}
            pageRangeDisplayed={5}
            onChange={this.handlePageChange.bind(this)}
            getPageUrl={(pageNumber) => "/videos/?page=" + pageNumber}
            hideFirstLastPages={false}
          />
        </div>
      </Fragment>
    );
  }
}
