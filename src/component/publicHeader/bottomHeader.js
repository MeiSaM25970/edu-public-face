import React, { Component } from "react";
import { Link } from "react-router-dom";
export class BottomHeader extends Component {
  state = {
    click: false,
  };
  defaultStyle = {
    style: {},
  };
  onClickClass = "collapse navbar-collapse in";
  class = "collapse navbar-collapse";
  click = () => {
    this.setState({ click: !this.state.click });
  };

  render() {
    return (
      <div
        className="botton-menu "
        onMouseLeave={() => this.setState({ click: false })}
        style={{ height: 47 }}
      >
        <div className="container">
          <div className="navigation">
            <button
              type="button"
              className="navbar-toggle collapsed"
              data-toggle="collapse"
              data-target="#myNavbar"
              aria-expanded="false"
              onClick={this.click.bind(this)}
            >
              {" "}
              <i className="zmdi zmdi-menu zmdi-hc-lg"></i>{" "}
            </button>
            <nav
              className={this.state.click ? this.onClickClass : this.class}
              id="myNavbar"
            >
              <ul>
                <li>
                  <Link to="/courses" onClick={this.click.bind(this)}>
                    دوره های آنلاین
                  </Link>
                </li>
                <li>
                  <Link to="/videos" onClick={this.click.bind(this)}>
                    فروشگاه سامانه{" "}
                  </Link>
                </li>
                <li>
                  <Link to="/coming-soon" onClick={this.click.bind(this)}>
                    آزمون های آنلاین
                  </Link>
                </li>
                <li>
                  <Link to="/teachers" onClick={this.click.bind(this)}>
                    مدرسان ما
                  </Link>
                </li>
                <li>
                  <Link to="/job-request" onClick={this.click.bind(this)}>
                    درخواست همکاری مدرس
                  </Link>
                </li>
                <li>
                  <Link to="/tariff" onClick={this.click.bind(this)}>
                    تعرفه ها
                  </Link>
                </li>
                <li>
                  <Link to="/aboutUs" onClick={this.click.bind(this)}>
                    درباره ما
                  </Link>
                </li>
              </ul>
            </nav>
            <div className="social-box" style={{ marginTop: "5px" }}>
              <ul className="social">
                <li>
                  <a
                    title="کانال تلگرام برگ دانش"
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://telegram.me/learningpage_ir"
                    style={{
                      backgroundImage: "url('/images/telegram.png')",
                      backgroundSize: "cover",
                    }}
                  ></a>
                </li>
                <li>
                  <a
                    title="صفحه اینستاگرام"
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://instagram.com/"
                    style={{
                      backgroundImage: "url('/images/instagram.png')",
                      backgroundSize: "cover",
                    }}
                  ></a>
                </li>
                <li>
                  <a
                    title="آپارات برگ دانش"
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://www.aparat.com/"
                    style={{
                      backgroundImage: "url('/images/aparat.png')",
                      backgroundSize: "cover",
                    }}
                  ></a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
