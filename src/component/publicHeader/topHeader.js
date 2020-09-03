import React, { Component } from "react";
import { Link } from "react-router-dom";
import { reactLocalStorage } from "reactjs-localstorage";
const queryString = require("query-string");

export class TopHeader extends Component {
  state = { userInfo: {} };

  componentDidMount() {
    const urlUser = window.location.search;

    if (urlUser) {
      // save to localStorage;
      const userObject = queryString.parse(urlUser);
      if (userObject.firstName && userObject.lastName && userObject.token) {
        reactLocalStorage.setObject("userInfo", userObject);
      }
    }

    const user = reactLocalStorage.getObject("userInfo");
    this.setState({ userInfo: user });
  }
  logout() {
    reactLocalStorage.clear("userInfo");
  }
  myProfile() {
    if (!this.state.userInfo.token) {
      return (
        <div className="menu-item">
          <i
            className="zmdi zmdi-account"
            style={{ transform: "translateY(3px)" }}
          ></i>{" "}
          <a href="http://dashboard.learningpage.ir/login">ورود/عضویت</a>
        </div>
      );
    } else {
      return (
        <div className="menu-item collapse">
          <i
            className="zmdi zmdi-account"
            style={{ transform: "translateY(3px)" }}
          ></i>
          <span>حساب من</span>
          <i className="zmdi zmdi-caret-down" style={{ paddingRight: 5 }}></i>
          <ul className="dropdown">
            <li
              className="account-name"
              style={{ marginBottom: 3, paddingBottom: 3 }}
            >
              {" "}
              <h4>
                {this.state.userInfo.firstName +
                  " " +
                  this.state.userInfo.lastName}{" "}
              </h4>
            </li>
            <li>
              {" "}
              <a href="http://dashboard.learningpage.ir/user/edit-user-info">
                پروفایل من
              </a>
            </li>
            <li>
              {" "}
              <a href="http://dashboard.learningpage.ir/courses">دوره های من</a>
            </li>
            <li>
              {" "}
              <a href="http://dashboard.learningpage.ir/user/change-password">
                تغییر پسورد
              </a>
            </li>
            <li>
              <a href="/" onClick={() => this.logout()}>
                خروج از حساب کاربری
              </a>
            </li>
          </ul>
        </div>
      );
    }
  }
  render() {
    return (
      <div className="top-menu ir-r">
        <div className="container text-center ir-r">
          <h1 className="logo pull-right">
            <Link to="/">
              <div
                className="no-text-decoration-white"
                style={{ marginTop: 0, padding: 0, height: 52 }}
              >
                <img
                  width="55"
                  height="12"
                  src="/images/menu-logo.jpg"
                  alt="لوگو"
                  style={{
                    minHeight: 12,
                    maxHeight: 52,
                    marginTop: 0,
                    top: 0,
                    height: 49,
                  }}
                />
                <span> Learning Page</span>
              </div>
            </Link>
          </h1>
          <div className="search-box">
            {/* <form className="search-form">
              <input
                type="text"
                name="HomeSearch"
                id="HomeSearch"
                className="HomeSearch"
                placeholder="جستجو ..."
              />
              <button
                className="btn btn-success d-bock"
                style={{ position: "center" }}
              >
                <i className="zmdi zmdi-search"></i>
              </button>
            </form>
           */}
          </div>
          <div className="pull-left">{this.myProfile()}</div>
        </div>
      </div>
    );
  }
}
