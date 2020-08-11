import React, { Component } from "react";
import { Link } from "react-router-dom";
import { reactLocalStorage } from "reactjs-localstorage";

const queryString = require("query-string");
export class TopHeader extends Component {
  state = { userInfo: {} };
  componentDidMount() {
    const user = reactLocalStorage.getObject("userInfo");
    this.setState({ userInfo: user });
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
          <div className="pull-left">
            <div className="menu-item">
              <i
                className="zmdi zmdi-account"
                style={{ transform: "translateY(3px)" }}
              ></i>
              {!this.state.userInfo.token ? (
                <a href="http://dashboard.learningpage.ir">ورود/عضویت</a>
              ) : (
                <a href="http://dashboard.learningpage.ir">
                  {this.state.userInfo.firstName +
                    " " +
                    this.state.userInfo.lastName}
                </a>
              )}
            </div>
          </div>
        </div>
      </div>
    );
  }
}
