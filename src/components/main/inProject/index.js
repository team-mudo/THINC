import React, { Component } from "react";

import ProjectTeacher from "./projectTeacher";
import ProjectStudent from "./projectStudent";

class InProject extends Component {
  render() {
    return (
      <div className="inproject">
        <ProjectTeacher />
        <ProjectStudent />
      </div>
    );
  }
}

export default InProject;
