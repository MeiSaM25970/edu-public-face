import React, { Component, Fragment } from "react";
import {
  BodyNavbarITC,
  InvitedToCooperateForm,
} from "../component/invitedToCooperate";
export class InviteToCooperatePage extends Component {
  state = {};
  render() {
    return (
      <Fragment>
        <BodyNavbarITC />

        <InvitedToCooperateForm />
      </Fragment>
    );
  }
}
