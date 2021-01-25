import React, { Component } from "react";
class TelUsForTariff extends Component {
  state = {};
  render() {
    return (
      <div className="container">
        <div id="contact" className="row">
          <div className="col-12 container">
            <div className="section-heading text-center">
              <h2 style={{ color: "#000", fontSize: 18, marginTop: 50 }}>
                تماس با ما
              </h2>
              <p
                style={{ color: "#000", marginBottom: 100, lineHeight: "40px" }}
                className="fadeInUp"
                data-wow-delay="0.4s"
              >
                جهت دریافت مشاوره و برقررای ارتباط با ما با شماره تلفن
                09116805530- 01133363656 تماس حاصل فرمایید.
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default TelUsForTariff;
