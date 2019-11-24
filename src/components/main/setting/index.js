import React, { Component } from "react";

import { SETTING } from "../../../actions";

class Setting extends Component {
  render() {
    const { clicked } = this.props;
    return (
      <div className={clicked === SETTING ? "setting" : "setting none"}>
        setting
      </div>
    );
  }
}

export default Setting;
