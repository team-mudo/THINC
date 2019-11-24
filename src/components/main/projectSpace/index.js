import React, { Component } from "react";

import { PROJECTSPACE } from "../../../actions";

class ProjectSpace extends Component {
  render() {
    const { clicked } = this.props;
    return (
      <div
        className={
          clicked === PROJECTSPACE ? "projectspace" : "projectspace none"
        }
      >
        projectspace
      </div>
    );
  }
}

export default ProjectSpace;
