import React, { Component } from "react";
import { PeriodList } from "./periodList";
export class Period extends Component {
  data = this.props.data;

  render() {
    return (
      <div className="card">
        <div className="card-content">
          <ul className="course-accordion" id="course-schedule">
            <li className="accordion-option opened">
              <div className="option-title">برنامه کلاسی دوره</div>
              <div className="option-wrapper">
                <ul className="option-items">
                  <PeriodList data={this.data.product} />
                </ul>
                {/* <div
                  className="text-center show-more-schedule"
                  // onClick={ShowMoreSchedule(this)}
                >
                  مشاهده برنامه کامل <i className="zmdi zmdi-chevron-down"></i>
                </div> */}
              </div>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}
