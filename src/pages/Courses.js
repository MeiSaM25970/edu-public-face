import React, { Component, Fragment } from "react";
import { BodyNavbarAC } from "../component/courses/bodyNavbarAC";
import * as userService from "../service";
import { ProductList } from "../component/Products/productList";
import Pagination from "react-js-pagination";
import { Loading } from "../component/Loading";
import { Error } from "../component/error";
// import { Search } from "../component/courses/search";

export class CoursesPage extends Component {
  state = { products: {}, activePage: 1, loading: true, error: false };
  scrollTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  fetchData(page, count, type) {
    userService
      .getCourses(page, count, type)
      .then((response) => {
        this.setState({ products: response.data, loading: false });
      })
      .catch(() => {
        this.setState({ loading: false, error: true });
      });
  }
  async handlePageChange(pageNumber) {
    await this.setState({
      ...this.state,
      activePage: pageNumber,
      loading: true,
    });
    await this.fetchData(pageNumber, 12, "");
    await this.props.history.push("/courses?page=" + pageNumber);
  }
  componentDidMount() {
    this.scrollTop();
    this.fetchData(this.state.activePage, 12, "");
  }

  render() {
    if (this.state.error) {
      return <Error />;
    }
    return this.state.loading ? (
      <Loading />
    ) : (
      <Fragment>
        <div className="container" style={{ marginTop: 100 }}>
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
