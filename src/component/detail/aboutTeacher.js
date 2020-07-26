import React, { Component } from "react";
import * as userService from "../../service";

export class AboutTeacher extends Component {
  state = {};
  componentDidMount() {
    const id = this.props.props.match.params._id;
    userService.getProductById(id).then(({ data }) => this.setState({ data }));
  }
  render() {
    const data = this.state.data;
    if (!data) {
      return (
        <div
          className="text-primary spinner-border mx-auto mt-5 d-block "
          role="status"
        >
          <span className="sr-only">بارگیری...</span>
        </div>
      );
    }
    return this.state.data.products.map((item, index) => (
      <div className="card " key={index}>
        <div className="card-content">
          <div className="pros">
            <h6 className="text-center">درباره مدرس</h6>
            <div className="teacher text-center" style={{ paddingBottom: 20 }}>
              <div className="imgcontainer" style={{ marginTop: 10 }}>
                <img src={item.image} alt={item.teacher_name} />
              </div>
              <a href={"/" + item.teacher_name + "/edu"}>
                {item.teacher_name}{" "}
              </a>
              <p>{item.teacher_description}</p>
            </div>
          </div>
        </div>
      </div>
    ));
  }
}
