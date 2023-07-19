import React from "react";
import ListOfCourses from "../listofcourses/listofcourses.component";
import { BrowserRouter, Route, Routes, Link } from "react-router-dom";
import Posts from "../postsWithuseEffect/postsWithuseEffect";
import Navbar from "../navbar/navbar.component";
import PostDetails from "../postdetails/postdetails.component";
import CourseDetails from "../coursedetails/coursedetails.component";
import NewCourse from "../newcourse/newcourse.component";

export default function App() {
  return (
    <BrowserRouter>
      {/* <a href="/">Courses</a> |<a href="/posts">Posts</a> */}
      {/* <Link to="/">Courses</Link> | <Link to="/posts">Posts</Link> */}
      <Navbar />
      <Routes>
        <Route path="/" element={<ListOfCourses />} />
        <Route path="/posts" element={<Posts />} />
        <Route path="/postdetails/:pid" element={<PostDetails />} />
        <Route path="/coursedetails/:cid" element={<CourseDetails />} />
        <Route path="/newcourse" element={<NewCourse />} />
      </Routes>
    </BrowserRouter>
  );
}

// class App extends React.Component {
//   render() {
//     // return <ListOfCourses />;
//     // return (
//     //   <>
//     //     <Message msg="Hello" />
//     //     <Message msg="Hey" />
//     //     <Message msg="Bye" />
//     //   </>
//     // );
//     // return <Counter />;
//     return <Posts />;
//   }
// }

// export default App;
