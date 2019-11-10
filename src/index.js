import React, { Component } from "react";
import ReactDOM from "react-dom";
import "./index.css";
import * as serviceWorker from "./serviceWorker";
import PropTypes from "prop-types";
import Step1 from "./Step1.js";
import Step2 from "./Step2.js";
import Step3 from "./Step3.js";
import header from "./header.jpg";
import getRandomInt from "./getRandomInt";

// MasterForm is the parent component (sends data and functions to children by props, and receives inputs from children by states)
class MasterForm extends Component {
  constructor(props) {
    // set initial input values, with default step as step 1 and random first type
    const type = getRandomInt(4);
    super(props);
    this.state = {
      currentStep: 1,
      calls: "",
      emails: "",
      type: type
    };
    // bind the submission to handleChange()
    this.handleChange = this.handleChange.bind(this);
    // bind functions for next, previous and back to start
    this._next = this._next.bind(this);
    this._prev = this._prev.bind(this);
    this._toStart = this._toStart.bind(this);
  }

  // use the submitted data to set the state
  handleChange(event) {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  }

  _next() {
    let currentStep = this.state.currentStep;
    // if current step is 1 or 2, add 1 on "next" button click
    currentStep = currentStep >= 2 ? 3 : currentStep + 1;
    this.setState({
      currentStep: currentStep
    });
  }
  _prev() {
    let currentStep = this.state.currentStep;
    // if current step is 2, subtract 1 on "prev" button click
    currentStep = currentStep <= 1 ? 1 : currentStep - 1;
    this.setState({
      currentStep: currentStep
    });
  }
  _toStart() {
    let currentStep = this.state.currentStep;
    // if current step is 3, set current step to 1 on "toStart" button click
    if (currentStep === 3) {
      const type = getRandomInt(4);
      this.setState({ currentStep: 1, type: type });
    }
  }

  // button function
  get button() {
    let currentStep = this.state.currentStep;
    if (currentStep === 1) {
      return (
        <div className="button">
          <button className="button" type="button" onClick={this._next}>
            Next
          </button>
        </div>
      );
    }
    if (currentStep === 2) {
      return (
        <div className="button-box">
          <div className="button-previous">
            <button
              className="button-previous"
              type="button"
              onClick={this._prev}
            >
              Previous
            </button>
          </div>
          <div className="button-impact">
            <button
              className="button-impact"
              type="button"
              onClick={this._next}
            >
              See my impact
            </button>
          </div>
        </div>
      );
    }
    if (currentStep === 3) {
      return (
        <div className="button">
          <button className="button" type="button" onClick={this._toStart}>
            Start again
          </button>
        </div>
      );
    }
    return null;
  }

  // render UI here
  render() {
    return (
      <React.Fragment>
        <div className="header">
          <img className="logo" src={header} alt="Bulb logo" />
        </div>
        <form className="form" onSubmit={this.handleSubmit}>
          {/* Render the form steps and pass in the required props */}
          <div className="step">
            <Step1
              currentStep={this.state.currentStep}
              handleChange={this.handleChange}
              calls={this.state.calls}
            />
            <Step2
              currentStep={this.state.currentStep}
              handleChange={this.handleChange}
              emails={this.state.emails}
            />
            <Step3
              currentStep={this.state.currentStep}
              handleChange={this.handleChange}
              calls={this.state.calls}
              emails={this.state.emails}
              type={this.state.type}
            />
          </div>
          <div className="button-container">{this.button}</div>
        </form>
      </React.Fragment>
    );
  }
}

MasterForm.propTypes = {
  currentStep: PropTypes.number,
  calls: PropTypes.number,
  emails: PropTypes.number,
  type: PropTypes.number
};

ReactDOM.render(<MasterForm />, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

// Next steps:
// 1. Tests
// 2. Accessibility
// 3. Not allow very high or negative inputs
