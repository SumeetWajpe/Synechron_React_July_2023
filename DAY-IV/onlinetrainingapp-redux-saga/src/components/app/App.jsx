import ListOfCourses from "../listofcourses/listofcourses.component";
import { BrowserRouter, Route, Routes, Link } from "react-router-dom";
import Navbar from "../navbar/navbar.component";
import CourseDetails from "../coursedetails/coursedetails.component";
import NewCourse from "../newcourse/newcourse.component";
import CartSummary from "../cart/cartsummary/cartsummary.component";
function App() {
  return (
    <BrowserRouter>
      {/* <a href="/">Courses</a> |<a href="/posts">Posts</a> */}
      {/* <Link to="/">Courses</Link> | <Link to="/posts">Posts</Link> */}
      <Navbar />
      <Routes>
        <Route path="/" element={<ListOfCourses />} />
        {/* <Route path="/posts" element={<Posts />} /> */}
        {/* <Route path="/postdetails/:pid" element={<PostDetails />} /> */}
        <Route path="/coursedetails/:cid" element={<CourseDetails />} />
        <Route path="/newcourse" element={<NewCourse />} />
        <Route path="/cartsummary" element={<CartSummary />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
