import React from "react";

class Message extends React.Component {
  render() {
    return (
      <div className="col-md-2">
        <img
          src={this.props.messageDetails.imageUrl}
          alt=""
          height="100px"
          width="150px"
        />
        <h2>{this.props.messageDetails.msg}</h2>
        <p>From : {this.props.messageDetails.from}</p>
        <p>To : {this.props.messageDetails.to}</p>
      </div>
    );
  }
}

export default Message;
