import React, { Component } from "react";

export default class OutputMessage extends Component {
  render() {
    console.log("Render");
    return <strong>{this.props.msg}</strong>;
  }
}
