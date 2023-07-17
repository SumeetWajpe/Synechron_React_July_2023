import React, { Component } from "react";
import OutputMessage from "./Output";

export default class InputMessage extends Component {
  state = { inputValue: "" };
  render() {
    return (
      <div>
        Enter message here :{" "}
        <input
          type="text"
          onInput={e => this.setState({ inputValue: e.target.value })}
        />
        <OutputMessage msg={this.state.inputValue} />
      </div>
    );
  }
}
