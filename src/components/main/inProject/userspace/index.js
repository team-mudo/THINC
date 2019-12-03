import React, { Component } from "react";

import { CHAT } from "../../../../actions";
import Projectempty from "../../../../image/project_empty.png";

class Userspace extends Component {
  componentDidMount() {
    console.log("success");
    const { socket } = this.props;

    socket.on(CHAT, data => {
      console.log(data);
    });
  }
  render() {
    // const { clicked } = this.props;
    return (
      <div className="userspace">
        <img src={Projectempty} alt="project empty" />
      </div>
    );
  }
}

export default Userspace;
