import React, { Component } from "react";

export class TopHeader extends Component {
  render() {
    return (
      <div dir="rtl">
        <nav
          className="navbar navbar-expand-lg navbar-light row"
          style={{ backgroundColor: "#f8f8f8" }}
        >
          <a className="navbar-brand border col-lg-2" href="/">
            <img
              className="mr-2"
              width="50%"
              src="/images/menu-logo.png"
              alt="Logo"
            />
            <span>لوگو</span>
          </a>
          {/* <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button> */}

          <div
            className="collapse navbar-collapse text-center col-lg-8"
            id="navbarSupportedContent"
          >
            <form className="form-inline my-2 my-lg-0 mx-auto">
              <input
                className="form-control mr-sm-1"
                type="search"
                placeholder="جستجو..."
                aria-label="Search"
              />
              <button
                className="
               btn btn-success
                 my-2 my-sm-0"
                type="submit"
                style={{
                  backgroundImage: ` url("/images/search.svg")`,
                  backgroundRepeat: "no-repeat",
                  backgroundSize: "25px 25px",
                  backgroundPosition: "center",
                  width: "38px",
                  height: "38px",
                }}
              ></button>
            </form>
          </div>
          <div className="dropdown col-lg-2">
            <button
              className="btn btn-secondary dropdown-toggle shadow-none border-0 bg-transparent text-dark"
              type="button"
              id="dropdownMenuButton"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              حساب من
            </button>
            <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
              <a className="dropdown-item" href="#">
                پروفایل من
              </a>
              <a className="dropdown-item" href="#">
                دوره های من
              </a>
              <a className="dropdown-item" href="#">
                دوره های عضو شده
              </a>
            </div>
          </div>
        </nav>
      </div>
    );
  }
}
