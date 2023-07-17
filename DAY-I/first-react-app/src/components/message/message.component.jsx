import React from "react";

class Message extends React.Component {
  render() {
    return (
      <div>
        <img src={this.props.imageUrl} alt="" height="100px" width="150px" />
        <h2>{this.props.msg}</h2>
        <p>From : {this.props.from}</p>
        <p>To : {this.props.to}</p>
      </div>
    );
  }
}

export default Message;
