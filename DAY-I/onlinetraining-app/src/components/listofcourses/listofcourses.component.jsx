import React, { Component } from "react";
import Course from "../course/course.component";

export default class ListOfCourses extends Component {
  state = { courses: [] };

  componentDidMount() {
    fetch("http://localhost:3005/courses")
      .then(res => res.json())
      .then(coursesResponse => {
        this.setState({ courses: coursesResponse }); // triggers calling of render method !
      });
  }
  render() {
    return (
      <>
        <header>
          <h1>List Of Courses</h1>
        </header>
        <div className="row">
          {this.state.courses.map(course => (
            <Course coursedetails={course} />
          ))}
        </div>
      </>
    );
  }
}
