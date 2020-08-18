import React, { Component } from "react";
import { Link } from "react-router-dom";

export class Footer extends Component {
  render() {
    return (
      <footer>
        <div className="container">
          <div className="row">
            <div className="col-md-4 col-sm-12 col-xs-12 footer-logo">
              <h1 className="logo float-none footer-logo">
                <a
                  href="http://skstp.ir/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <div
                    className="no-text-decoration-white col-xs-6 onlineamoozan-footer-logo"
                    style={{ marginTop: "50px", width: 150, height: 145 }}
                  >
                    <img src="/images/footerLogo.jpeg" alt="learning-page" />
                  </div>
                </a>
                <Link to="/">
                  <div
                    className="no-text-decoration-white col-xs-6 onlineamoozan-footer-logo"
                    style={{ marginTop: "50px", width: 150, height: 145 }}
                  >
                    <img
                      className="footer-logo"
                      src="/images/menu-logo.jpg"
                      alt="learning-page"
                    />
                  </div>
                </Link>
              </h1>
              <ul className="contactinfo">
                <li className="address">
                  <strong>آدرس: </strong>
                  خراسان جنوبی – مرکز رشد واحدهای فناور
                </li>
                <li className="phone">
                  <span>
                    تلفن پشتیبانی : 09335456570 <br /> اس ام اس پنل :
                    100009335456570
                  </span>
                </li>
                {/* <li className="phone">
                  <strong>پشتیبانی درگاه پرداخت اینترنتی: </strong>
                  <span className="ltr">021-43570</span>
                </li>
                <li className="email">
                  <strong>پست الکترونیکی: </strong> info@onlineamooz.ir
                </li> */}
              </ul>
              <ul className="social">
                <li>
                  <a
                    title="کانال تلگرام"
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://telegram.me/"
                    style={{
                      backgroundImage: 'url("/images/telegram.png")',
                      backgroundSize: "cover",
                    }}
                  ></a>
                </li>
                <li>
                  <a
                    title="اینستاگرام"
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://instagram.com/"
                    style={{
                      backgroundImage: 'url("/images/instagram.png")',
                      backgroundSize: "cover",
                    }}
                  ></a>
                </li>
                <li>
                  <a
                    title="آپارات"
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://www.aparat.com/"
                    style={{
                      backgroundImage: 'url("/images/aparat.png")',
                      backgroundSize: "cover",
                    }}
                  ></a>
                </li>
              </ul>
            </div>
            <div className="col-md-2 col-sm-6 col-xs-12 float-right">
              <h6>راهنمای سایت</h6>
              <ul className="information">
                <li>
                  <Link to="/loginhelp">
                    <div>راهنمای ورود به کلاس برای متقاضی</div>
                  </Link>
                </li>
                <li>
                  <Link to="/policies">
                    <div>قوانین و مقررات</div>
                  </Link>
                </li>
              </ul>
            </div>
            <div className="col-md-2 col-sm-6 col-xs-12 float-right">
              <h6>دسترسی سریع</h6>
              <ul className="information">
                <li>
                  <Link to="/courses">دوره های آنلاین</Link>
                </li>
                <li>
                  <Link to="/videos">فروشگاه سامانه</Link>
                </li>
                <li>
                  <Link to="/coming-soon">آزمون های آنلاین</Link>
                </li>
                <li>
                  <Link to="/teachers">مدرسان ما</Link>
                </li>
                <li>
                  <Link to="/coming-soon">درخواست همکاری مدرس</Link>
                </li>
                <li>
                  <Link to="/tariff">تعرفه ها</Link>
                </li>
                <li>
                  <Link to="/aboutUs">درباره ما</Link>
                </li>
              </ul>
            </div>
            <div className="col-md-4 col-sm-6 col-xs-12 float-right text-center">
              <h6>نماد اعتماد پرداخت الکترونیکی</h6>
              <div className="enamad">
                <img
                  src="/images/e.png"
                  alt="نماد الکترونیکی سایت برگ دانش"
                  //   onclick={{windowOpen("https://trustseal.enamad.ir/Verify.aspx?id=118698&amp;p=vORmIO0dlasFALFD", "Popup","toolbar=no, location=no, statusbar=no, menubar=no, scrollbars=1, resizable=0, width=580, height=600, top=30")}}
                  style={{ cursor: "pointer", marginLeft: 10 }}
                  id="vORmIO0dlasFALFD"
                />
                <img
                  id="jxlzfukzesgtoeukfukzjxlz"
                  style={{ cursor: "pointer" }}
                  //   onclick='window.open("https://logo.samandehi.ir/Verify.aspx?id=160861&amp;p=rfthgvkaobpdmcsigvkarfth", "Popup","toolbar=no, scrollbars=no, location=no, statusbar=no, menubar=no, resizable=0, width=450, height=630, top=30")'
                  alt="logo-samandehi"
                  src="/images/e.png"
                />
              </div>
            </div>
          </div>
          <div className="row botbar">
            <div className="col-sm-7 float-right"></div>
            <div className="col-sm-5 float-right copyright text-left">
              <a
                href="http://tad-group.ir"
                target="_blank"
                rel="noopener noreferrer"
              >
                {" طراحی وب سایت"}{" "}
              </a>
              {" توسط گروه"}{" "}
              <a
                href="http://tad-group.ir"
                target="_blank"
                rel="noopener noreferrer"
              >
                {"تاد  "}{" "}
              </a>
            </div>
          </div>
        </div>
      </footer>
    );
  }
}
