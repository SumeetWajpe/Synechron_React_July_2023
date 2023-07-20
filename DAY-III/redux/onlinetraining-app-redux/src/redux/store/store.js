import { configureStore } from "@reduxjs/toolkit";
import courses from "../reducers/courses.reducer";
import posts from "../reducers/posts.reducer";
import cart from "../reducers/cart.reducer";

const store = configureStore({ reducer: { courses, posts, cart } });
export default store;
