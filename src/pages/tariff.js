import React, { Component } from "react";
import { BodyNavbarTariff } from "../component/tariff";
import { Loading } from "../component/Loading";
import { TariffList } from "../component/tariff/tariffList";
import TelUsForTariff from "../component/telUs/telusForTariff";
import * as userService from "../service";

export class TariffPage extends Component {
  state = {};
  fetchData() {
    userService.getPricing().then((res) => this.setState({ data: res.data }));
  }
  componentDidMount() {
    this.fetchData();
    this.scrollToY();
  }
  scrollToY = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  render() {
    return !this.state.data ? (
      <Loading />
    ) : (
      <div className="tariff-background">
        <BodyNavbarTariff />
        <div className="section-heading text-center tariff container">
          <h2>تعرفه های Learningpage.ir</h2>
          <div>
            <TariffList data={this.state.data} />
          </div>
        </div>
        <TelUsForTariff />
      </div>
    );
  }
}
