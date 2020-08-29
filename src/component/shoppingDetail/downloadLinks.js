import React, { Component } from "react";
import { API_SERVER_ADDRESS } from "../../env";

export class DownloadLinks extends Component {
  state = {};
  showDownloadLinks() {
    if (this.props.data.length) {
      return this.props.data.map((item, index) => (
        <tr key={index}>
          <th scope="row">
            <a
              href={API_SERVER_ADDRESS + item}
              target="_blank"
              rel="noopener noreferrer"
            >
              {" "}
              دانلود لینک قسمت {index + 1}
            </a>
          </th>
        </tr>
      ));
    } else {
      return (
        <tr style={{ paddingTop: 20, paddingRight: 10 }}>
          <td> ویدئویی آپلود نشده است.</td>
        </tr>
      );
    }
  }
  render() {
    return (
      <div className="card" style={{ marginTop: "25px", marginBottom: "0px" }}>
        <div className="card-content">
          <table className="table">
            <thead>
              <tr className="info">
                <th>لینک های دانلود</th>
              </tr>
            </thead>
            <tbody>{this.showDownloadLinks()}</tbody>
          </table>

          <div className="abs"></div>
        </div>
      </div>
    );
  }
}
