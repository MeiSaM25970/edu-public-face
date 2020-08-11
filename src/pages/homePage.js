import React, { Component } from "react";
import * as userService from "../service";
import { Loading } from "../component/Loading";
import { Error } from "../component/error";
import { Home } from "../component/home/home";
import { reactLocalStorage } from "reactjs-localstorage";

const queryString = require("query-string");

export class HomePage extends Component {
  state = { products: { data: [] }, loading: true, error: false };
  fetchLocalStorage() {
    const user = queryString.parse(this.props.location.search);
    reactLocalStorage.setObject("userInfo", user);
  }

  fetchData() {
    userService
      .getProducts()
      .then((response) => {
        this.setState({
          products: response.data,
          loading: false,
          user: this.queryString,
        });
      })
      .catch(() => {
        this.setState({ loading: false, error: true });
      });
  }
  componentDidMount() {
    this.fetchData();
    this.fetchLocalStorage();
  }
  homePage() {
    if (this.state.error) {
      return <Error />;
    } else {
      return <Home data={this.state.products} />;
    }
  }

  render() {
    return this.state.loading ? <Loading /> : this.homePage();
  }
}
