import React, { Component } from "react";

export default class Rating extends Component {
  render() {
    let ratings = [];
    for (let index = 0; index < this.props.maxStars; index++) {
      ratings.push(
        <i className="fa-solid fa-star" style={{ color: "orange" }}></i>,
      );
    }
    return <div>{ratings}</div>;
  }
}
