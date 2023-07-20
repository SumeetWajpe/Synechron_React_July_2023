import { call, put, retry, takeLatest } from "redux-saga/effects";
import axios from "axios";
import { setAllCourses } from "../redux/reducers/courses.reducer";

function GetAllCourses() {
  return axios.get("http://localhost:3005/courses");
}

function VerifyUser(token) {
  return axios.post(
    "http://localhost:4000/verify",
    {},
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    },
  );
}

function* fetchAllCourses(action) {
  // make the async call fetch | axios
  // get the data (courses)
  // dispatch an action to the real reducer with payload(courses)

  try {
    const response = yield call(VerifyUser, action.payload); // placing the async call
    if (response.status == 200) {
      // console.log(response.data);
      if (response.data.msg == "success") {
        const responseForCourses = yield call(GetAllCourses);
        if (responseForCourses.status == 200) {
          yield put(setAllCourses(responseForCourses.data)); // dispatching the action
        }
      }
    }
  } catch (error) {
    console.log(error);
  }
}

function* fetchAllCoursesWithRETRY() {
  try {
    let duration = 1000;
    let response = yield retry(3, duration * 10, GetAllCourses);
    if (response.status == 200) {
      yield put(setAllCourses(response.data));
    }
  } catch (error) {}
}

// rootsaga watches for the following registered actions (whenever dispatched from react)
export function* rootSaga() {
  yield takeLatest("FETCH_ALL_COURSES_ASYNC", fetchAllCourses);
  // yield takeLatest("FETCH_ALL_COURSES_ASYNC", fetchAllCoursesWithRETRY);

  //   yield takeLatest("ADD_NEW_COURSE_ASYNC", addNewCourse);
}
