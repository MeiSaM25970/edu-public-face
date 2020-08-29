import React, { Component } from "react";
import * as userService from "../service";
import { Loading } from "../component/Loading";
import { Error } from "../component/error";
import { Home } from "../component/home/home";
import { reactLocalStorage } from "reactjs-localstorage";
export class HomePage extends Component {
  state = {
    onlineData: { data: [] },
    offlineData: { data: [] },
    loading: true,
    error: false,
    userLocalStorage: {},
    ads: [],
  };
  fetchAd() {
    userService
      .getNotification()
      .then((res) => this.setState({ ads: res.data }))
      .catch((e) => console.log(e));
  }
  fetchDataOnline(type) {
    userService
      .getProducts(type)
      .then((response) => {
        this.setState({
          onlineData: response.data,
          loading: false,
        });
      })
      .catch(() => {
        this.setState({ loading: false, error: true });
      });
  }
  fetchDataOffline(type) {
    userService
      .getProducts(type)
      .then((response) => {
        this.setState({
          offlineData: response.data,
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
    this.fetchDataOnline("");
    this.getLocalStorage();
    this.fetchAd();
  }
  homePage() {
    if (this.state.error) {
      return <Error />;
    } else {
      return (
        <Home
          onlineData={this.state.onlineData}
          offlineData={this.state.offlineData}
          userLocalStorage={this.state.userLocalStorage || ""}
          ads={this.state.ads}
        />
      );
    }
  }

  render() {
    return this.state.loading ? <Loading /> : this.homePage();
  }
}
