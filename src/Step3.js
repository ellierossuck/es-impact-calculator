import React from "react";
import trees from "./trees.jpg";
import cars from "./cars.jpg";
import beluga from "./beluga.jpg";
import vegan from "./vegan.jpg";

class Step3 extends React.Component {
  render() {
    console.log(this.props.type);
    if (this.props.currentStep !== 3) {
      return null;
    }
    const result = impact(this.props.calls, this.props.emails, this.props.type);
    if (this.props.type === 0) {
      return (
        <React.Fragment>
          <h2 className="impact">
            That's the equivalent carbon saving of planting {result} trees.
            Legend.
          </h2>
          <img className="image" src={trees} alt="Trees" height="300px" />
          {this.backToStart}
        </React.Fragment>
      );
    } else if (this.props.type === 1) {
      return (
        <React.Fragment>
          <h2 className="impact">
            That's the equivalent carbon saving of taking {result} cars off the
            road for a year. Nice.
          </h2>
          <img className="image" src={cars} alt="Cars" height="300px" />
          {this.backToStart}
        </React.Fragment>
      );
    } else if (this.props.type === 2) {
      return (
        <React.Fragment>
          <h2 className="impact">
            That carbon saving is the same weight as {result} Beluga whales.
            Wow.
          </h2>
          <img
            className="image"
            src={beluga}
            alt="Beluga whale"
            height="300px"
          />
          {this.backToStart}
        </React.Fragment>
      );
    } else if (this.props.type === 3) {
      return (
        <React.Fragment>
          <h2 className="impact">
            That's the same carbon saving as convincing {result} people to go
            vegan for a year. As if!
          </h2>
          <img className="image" src={vegan} alt="Carrots" height="300px" />
          {this.backToStart}
        </React.Fragment>
      );
    }
  }
}

//impact calculator
function impact(calls, emails, type) {
  var intCalls = Math.floor(calls);
  var intEmails = Math.floor(emails);
  const members = intCalls + intEmails;
  if (type === 0) {
    const trees = members * 760;
    return trees.toFixed(2).replace(/\.?0+$/, "");
  }
  if (type === 1) {
    const cars = members * 7.4;
    return cars.toFixed(2).replace(/\.?0+$/, "");
  }
  if (type === 2) {
    const whales = members * 0.97;
    return whales.toFixed(2).replace(/\.?0+$/, "");
  } else {
    const vegans = members * 0.46;
    return vegans.toFixed(2).replace(/\.?0+$/, "");
  }
}

export default Step3;
