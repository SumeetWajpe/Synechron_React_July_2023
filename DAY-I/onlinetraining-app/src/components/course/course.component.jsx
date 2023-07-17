import React, { Component } from "react";
import Rating from "../rating/rating.component";

export default class Course extends Component {
  state = { currLikes: this.props.coursedetails.likes };
  incrementLikes() {
    // this.props.coursedetails.likes++; // props are readonly
    // this.state.currLikes++; // state is immutable
    this.setState({ currLikes: this.state.currLikes + 1 });
  }
  render() {
    console.log("Render(Course)");
    return (
      <div className="col-md-3 ">
        <div className="card m-2 shadow rounded-0">
          <img
            src={this.props.coursedetails.imageUrl}
            className="card-img-top rounded-0"
            alt={this.props.coursedetails.title}
            width="150px"
            height="150px"
          />
          <div className="card-body">
            <h5 className="card-title">{this.props.coursedetails.title}</h5>
            <div className="card-text">
              <Rating maxStars={this.props.coursedetails.rating} />
            </div>
            <p className="card-text">₹. {this.props.coursedetails.price}</p>

            <button
              className="btn btn-outline-primary"
              onClick={() => this.incrementLikes()}
            >
              {/* {this.props.coursedetails.likes}{" "} */}
              {this.state.currLikes}
              <i className="fa-solid fa-thumbs-up"></i>
            </button>
          </div>
        </div>
      </div>
    );
  }
}
