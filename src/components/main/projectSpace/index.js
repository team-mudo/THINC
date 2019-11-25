import React, { Component } from "react";
import { connect } from "react-redux";

import ProjectList from "./projectList";
import { TEACHER, onpopup, ON_BUILD_PROJECT } from "../../../actions";
import HOWTOUSE from "../../../image/main_howtouse.png";

class ProjectSpace extends Component {
  popup() {
    const { onpopup } = this.props;
    onpopup(ON_BUILD_PROJECT);
  }
  render() {
    const { user } = this.props;
    return (
      <div className="projectspace">
        <div className="workspace_header">
          <p>Project space</p>
          <div className="workspace_header_tool">
            <img src={HOWTOUSE} alt="howtouse" width="48" height="48" />
            <p>How to use?</p>
          </div>
        </div>
        <div className="worspace_body">
          <ProjectList />
        </div>
        {user.auth === TEACHER ? (
          <div className="build_team_button" onClick={this.popup.bind(this)}>
            <p>+</p>
          </div>
        ) : null}
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    user: state.user
  };
}

export default connect(mapStateToProps, { onpopup })(ProjectSpace);
