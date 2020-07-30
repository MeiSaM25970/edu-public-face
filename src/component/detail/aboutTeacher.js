import React, { Component } from "react";

export class AboutTeacher extends Component {
  render() {
    const data = this.props.data;
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
    return (
      <div className="card ">
        <div className="card-content">
          <div className="pros">
            <h6 className="text-center">درباره مدرس</h6>
            <div className="teacher text-center" style={{ paddingBottom: 20 }}>
              <div className="imgcontainer" style={{ marginTop: 10 }}>
                <img src={data.product.image} alt={data.product.teacher_name} />
              </div>
              <a href={"/" + data.product.teacher_name + "/edu"}>
                {data.product.teacher_name}{" "}
              </a>
              <p>{data.product.teacher_description}</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
