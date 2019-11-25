import React, { Component } from "react";
import { connect } from "react-redux";

import { onpopup } from "../../../../actions";

import BlockDelete from "../../../../image/block_delete.png";
import BlockMember from "../../../../image/block_numberOfstudent.png";
import BlockTeacher from "../../../../image/block_teacher.png";

class Project extends Component {
  popup() {
    const { info, onpopup } = this.props;
    onpopup({ active: info.cid, kind: 3 });
  }
  render() {
    const { info } = this.props;
    return (
      <div className="project">
        <p>{info.classname}</p>
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

export default connect(null, { onpopup })(Project);
