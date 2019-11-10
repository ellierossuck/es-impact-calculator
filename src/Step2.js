import React from "react";

// step 2 (child) component - this is for emails
class Step2 extends React.Component {
  render() {
    if (this.props.currentStep !== 2) {
      return null;
    }
    return (
      <React.Fragment>
        <div className="form-input">
          <h2 className="impact" htmlFor="emails">
            How many emails have you done today?
          </h2>
          <input
            className="input-box"
            id="emails"
            name="emails"
            type="number"
            min="0"
            step="1"
            placeholder="0"
            value={this.props.emails}
            // props is the number of emails inputted
            onChange={this.props.handleChange}
            // puts data into state
          />
        </div>
      </React.Fragment>
    );
  }
}

export default Step2;
