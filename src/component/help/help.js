import React, { Component } from "react";

export class LoginHelp extends Component {
  state = { text: "", loading: true };
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
      <div class="extra-page row" style={{ marginTop: 140 }}>
        <div class="container">
          <div class="content">
            <div class="container">
              <div class="newstyle">
                <div class="row bg-w">
                  <div class="panel panel-success">
                    <div class="panel-heading">
                      <h1 class="panel-title text-center">
                        {" "}
                        راهنمای ورود به کلاس (کاربران){" "}
                      </h1>
                    </div>
                    <div class="panel-body">
                      &lt;
                      <img
                        style={{ width: "100%" }}
                        src="/images/studentHelp.jpg"
                        alt=" راهنمای ورود به کلاس (کاربران)"
                      />
                    </div>
                  </div>
                  <div class="panel panel-success">
                    <div class="panel-heading">
                      <h1 class="panel-title text-center">
                        {" "}
                        راهنمای شروع کلاس (اساتید){" "}
                      </h1>
                    </div>
                    <div class="panel-body">
                      &lt;
                      <img
                        style={{ width: "100%" }}
                        src="/images/teachersHelp.jpg"
                        alt=" راهنمای شروع کلاس (اساتید)"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
