import React, { Component } from "react";
import { getHelp } from "../../service";
import { Loading } from "../Loading";
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
    getHelp().then((res) => this.setState({ text: res.data, loading: false }));
  }
  render() {
    return this.state.loading ? (
      <Loading />
    ) : (
      <div className="container">
        <div
          dir="RTL"
          style={{ textAlign: "justify", marginTop: 10 }}
          dangerouslySetInnerHTML={{ __html: this.state.text }}
        ></div>
      </div>
    );
  }
}
