import React, { Component } from "react";
import * as userService from "../service";
import { Loading } from "../component/Loading";
import { Error } from "../component/error";
import { Home } from "../component/home/home";
import { reactLocalStorage } from "reactjs-localstorage";
export class HomePage extends Component {
  state = {
    products: { data: [] },
    loading: true,
    error: false,
    userLocalStorage: {},
  };
  fetchData() {
    userService
      .getProducts()
      .then((response) => {
        this.setState({
          products: response.data,
          loading: false,
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
  getLocalStorage() {
    const userLocalStorage = reactLocalStorage.getObject("userInfo");
    this.setState({ userLocalStorage });
  }

  componentDidMount() {
    this.scrollTop();
    this.fetchData();
    this.getLocalStorage();
  }
  homePage() {
    if (this.state.error) {
      return <Error />;
    } else {
      return (
        <Home
          data={this.state.products}
          userLocalStorage={this.state.userLocalStorage || ""}
        />
      );
    }
  }

  render() {
    return this.state.loading ? <Loading /> : this.homePage();
  }
}
