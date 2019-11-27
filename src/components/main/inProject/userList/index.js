import React, { Component } from "react";
import { connect } from "react-redux";

import Members from "../../../../image/block_numberOfstudent.png";
import Delete from "../../../../image/block_delete.png";
import Userblock from "./userblock";

class UserList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      side: false
    };
  }
  componentDidMount() {
      
  }
  onChangeSide() {
    this.setState({ side: !this.state.side });
  }
  render() {
    const { side } = this.state;
    return (
      <div className="sideview">
        <div className="sidebutton">
          <div onClick={this.onChangeSide.bind(this)}>
            <img src={Members} alt="members" width="36" height="36" />
          </div>
          <div>
            <img src={Delete} alt="delete" width="36" height="36" />
          </div>
        </div>
        <div className={side ? "userlist" : "none"}>
          <Userblock />
          <Userblock />
          <Userblock />
          <Userblock />
          <Userblock />
          <Userblock />
          <Userblock />
          <Userblock />
          <div className="adduserblock add">
            <p>+ Add member</p>
          </div>
        </div>
      </div>
    );
  }
}

export default connect()(UserList);
