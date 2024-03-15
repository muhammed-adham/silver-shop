import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { loginConfig } from "../../utils/axiosConfig";
import { IoEye, IoEyeOff } from "react-icons/io5";
import { FaCheckCircle } from "react-icons/fa";
import toast from "react-hot-toast";
import Cookies from "js-cookie";

const Login = () => {
  // console.log(history.replaceState('/login','/'));

  const navigate = useNavigate();

  const [showPassword, setShowPassword] = useState(false);

  const handleShow = () => {
    setShowPassword((prev) => !prev);
  };

  const [userData, setUserData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const [error, SetError] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    const userEmail = document.getElementById("email");
    const userPassword = document.getElementById("password");

    if (userEmail.hasAttribute("disabled") == false) {
      if (userEmail.value == 0) {
        userEmail.classList.add("invalid");
      }
    }

    if (userPassword.hasAttribute("disabled") == false) {
      if (userPassword.value == 0) {
        userPassword.classList.add("invalid");
      }
    }

    if (error === true) {
      toast.error(`please enter a valid data`);
    }

    if (error != true) {
      loginConfig(userData).then(() => {
        history.replaceState(null,'','/')
        Cookies.get('access')?navigate('/'):null
      });
    }
  };

  const handleChange = (e) => {
    setUserData({
      ...userData,
      [e.target.name]: e.target.value,
    });

    const userEmail = document.getElementById("email");
    const userEmailPattern =
      /^[a-z0-9@._]{3,}@(hotmail|gmail|yahoo|outlook)\.com$/;
    const userEmailValid = document.getElementsByClassName(
      "confirm-valid-email"
    );

    const userPassword = document.getElementById("password");
    const userPasswordPattern = /^[a-zA-Z0-9!@#$%^&*]{6,16}$/;
    const userPasswordValid = document.getElementsByClassName(
      "confirm-valid-password"
    );

    if (userEmailPattern.test(userEmail.value) == true) {
      userEmailValid[0].classList.remove("not-valid");
      userEmail.classList.remove("invalid");
      userPassword.removeAttribute("disabled");
      userPassword.previousElementSibling.classList.remove("not-active");
      SetError(false);
    } else if (userEmailPattern.test(userEmail.value) == false) {
      userEmailValid[0].classList.add("not-valid");
      userPassword.setAttribute("disabled", "");
      userPassword.previousElementSibling.classList.add("not-active");
      SetError(true);
    }

    if (userPasswordPattern.test(userPassword.value) == true) {
      userPasswordValid[0].classList.remove("not-valid");
      userPassword.classList.remove("invalid");
      SetError(false);
    } else if (userPasswordPattern.test(userPassword.value) == false) {
      userPasswordValid[0].classList.add("not-valid");
      SetError(true);
    }

    if (userEmail.hasAttribute("disabled") == true) {
      userPassword.setAttribute("disabled", ""),
        userPassword.previousElementSibling.classList.add("not-active");
      SetError(true);
    }
  };

  return (
    <>
      <div className="form-background">
        <h1>silver shop</h1>
        <div className="form">
          <div className="form-header">
            <h4>login</h4>
          </div>
          <form action="" onSubmit={handleSubmit}>
            <div className="form-group">
              <div className="label ">
                <label htmlFor="">enter your email</label>
                <div className="confirm-valid confirm-valid-email not-valid">
                  <FaCheckCircle />
                </div>
              </div>

              <input
                onChange={handleChange}
                type="email"
                name="email"
                id="email"
              />
              <p></p>
            </div>
            <div className="form-group">
              <div className="show-icon" onClick={handleShow}>
                {showPassword ? <IoEye /> : <IoEyeOff />}
              </div>
              <div className="label not-active">
                <label htmlFor="">enter your password</label>
                <div className="confirm-valid confirm-valid-password not-valid">
                  <FaCheckCircle />
                </div>
              </div>
              <input
                disabled
                onChange={handleChange}
                type={showPassword ? "text" : "password"}
                name="password"
                id="password"
                // autoComplete="current-password"
              />
              <p></p>
            </div>
            <div className="form-btns">
              <button htmlFor="">sign in</button>
              <Link to={"/register"}>create new account?</Link>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Login;
