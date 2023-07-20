import React from "react";
import { useSelector } from "react-redux";
import Course from "../course/course.component";

export default function ListOfCourses() {
  let courses = useSelector(store => store.courses);
  
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
