import React, { Component } from "react";
export class BottomHeader extends Component {
  state = { hover: true };
  defaultStyle = {
    style: {},
  };
  hoverStyle = { style: {} };
  hover = () => {
    this.setState({ hover: !this.state.hover });
  };
  render() {
    return (
      <div className="botton-menu">
        <div className="container">
          <div className="navigation">
            <button
              type="button"
              className="navbar-toggle collapsed"
              data-toggle="collapse"
              data-target="#myNavbar"
              aria-expanded="false"
            >
              {" "}
              <i className="zmdi zmdi-menu zmdi-hc-lg"></i>{" "}
            </button>
            <nav className="collapse navbar-collapse" id="myNavbar">
              <ul className="">
                <li>
                  <a href="/آنلاین-آموزان/دوره-های-آنلاین">دوره های آنلاین</a>
                </li>
                <li>
                  <a href="/آنلاین-آموزان/آزمون-های-آنلاین">آزمون های آنلاین</a>
                </li>
                <li>
                  <a href="/آنلاین-آموزان/اخبار-آنلاین-آموزان">
                    مقالات آنلاین آموزان
                  </a>
                </li>
                <li>
                  <a href="/آنلاین-آموزان/پیشنهاد-های-ویژه">پیشنهادهای ویژه</a>
                </li>
                <li>
                  <a href="/آنلاین-آموزان/پلن-های-فروش">تعرفه ها</a>
                </li>
                <li>
                  <a href="/آنلاین-آموزان/آموزشگاه-ها">آموزشگاه های ما</a>
                </li>
                <li>
                  <a href="/آنلاین-آموزان/مدرسان">مدرسان ما</a>
                </li>
                <li>
                  <a href="/آنلاین-آموزان/درباره-ما">درباره ما</a>
                </li>
              </ul>
            </nav>
            <div className="social-box">
              <ul className="social">
                <li>
                  <a
                    title="کانال تلگرام آنلاین آموزان"
                    target="_blank"
                    href="https://telegram.me/"
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
                    href="https://instagram.com/"
                    style={{
                      backgroundImage: "url('/images/instagram.png')",
                      backgroundSize: "cover",
                    }}
                  ></a>
                </li>
                <li>
                  <a
                    title="آپارات آنلاین آموزان"
                    target="_blank"
                    href="https://www.aparat.com/"
                    style={{
                      backgroundImage: "url('/images/aparat.webp')",
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
