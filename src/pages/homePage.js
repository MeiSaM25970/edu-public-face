import React, { Component } from "react";
import * as userService from "../service";
import { Loading } from "../component/Loading";
import { Error } from "../component/error";
import { Home } from "../component/home/home";

export class HomePage extends Component {
  state = { products: { data: [] }, loading: true, error: false };
  fetchData() {
    userService
      .getProducts()
      .then((response) => {
        this.setState({ products: response.data, loading: false });
      })
      .catch(() => {
        this.setState({ loading: false, error: true });
      });
  }
  componentDidMount() {
    this.fetchData();
  }
  homePage() {
    if (this.state.error) {
      return <Error />;
    } else {
      return <Home products={this.state.products} />;
    }
  }

  render() {
    return this.state.loading ? <Loading /> : this.homePage();
  }
}
