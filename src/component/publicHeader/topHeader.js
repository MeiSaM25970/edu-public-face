import React, { Component } from "react";
import { Link } from "react-router-dom";

export class TopHeader extends Component {
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
            {/* <div className="menu-item">
              <i className="zmdi zmdi-account"></i>
              <span>حساب من</span>
              <i
                className="zmdi zmdi-caret-down"
                style={{ marginRight: "5px" }}
              ></i>
              <ul className="dropdown">
                <li className="account-name">میثم ولی زاده</li>
                <li>
                  <a href="/TeacherPanel/Dashboard/Index" rel="nofollow">
                    پروفایل من
                  </a>
                </li>
                <li>
                  <a href="/TeacherPanel/Courses/Index" rel="nofollow">
                    دوره های من
                  </a>
                </li>
                <li>
                  <a href="/TeacherPanel/JoinedCourses/Index" rel="nofollow">
                    دوره های عضو شده
                  </a>
                </li>
                <li>
                  <a href="/Authentication/Logout" rel="nofollow">
                    خروج از حساب کاربری
                  </a>
                </li>
              </ul>
            </div>
           */}
          </div>
        </div>
      </div>
    );
  }
}
