import React, { Component } from "react";
import { connect } from "react-redux";

class Sendbox extends Component {
  render() {
    const { size } = this.props;
    return <div className={size ? "sendbox_nav" : "sendbox"}></div>;
  }
}

function mapStateToProps(state) {
  return {
    size: state.size
  };
}

export default connect(mapStateToProps)(Sendbox);
