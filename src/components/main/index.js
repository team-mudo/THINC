import React, { Component } from "react";
import { connect } from "react-redux";
import { withCookies } from "react-cookie";

import Navigation from "./navigation";
import ProjectSpace from "./projectSpace";
import Notice from "./notice";
import Setting from "./setting";
import Popup from "./popup";

class Main extends Component {
  constructor(props) {
    super(props);
    const { cookies } = this.props;

    this.state = {
      clicked: 0
    };

    const { token } = this.props.user;
    if (!token) {
      this.props.history.push("/register");
    } else {
      cookies.set("token", token, { path: "/" });
    }
  }
  shouldComponentUpdate(nextProps, nextState) {
    const token = nextProps.user.token;
    if (!token) {
      this.props.history.push("/landing");
      return false;
    } else {
      return true;
    }
  }
  onChangeClick = next => {
    this.setState({ clicked: next });
  };
  render() {
    return (
      <div className="main">
        <Navigation onChangeClick={next => this.onChangeClick(next)} />
        <ProjectSpace clicked={this.state.clicked} />
        <Notice clicked={this.state.clicked} />
        <Setting clicked={this.state.clicked} />
        <Popup />
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    user: state.user
  };
}

export default withCookies(connect(mapStateToProps)(Main));
