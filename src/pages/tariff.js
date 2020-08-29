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
  }
  render() {
    return !this.state.data ? (
      <Loading />
    ) : (
      <div className="tariff-background" style={{ marginTop: 100 }}>
        <BodyNavbarTariff />
        <div
          className="section-heading text-center tariff container"
          style={{ marginTop: 20, minHeight: 500 }}
        >
          <h2>تعرفه های Learningpage.ir</h2>
          <div style={{ marginTop: 50 }}>
            <TariffList data={this.state.data} />
          </div>
        </div>
        <TelUsForTariff />
      </div>
    );
  }
}
