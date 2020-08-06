import React, { Component, Fragment } from "react";
import { BodyNavbarAC } from "../component/courses/bodyNavbarAC";
import * as userService from "../service";
import { ProductList } from "../component/Products/productList";
import Pagination from "react-js-pagination";
// import { Search } from "../component/courses/search";

export class CoursesPage extends Component {
  state = { products: {}, activePage: 1 };

  fetchData(page, count) {
    userService.getCourses(page, count).then((response) => {
      this.setState({ products: response.data });
      console.log(this.state);
    });
  }
  handlePageChange(pageNumber) {
    this.setState({ ...this.state, activePage: pageNumber });
    this.fetchData(pageNumber, 12);
    this.props.history.push("/courses?page=" + pageNumber);
  }
  componentDidMount() {
    this.fetchData(this.state.activePage, 12);
  }

  // getPageNumber(props) {
  //   const page = props.location.search.replace("?page=", "");
  //   return page || 1;
  // }
  // componentWillReceiveProps(newProps) {
  //   this.fetchData(this.getPageNumber(newProps), 12);
  // }

  render() {
    console.log(this.state.products);
    if (!this.state.products.data) {
      return (
        <div
          className="text-primary spinner-border mx-auto mt-5 d-block"
          role="status"
        >
          <span className="sr-only">بارگیری...</span>
        </div>
      );
    }
    return (
      <Fragment>
        <div className="container">
          <div className="row">
            <BodyNavbarAC />
          </div>
          {/* <Search /> */}

          <div className="row ">
            <ProductList products={this.state.products || ""} />
          </div>
          <div className="row container text-center">
            <Pagination
              activePage={this.state.activePage}
              itemsCountPerPage={12}
              totalItemsCount={this.state.products.totalCount || 50}
              pageRangeDisplayed={5}
              onChange={this.handlePageChange.bind(this)}
              getPageUrl={(pageNumber) => "/courses/?page=" + pageNumber}
              hideFirstLastPages={false}
            />
          </div>
          {/* <PageCount data={this.state || ""} /> */}
        </div>
      </Fragment>
    );
  }
}
