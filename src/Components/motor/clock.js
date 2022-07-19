import React, { Component } from "react";

export default class clock extends Component {
  constructor() {
    super();
    this.state = { date: new Date() };
  }

  componentDidMount() {
    this.timerID = setInterval(() => this.tick(), 1000);
  }

  tick() {
    this.setState({
      date: new Date(),
    });
  }

  render() {
    return (
      <div className="clockCont">
        <h2 className="clock">{"Cartagena: "}</h2>
        <h2 className="clock">{this.state.date.toLocaleTimeString()}</h2>
      </div>
    );
  }
}
