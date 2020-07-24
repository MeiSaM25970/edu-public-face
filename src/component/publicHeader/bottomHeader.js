import React, { Component } from "react";
import { AnimationWrapper } from "react-hover-animation";
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
      <div dir="rtl">
        <nav
          className="navbar navbar-expand-lg navbar-light bg-none row"
          style={{ boxShadow: "0 3px 4px 0 rgba(0,0,0,.14)" }}
        >
          <div className="collapse navbar-collapse col-lg-10" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item ">
                <AnimationWrapper
                  style={{
                    textAlign: "center",
                    borderRadius: "5px",
                    padding: "5px",
                    backgroundColor: "lightblue",
                  }}
                  config={{
                    color: {
                      initial: "black",
                      onHover: "red",
                    },
                  }}
                  animationConfig="gentle"
                >
                  <a
                    // style={
                    //   this.state.hover
                    //     ? this.defaultStyle.style
                    //     : this.hoverStyle.style
                    // }
                    onMouseEnter={this.hover.bind(this)}
                    onMouseLeave={this.hover.bind(this)}
                    className="nav-link "
                    href="#"
                  >
                    Home <span className="sr-only">(current)</span>
                  </a>
                </AnimationWrapper>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Features
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Pricing
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link disabled" href="#">
                  Disabled
                </a>
              </li>
            </ul>
          </div>
          <div className="col-lg-2"></div>
        </nav>
      </div>
    );
  }
}
