import { createSlice } from "@reduxjs/toolkit";
let initialState = [];

export const coursesSlice = createSlice({
  name: "courses",
  initialState,
  reducers: {
    incrementLikes: (store, action) => {
      let index = store.findIndex(c => c.id == action.payload);
      store[index].likes++;
      return store; // updated store (object)
    },
    deleteCourse: (store, action) => {
      return store.filter(c => c.id !== action.payload);
    },
    addNewCourse: (store, action) => {
      return [...store, action.payload];
    },
    setAllCourses: (store, action) => {
      return action.payload;
    },
  },
});

export const { incrementLikes, deleteCourse, addNewCourse, setAllCourses } =
  coursesSlice.actions;
export default coursesSlice.reducer;
