import React, { Component } from "react";
import { getPolicies } from "../service";
import { Loading } from "../component/Loading";

export class PoliciesPage extends Component {
  state = { text: "", loading: true };
  scrollTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  componentDidMount() {
    this.scrollTop();
    getPolicies().then((res) =>
      this.setState({ text: res.data, loading: false })
    );
  }
  render() {
    return this.loading ? (
      <Loading />
    ) : (
      <div className="container">
        <h1 class="page-title" style={{ marginTop: 10 }}>
          قوانین و مقررات
        </h1>
        <p
          dir="RTL"
          style={{ textAlign: "center", marginTop: 20, lineHeight: 3 }}
        >
          <span style={{ fontSize: "14.0pt" }}>
            <span style={{ fontFamily: "iransans-bold" }}>
              قوانین سایت برگ دانش
            </span>
          </span>
        </p>
        <div
          dir="RTL"
          style={{ textAlign: "justify" }}
          dangerouslySetInnerHTML={{ __html: this.state.text }}
        ></div>
      </div>
    );
  }
}
