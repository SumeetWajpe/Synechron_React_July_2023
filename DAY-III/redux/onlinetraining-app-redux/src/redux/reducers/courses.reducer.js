import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
let initialState = [];

export let fetchAllCourses = createAsyncThunk(
  "courses/getAllCourses",
  async () => {
    let response = await fetch("http://localhost:3005/courses");
    let allCourses = await response.json();
    return allCourses;
  },
);

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
  },
  extraReducers: builder => {
    builder.addCase(fetchAllCourses.fulfilled, (store, action) => {
      console.log(action);
      let fetchedCourses = action.payload;
      return fetchedCourses;
    });
  },
});

export const { incrementLikes, deleteCourse, addNewCourse } =
  coursesSlice.actions;
export default coursesSlice.reducer;
