import React, { Component } from "react";
import { Link } from "react-router-dom";
var _ = require("lodash");

export class PageCount extends Component {
  totalCount = this.props.data.products.totalCount;

  divCount = this.totalCount / 12;
  mathRound = Math.ceil(this.divCount);
  countArray = _.range(0, this.mathRound);
  render() {
    return (
      <div className="row text-center">
        <div className="col-xs-12">
          <nav aria-label="Page navigation example">
            <ul className="paginations justify-content-center">
              <li className="page-item prev ">
                <a
                  className="page-link"
                  tabIndex="-1"
                  href="/course/Index?page=2"
                >
                  <i className="zmdi zmdi-chevron-right"></i> قبلی{" "}
                </a>
              </li>
              {this.countArray.map((n, i) => (
                <li
                  className={
                    this.props.data.page === n + 1
                      ? "page-item active"
                      : "page-item"
                  }
                  key={i}
                >
                  {this.props.data.page === n + 1 ? (
                    n + 1
                  ) : (
                    <Link
                      className="page-link "
                      to={
                        "/courses/?page=" + (n + 1)
                        // +
                        // "&pagesize=" +
                        // this.props.data.count
                      }
                    >
                      {n + 1}
                    </Link>
                  )}
                </li>
              ))}
              <li className="page-item next ">
                <a className="page-link" href="/course/Index?page=4">
                  {" "}
                  بعدی <i className="zmdi zmdi-chevron-left"></i>
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    );
  }
}
