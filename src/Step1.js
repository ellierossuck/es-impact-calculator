import React from "react";

// step 1 (child) component - this is for the ES input (trigger handleChange() function to set value in the state of parent, <MasterForm/>)
class Step1 extends React.Component {
  render() {
    if (this.props.currentStep !== 1) {
      return null;
    }
    return (
      <React.Fragment>
        <div className="form-input">
          <h2 className="impact" htmlFor="calls">
            How many calls have you taken today?
          </h2>
          <input
            className="input-box"
            id="calls"
            name="calls"
            type="number"
            min="0"
            step="1"
            placeholder="0"
            value={this.props.calls}
            // props is the number of calls inputted
            onChange={this.props.handleChange}
            // puts data into state
          />
        </div>
      </React.Fragment>
    );
  }
}

export default Step1;
