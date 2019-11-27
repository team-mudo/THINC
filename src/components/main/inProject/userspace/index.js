import React, { Component } from "react";

import Projectempty from "../../../../image/project_empty.png";

class Userspace extends Component {
  render() {
    return (
      <div className="userspace">
        <img src={Projectempty} alt="project empty" />
      </div>
    );
  }
}

export default Userspace;
