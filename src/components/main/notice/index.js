import React, { Component } from "react";

import { NOTICE } from "../../../actions";

class Notice extends Component {
  render() {
    const { clicked } = this.props;
    return (
      <div className={clicked === NOTICE ? "notice" : "notice none"}>
        notice
      </div>
    );
  }
}

export default Notice;
