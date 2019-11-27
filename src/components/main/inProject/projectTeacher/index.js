import React, { Component } from "react";
import { connect } from "react-redux";

import { getAllTeam } from "../../../../actions";
import TimerStop from "../../../../image/timer_stop.png";
import TeamList from "../teamList";
import Userspace from "../userspace";
import UserList from "../userList";

class ProjectTeacher extends Component {
  constructor(props) {
    super(props);
    this.state = {
      clicked: 0
    };
  }
  componentDidMount() {
    const { index, user, getAllTeam } = this.props;
    getAllTeam(user.token, index.id);
  }
  onClickChange(next) {
    this.setState({ clicked: next });
  }
  render() {
    const { name } = this.props.index;
    const { clicked } = this.state;
    return (
      <div className="projectteacher">
        <div className="workspace_header">
          <p>{name}</p>
          <div className="workspace_header_tool">
            <div>
              <img src={TimerStop} alt="timer stop" />
            </div>
            <h4>00:00</h4>
          </div>
        </div>
        <TeamList
          clicked={clicked}
          onClickChange={next => this.onClickChange(next)}
        />
        <div className="workspace_body">
          {clicked === 0 ? null : <UserList clicked={clicked} />}
          {clicked === 0 ? null : <Userspace clicked={clicked} />}
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    user: state.user,
    index: state.index
  };
}

export default connect(mapStateToProps, { getAllTeam })(ProjectTeacher);
