import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Course from "../course/course.component";
import { sagaactions } from "../../saga/sagaactions";

export default function ListOfCourses() {
  let courses = useSelector(store => store.courses);
  let dispatch = useDispatch();
  useEffect(() => {
    let token = sessionStorage["jwt-token"];
    dispatch({
      type: sagaactions.FETCH_ALL_COURSES_ASYNC,
      payload: token,
    });
  }, []);
  return (
    <>
      <header>
        <h1>List Of Courses</h1>
      </header>
      {/* <button
        className="btn btn-primary"
        onClick={() => {
          let token = sessionStorage["jwt-token"];
          dispatch({
            type: sagaactions.FETCH_ALL_COURSES_ASYNC,
            payload: token,
          });
        }}
      >
        Get Courses
      </button> */}
      <div className="row">
        {courses.map(course => (
          <Course coursedetails={course} key={course.id} />
        ))}
      </div>
    </>
  );
}
