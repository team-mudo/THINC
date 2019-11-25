import React, { Component } from "react";
import { connect } from "react-redux";
import _ from "lodash";

import EMPTYPROJECT from "../../../../image/main_empty_project.png";
import { getMyClass } from "../../../../actions";
import Project from "../project";

class ProjectList extends Component {
  componentDidMount() {
    const { token } = this.props.user;
    this.props.getMyClass(token);
  }
  renderClass() {
    const { auth } = this.props.user;
    if (auth) {
      const datas = this.props.class;
      if (datas.length === 0) {
        return (
          <div>
            <img src={EMPTYPROJECT} alt="empty project" />
          </div>
        );
      } else {
        return _.map(datas, data => {
          return <Project key={data.cid} info={data} />;
        });
      }
    }
  }

  render() {
    return <div className="project_list">{this.renderClass()}</div>;
  }
}

function mapStateToProps(state) {
  return { user: state.user, class: state.class };
}

export default connect(mapStateToProps, { getMyClass })(ProjectList);
