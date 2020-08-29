import React, { Component } from "react";
import { API_SERVER_ADDRESS } from "../../env";

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
                <img
                  src={
                    API_SERVER_ADDRESS + data.teacherImageAddress ||
                    API_SERVER_ADDRESS + "/images/imageNotFound.svg"
                  }
                  alt={API_SERVER_ADDRESS + data.teacherLastName}
                />
              </div>

              <div>{data.teacherFirstName + " " + data.teacherLastName} </div>
              <p>{data.teacherDescription}</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
