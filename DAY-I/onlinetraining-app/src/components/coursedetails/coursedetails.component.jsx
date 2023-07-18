import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Rating from "../rating/rating.component";

export default function CourseDetails() {
  let { cid } = useParams();
  let [course, setCourse] = useState({});
  useEffect(() => {
    fetch("http://localhost:3005/courses/" + cid)
      .then(res => res.json())
      .then(courseResponse => setCourse(courseResponse));
  }, []);
  let content;
  if (course?.title) {
    content = (
      <div className="row my-4">
        <div className="col-md-8">
          <img
            src={course.imageUrl}
            className="card-img-top rounded-0"
            alt={course.title}
          />
        </div>
        <div className="col-md-3">
          <h1 className="card-title">{course.title}</h1>
          <Rating maxStars={course.rating} />
          <p>₹. {course.price}</p>
          <h4> {course.trainer}</h4>
          <p> {course.description}</p>
        </div>
      </div>
    );
  } else
    content = (
      <img src="https://miro.medium.com/v2/resize:fit:1400/1*CsJ05WEGfunYMLGfsT2sXA.gif" />
    );
  return <>{content}</>;
}
