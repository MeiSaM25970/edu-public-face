import React, { Component } from "react";

export class TopHeader extends Component {
  render() {
    return (
      <div className="top-menu ir-r">
        <div className="container text-center ir-r">
          <h1 className="logo pull-right">
            <a className="no-text-decoration-white" href="/">
              <img src="/images/menu-logo.png" alt="لوگو" />
              <span> لوگو</span>
            </a>
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
            <div className="menu-item">
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
          </div>
        </div>
      </div>

      // // <nav
      // //   className="navbar navbar-expand-lg navbar-light"
      // //   style={{ backgroundColor: "#f8f8f8" }}
      // // >
      // //   <a className="navbar-brand col-lg-2" href="/">
      // //     <img
      // //       className="mr-2"
      // //       width="50%"
      // //       src="/images/menu-logo.png"
      // //       alt="Logo"
      // //     />
      // //     <span>لوگو</span>
      // //   </a>

      // //   <div
      // //     className="collapse navbar-collapse text-center col-lg-8"
      // //     id="navbarSupportedContent"
      // //   >
      // //     <form className="form-inline my-2 my-lg-0 mx-auto">
      // //       <input
      // //         className="form-control mr-sm-1"
      // //         type="search"
      // //         placeholder="جستجو..."
      // //         aria-label="Search"
      // //       />
      // //       <button
      // //         className="
      // //          btn btn-success
      // //            my-2 my-sm-0"
      // //         type="submit"
      // //         style={{
      // //           backgroundImage: ` url("/images/search.svg")`,
      // //           backgroundRepeat: "no-repeat",
      // //           backgroundSize: "25px 25px",
      // //           backgroundPosition: "center",
      // //           width: "38px",
      // //           height: "38px",
      // //         }}
      // //       ></button>
      // //     </form>
      // //   </div>
      // //   <div className="dropdown col-lg-2">
      // //     <button
      // //       className="btn btn-secondary dropdown-toggle shadow-none border-0 bg-transparent text-dark"
      // //       type="button"
      // //       id="dropdownMenuButton"
      // //       data-toggle="dropdown"
      // //       aria-haspopup="true"
      // //       aria-expanded="false"
      // //     >
      // //       حساب من
      // //     </button>
      // //     <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
      // //       <a className="dropdown-item" href="#">
      // //         پروفایل من
      // //       </a>
      // //       <a className="dropdown-item" href="#">
      // //         دوره های من
      // //       </a>
      // //       <a className="dropdown-item" href="#">
      // //         دوره های عضو شده
      // //       </a>
      // //     </div>
      // //   </div>
      // // </nav>
      // /
    );
  }
}
