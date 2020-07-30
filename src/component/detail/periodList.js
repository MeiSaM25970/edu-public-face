import React from "react";
import moment from "moment-jalaali";

export function PeriodList(props) {
  const startTime = props.data.startTime;
  return props.data.schedules.map((item, index) => (
    <li className="option-item" key={index}>
      <a>
        در تاریخ{moment(item.date, "jYYYY/jM/jD").format("jYYYY/jM/jD")} / شروع
        کلاس ساعت {startTime} تا ????
      </a>
      <div className="pull-left">
        {" "}
        <span className="duration">مدت کلاس : {item.time} ساعت</span>
        <a href="#"></a>{" "}
      </div>
    </li>
  ));
}
