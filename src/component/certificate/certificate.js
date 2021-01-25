import React, { Component } from "react";

export class Certificate extends Component {
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
                        راهنمای دریافت گواهی داخلی{" "}
                      </h1>
                    </div>
                    <div class="panel-body">
                      <img
                        style={{ width: "100%" }}
                        src="/images/govahi/EDU-2.jpg"
                        alt=" راهنمای دریافت گواهی داخلی"
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
