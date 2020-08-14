import React, { Component } from "react";
class Shopping extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
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
      <div style={{ height: 300 }}>
        <h1 className="text-center" style={{ marginTop: "10%" }}>
          بزودی...
        </h1>
      </div>
    );
  }
}

export default Shopping;
