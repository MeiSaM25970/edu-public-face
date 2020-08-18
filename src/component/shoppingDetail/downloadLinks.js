import React, { Component } from "react";

export class DownloadLinks extends Component {
  state = {};
  render() {
    console.log(this.props.data.urls);
    return (
      <div className="card" style={{ marginTop: "25px", marginBottom: "0px" }}>
        <div className="card-content">
          <table className="table">
            <thead>
              <tr className="info">
                <th>لینک های دانلود</th>
              </tr>
            </thead>
            <tbody>
              {this.props.data.urls.map((item, index) => (
                <tr key={index}>
                  <th scope="row">
                    <a href={item.url} target="_blank">
                      {" "}
                      دانلود لینک قسمت {index + 1} {console.log(item.url)}
                    </a>
                  </th>
                </tr>
              ))}
            </tbody>
          </table>

          <div className="abs"></div>
        </div>
      </div>
    );
  }
}
