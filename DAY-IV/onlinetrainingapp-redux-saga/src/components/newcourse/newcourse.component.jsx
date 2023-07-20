import React from "react";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { addNewCourse } from "../../redux/reducers/courses.reducer";
import { useNavigate } from "react-router-dom";
export default function NewCourse() {
  let dispatch = useDispatch();
  let navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  return (
    <>
      <header>
        <h1>New Course</h1>
      </header>
      <div className="d-flex justify-content-center align-items-center">
        <form
          onSubmit={handleSubmit(formdata => {
            let newCourseToBeAdded = {
              id: formdata.CourseId,
              title: formdata.CourseTitle,
              price: formdata.CoursePrice,
              rating: formdata.CourseRating,
              likes: formdata.CourseLikes,
              imageUrl: formdata.CourseImage,
              trainer: formdata.CourseTrainer,
              description: formdata.CourseDescription,
            };

            dispatch(addNewCourse(newCourseToBeAdded));
            navigate("/");
          })}
        >
          <div className="row m-1">
            <div className="col-md-4">
              <label htmlFor="txtCourseId">Id : </label>
            </div>
            <div className="col-md-4">
              <input
                type="number"
                id="txtCourseId"
                {...register("CourseId", { required: true })}
              />
              {errors.CourseId && <p style={{ color: "red" }}>Id Required !</p>}
            </div>
          </div>
          <div className="row m-1">
            <div className="col-md-4">
              <label htmlFor="txtCourseTitle">Title : </label>
            </div>
            <div className="col-md-4">
              <input
                type="text"
                id="txtCourseTitle"
                placeholder="Max 20 characters"
                {...register("CourseTitle", {
                  required: true,
                  maxLength: {
                    value: 20,
                    message: "You exceeded 20 chars limit !",
                  },
                })}
              />
              {errors.CourseTitle && (
                <p style={{ color: "red" }}>
                  {errors.CourseTitle.type === "maxLength"
                    ? errors.CourseTitle.message
                    : "Title Required !"}
                </p>
              )}
            </div>
          </div>
          <div className="row m-1">
            <div className="col-md-4">
              <label htmlFor="txtCourseRating">Rating : </label>
            </div>
            <div className="col-md-4">
              <input
                type="number"
                id="txtCourseRating"
                {...register("CourseRating")}
              />
            </div>
          </div>
          <div className="row m-1">
            <div className="col-md-4">
              <label htmlFor="txtCoursePrice">Price : </label>
            </div>
            <div className="col-md-4">
              <input
                type="number"
                id="txtCoursePrice"
                {...register("CoursePrice")}
              />
            </div>
          </div>
          <div className="row m-1">
            <div className="col-md-4">
              <label htmlFor="txtCourseLikes">Likes : </label>
            </div>
            <div className="col-md-4">
              <input
                type="number"
                id="txtCourseLikes"
                {...register("CourseLikes")}
              />
            </div>
          </div>
          <div className="row m-1">
            <div className="col-md-4">
              <label htmlFor="txtCourseTrainer">Trainer : </label>
            </div>
            <div className="col-md-4">
              <input
                type="text"
                id="txtCourseTrainer"
                {...register("CourseTrainer")}
              />
            </div>
          </div>
          <div className="row m-1">
            <div className="col-md-4">
              <label htmlFor="txtCourseImage">Image : </label>
            </div>
            <div className="col-md-4">
              <input
                type="text"
                id="txtCourseImage"
                {...register("CourseImage")}
              />
            </div>
          </div>
          <div className="row m-1">
            <div className="col-md-4">
              <label htmlFor="txtCourseDescription">Description:</label>
            </div>
            <div className="col-md-4">
              <textarea
                id="txtCourseDescription"
                cols="30"
                rows="5"
                {...register("CourseDescription")}
              ></textarea>
            </div>
          </div>
          <div className="row">
            <div className="col-md-4"></div>
            <div className="col-md-8">
              <button className="btn btn-success">Add New Course</button>
            </div>
          </div>
        </form>
      </div>
    </>
  );
}
