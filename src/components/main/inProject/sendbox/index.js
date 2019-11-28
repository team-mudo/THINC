import React, { Component } from "react";
import { Field, reduxForm } from "redux-form";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";

import Upload from "../../../../image/file_upload.png";
import Draw from "../../../../image/draw.png";

class Sendbox extends Component {
  renderField(field) {
    return (
      <div className="sendbox_field">
        <input
          className="field_two"
          type={field.label}
          {...field.input}
          placeholder={field.meta.error}
        />
      </div>
    );
  }
  render() {
    const { size } = this.props;
    return (
      <div className={size ? "sendbox_nav" : "sendbox"}>
        <Field name="text" label="text" component={this.renderField} />
        <div className="sendbox_button">
          <div className="sendbox_button_one">
            <img src={Draw} alt="draw" width="36" height="36" />
          </div>
          <div className="sendbox_button_one">
            <img src={Upload} alt="upload" width="36" height="36" />
          </div>
          <div className="sendbox_button_two">
            <p>Send</p>
          </div>
        </div>
      </div>
    );
  }
}

function validate(values) {
  const errors = {};
  if (!values.text) {
    errors.text = "Share your idea!";
  }
  return errors;
}

function mapStateToProps(state) {
  return {
    size: state.size
  };
}

export default reduxForm({
  validate,
  form: "sendbox"
})(withRouter(connect(mapStateToProps)(Sendbox)));
