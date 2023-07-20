import React from "react";
import Rating from "../rating/rating.component";
import { useDispatch } from "react-redux";
// import { Link } from "react-router-dom";
import {
  deleteCourse,
  incrementLikes,
} from "../../redux/reducers/courses.reducer";
import { Link } from "react-router-dom";

export default function Course(props) {
  let dispatch = useDispatch();
  return (
    <div className="col-md-3 ">
      <div className="card m-2 shadow rounded-0">
        <Link to={"/coursedetails/" + props.coursedetails.id}>
        <img
          src={props.coursedetails.imageUrl}
          className="card-img-top rounded-0"
          alt={props.coursedetails.title}
          width="150px"
          height="150px"
        />
        </Link>

        <div className="card-body">
          <h5 className="card-title">{props.coursedetails.title}</h5>
          <div className="card-text">
            <Rating maxStars={props.coursedetails.rating} />
          </div>
          <p className="card-text">₹. {props.coursedetails.price}</p>

          <button
            className="btn btn-outline-primary"
            onClick={() => dispatch(incrementLikes(props.coursedetails.id))}
          >
            {props.coursedetails.likes}{" "}
            <i className="fa-solid fa-thumbs-up"></i>
          </button>
          <button
            className="btn btn-outline-danger mx-1"
            onClick={() => {
              // fetch api -> server
              // response -> success
              dispatch(deleteCourse(props.coursedetails.id));
            }}
          >
            <i className="fa-solid fa-trash"></i>
          </button>
        </div>
      </div>
    </div>
  );
}
