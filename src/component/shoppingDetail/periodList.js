import React from "react";
import moment from "moment-jalaali";

export function PeriodList(props) {
  if (props.data.schedules) {
    return props.data.schedules.map((item, index) => {
      return (
        <li className="option-item" key={index}>
          <span style={{ fontSize: "12px" }}>
            {"تاریخ  "}
            {moment(item.date, "YYYY/MM/DD").format("jYYYY/jM/jD")} - شروع کلاس
            ساعت {moment(item.time, "LT").format("HH:mm")}
          </span>
          <div className="pull-left">
            {" "}
            <span className="duration">
              مدت کلاس : {item.period * 60} دقیقه
            </span>
          </div>
        </li>
      );
    });
  } else alert("schedules not found");
}
