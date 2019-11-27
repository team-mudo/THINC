import React, { Component } from "react";
import { connect } from "react-redux";

import { onpopup, enterProject, INPROJECT } from "../../../../actions";

import BlockDelete from "../../../../image/block_delete.png";
import BlockMember from "../../../../image/block_numberOfstudent.png";
import BlockTeacher from "../../../../image/block_teacher.png";

class Project extends Component {
  popup() {
    const { info, onpopup, user } = this.props;
    if (user.auth) {
      onpopup({ active: info.cid, kind: 3, name: info.classname });
    } else {
    }
  }
  enter() {
    const { onChangeClick, enterProject, user, info } = this.props;
    if (user.auth) {
      enterProject({ id: info.cid, name: info.classname });
    } else {
      enterProject({ id: info.team, name: info.teamname });
    }
    onChangeClick(INPROJECT);
  }
  render() {
    const { info, user } = this.props;
    return (
      <div className="project">
        <div className="project_in" onClick={this.enter.bind(this)}>
          <p>{user.auth ? info.classname : info.teamname}</p>
        </div>
        <div>
          <img src={BlockTeacher} alt="teacher" width="24" height="24" />
          <p>teacher's name</p>
          <img src={BlockMember} alt="member" width="24" height="24" />
          <p>3 teams</p>
          <img
            src={BlockDelete}
            alt="delete"
            width="24"
            height="24"
            onClick={this.popup.bind(this)}
          />
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    user: state.user
  };
}

export default connect(mapStateToProps, { onpopup, enterProject })(Project);
