import React, { Component } from "react";
import { Tariff } from "./tariff";
export class TariffList extends Component {
  state = {};
  render() {
    return this.props.data.map((item, index) => (
      <Tariff data={item} key={index} />
    ));
  }
}
