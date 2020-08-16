import React, { Component, Fragment } from "react";
import { BodyNavbarTariff } from "../component/tariff";
import { Loading } from "../component/Loading";
import { TariffList } from "../component/tariff/tariffList";
import TelUsForTariff from "../component/telUs/telusForTariff";
const data = [
  {
    title: "سرویس وبینار",
    price: "15 هزار تومان",
    subtitle: "به ازای یک ساعت",
    description: `100 کاربره

سیستم جامع مدیریت آموزشی

اطلاع رسانی سراسری

شبانه نیم بها(22الی 7 صبح)`,
    offer: "قابل ارائه در اسکای روم",
  },
  {
    title: "تجاری",
    price: "89 هزار تومان",
    subtitle: "یک دوره یک ماهه",
    description: `100 کاربره

    سیستم جامع مدیریت آموزشی
    
    اطلاع رسانی سراسری
    
    حداکثر 50 ساعت`,
    offer: "قابل ارائه در اسکای روم",
  },
  {
    title: "نفر ساعت",
    price: "1500 تومان",
    subtitle: "به ازای هر یک نفر در ساعت",
    description: `سیستم جامع مدیریت آموزشی

    اطلاع رسانی سراسری`,
    offer: "قابل ارائه در اسکای روم",
  },
];
export class TariffPage extends Component {
  render() {
    return !data ? (
      <Loading />
    ) : (
      <Fragment>
        <BodyNavbarTariff />
        <div
          className="section-heading text-center tariff container"
          style={{ marginTop: 20, minHeight: 500 }}
        >
          <h2>تعرفه های Learningpage.ir</h2>
          <div style={{ marginTop: 50 }}>
            <TariffList data={data} />
          </div>
        </div>
        <TelUsForTariff />
      </Fragment>
    );
  }
}
