import { configureStore } from "@reduxjs/toolkit";
import courses from "../reducers/courses.reducer";
import posts from "../reducers/posts.reducer";
import cart from "../reducers/cart.reducer";
import createSagaMiddleware from "redux-saga";
import { rootSaga } from "../../saga/saga";

let sagaMiddleware = createSagaMiddleware();

const store = configureStore({
  reducer: { courses, posts, cart },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware().concat([sagaMiddleware]),
});

sagaMiddleware.run(rootSaga);
export default store;
