import React, { Component } from "react";
import { connect } from "react-redux";

import Userspace from "../userspace";
import Sendbox from "../sendbox";
import SideTool from "../sideTool";

class ProjectStudent extends Component {
  render() {
    const { name, id } = this.props.index;
    return (
      <div className="projectstudent">
        <div className="workspace_header student_work_header">
          <p>{name}</p>
        </div>
        <div className="workspace_body">
          <Userspace clicked={id} />
          <SideTool clicked={id} />
        </div>
        <Sendbox />
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

export default connect(mapStateToProps)(ProjectStudent);
