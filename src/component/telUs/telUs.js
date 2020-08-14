import React, { Component } from "react";

export class TelUs extends Component {
  scrollTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  componentDidMount() {
    this.scrollTop();
  }
  render() {
    return (
      <div className="container">
        <div className="card">
          <div
            className="card-header card-header-icon"
            data-background-color="rose"
          >
            <i className="zmdi zmdi-phone zmdi-hc-2x"></i>
          </div>
          <div className="card-content">
            <h4 className="card-title">با ما در تماس باشید.</h4>
            <form onsubmit="" className="contact row">
              <input name="lname&fname" type="hidden" value="" />
              <div className="col-md-12">
                <div className="form-group col-md-3">
                  <label className="control-label req">
                    نام و نام خانوادگی
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    name="FullName"
                    id="FullName"
                    value=""
                  />
                  <span className="text-danger"></span>
                  <span className="material-input"></span>
                </div>
                <div className="form-group col-md-3 is-empty">
                  <label className="control-label req">پست الکترونیکی</label>
                  <input
                    type="text"
                    className="form-control"
                    id="Email"
                    name="Email"
                  />
                  <span className="text-danger"></span>
                  <span className="material-input"></span>
                </div>
                <div className="form-group col-md-3">
                  <label className="control-label">تلفن</label>
                  <input
                    type="text"
                    className="form-control"
                    name="Tel"
                    id="Tel"
                    value=""
                  />
                  <span className="material-input"></span>
                </div>
                <div className="form-group col-md-3 is-empty">
                  <label className="control-label">موضوع پیام</label>
                  <input
                    type="text"
                    className="form-control"
                    name="Title"
                    id="Title"
                  />
                  <span className="material-input"></span>
                </div>
              </div>
              <div className="col-md-12">
                <div className="form-group col-md-12 is-empty">
                  <label className="control-label req">متن پیام شما</label>
                  <textarea
                    className="form-control"
                    name="Text"
                    id="Text"
                  ></textarea>
                  <span className="text-danger"></span>
                  <span className="material-input"></span>
                </div>
              </div>
              {/* <div className="col-xs-12 captcha col-xs-12">
                <div className="col-xs-12 marg">
                  <div
                    className="g-recaptcha"
                    id="captcha"
                    dataSiteKey="6LfktzwUAAAAAFevix09c7t9UiQOMF1LaArRYHsH"
                  >
                    <div style={{ width: 304, height: 78 }}>
                      <div>
                        <iframe
                          src="https://www.google.com/recaptcha/api2/anchor?ar=1&amp;k=6LfktzwUAAAAAFevix09c7t9UiQOMF1LaArRYHsH&amp;co=aHR0cDovL29ubGluZWFtb296YW4uaXI6ODA.&amp;hl=fa&amp;v=r8WWNwsCvXtk22_oRSVCCZx9&amp;size=normal&amp;cb=rg0j3qe0kanw"
                          width="304"
                          height="78"
                          role="presentation"
                          name="a-sg77hyhf00tl"
                          frameborder="0"
                          scrolling="no"
                          sandbox="allow-forms allow-popups allow-same-origin allow-scripts allow-top-navigation allow-modals allow-popups-to-escape-sandbox"
                        ></iframe>
                      </div>
                      <textarea
                        id="g-recaptcha-response"
                        name="g-recaptcha-response"
                        className="g-recaptcha-response"
                        style={{
                          width: 250,
                          height: 40,
                          border: "1px solid rgb(193, 193, 193)",
                          margin: "10px 25px",
                          padding: 0,
                          resize: "none",
                          display: "none",
                        }}
                      ></textarea>
                    </div>
                    <iframe
                      __idm_frm__="22"
                      style={{ display: "none" }}
                    ></iframe>
                  </div>
                  <span className="text-danger"></span>
                </div>
              </div>
               */}
              <div className="col-md-12 text-center">
                <button type="submit" className="btn btn-fill btn-success">
                  ارسال پیام
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}
