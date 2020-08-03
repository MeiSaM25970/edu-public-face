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
                style={{ marginTop: 2, padding: 0 }}
              >
                <img
                  width="100px"
                  height="100px"
                  src="/images/menu-logo.png"
                  alt="لوگو"
                />
                <span> لوگو</span>
              </div>
            </Link>
          </h1>
          <div className="search-box">
            <form className="search-form">
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
