import { configureStore } from "@reduxjs/toolkit";
import courses from "../reducers/courses.reducer";
import posts from "../reducers/posts.reducer";

const store = configureStore({ reducer: { courses, posts } });
export default store;
