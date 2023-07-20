import React from "react";
import "./login.css";
import { useForm } from "react-hook-form";
import { useLocation, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";

export default function Login() {
  let navigate = useNavigate();
  let dispatch = useDispatch();
  let location = useLocation();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  return (
    <div className="wrapper fadeInDown">
      <div id="formContent">
        <div className="fadeIn first">
          <img
            src="https://cdn-icons-png.flaticon.com/512/3177/3177440.png"
            id="icon"
            alt="User Icon"
          />
        </div>

        <form
          onSubmit={handleSubmit(data => {
            // console.log(data);
            // hash password & send
            fetch("http://localhost:4000/login", {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify(data),
            })
              .then(res => res.json())
              .then(response => {
                console.log(response);
                if (response.token) {
                  sessionStorage.setItem("jwt-token", response.token); // redux store
                  navigate("/courses");
                }
              });
          })}
        >
          <input
            type="text"
            className="fadeIn second login-input"
            placeholder="login"
            {...register("uname")}
          />
          <input
            type="password"
            id="password"
            className="fadeIn third login-input"
            placeholder="password"
            {...register("pwd")}
          />
          <input type="submit" className="fadeIn fourth" value="Log In" />
        </form>

        <div id="formFooter">
          <a className="underlineHover" href="#">
            Forgot Password?
          </a>
        </div>
      </div>
    </div>
  );
}
