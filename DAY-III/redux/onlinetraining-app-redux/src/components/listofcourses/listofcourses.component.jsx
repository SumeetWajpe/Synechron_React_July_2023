import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Course from "../course/course.component";
import { fetchAllCourses } from "../../redux/reducers/courses.reducer";

export default function ListOfCourses() {
  let courses = useSelector(store => store.courses);
  let dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchAllCourses());
  }, []);
  return (
    <>
      <header>
        <h1>List Of Courses</h1>
      </header>

      <div className="row">
        {courses.map(course => (
          <Course coursedetails={course} key={course.id} />
        ))}
      </div>
    </>
  );
}
