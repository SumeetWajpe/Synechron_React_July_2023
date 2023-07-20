import React from "react";
import Course from "../course/course.component";
import { useState } from "react";
import { useEffect } from "react";

export default function ListOfCourses() {
  let [courses, setCourses] = useState([]);
  useEffect(() => {
    fetch("http://localhost:3005/courses")
      .then(res => res.json())
      .then(coursesResponse => {
        setCourses(coursesResponse); // triggers calling of rerender  !
      });
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

// export default class ListOfCourses extends Component {
//   state = { courses: [] };

//   DeleteACourse(theCourseId) {
//     let newCourses = this.state.courses.filter(c => c.id !== theCourseId);
//     this.setState({ courses: newCourses });
//   }

//   componentDidMount() {
//     fetch("http://localhost:3005/courses")
//       .then(res => res.json())
//       .then(coursesResponse => {
//         this.setState({ courses: coursesResponse }); // triggers calling of render method !
//       });
//   }
//   render() {
//     return (
//       <>
//         <header>
//           <h1>List Of Courses</h1>
//         </header>
//         <div className="row">
//           {this.state.courses.map(course => (
//             <Course
//               coursedetails={course}
//               key={course.id}
//               DeleteACourse={theCourseId => this.DeleteACourse(theCourseId)} // not always the best practise
//             />
//           ))}
//         </div>
//       </>
//     );
//   }
// }
