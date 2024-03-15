import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { registerConfig } from "../../utils/axiosConfig";
import { IoEye, IoEyeOff } from "react-icons/io5";
import { FaCheckCircle } from "react-icons/fa";
import toast from "react-hot-toast";
import Cookies from "js-cookie";

const Register = () => {
  
  const navigate=useNavigate();

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


    const userName = document.getElementById("name");
    const userEmail = document.getElementById("email");
    const userPassword = document.getElementById("password");

    if(userName.value==0){
      toast.error('please enter your name')
      userName.classList.add('invalid')
    }

    if(userEmail.hasAttribute('disabled')==false){
      if(userEmail.value==0){
        userEmail.classList.add('invalid')
      }
    }

    if(userPassword.hasAttribute('disabled')==false){
      if(userPassword.value==0){
        userPassword.classList.add('invalid')
      }
    }

      if(error===true){
        toast.error(`please enter a valid data`)
    }

    if(error!=true){
      registerConfig(userData).then(()=>{
        history.replaceState(null,'','/')
        Cookies.get('access')?navigate('/'):null
      })
    }
  };

  const handleChange = (e) => {
    setUserData({
      ...userData,
      [e.target.name]: e.target.value,
    });

    const userName = document.getElementById("name");
    const userNamePattern = /^[A-Za-z\s]{3,}$/;
    const userNameValid = document.getElementsByClassName("confirm-valid-name");

    const userEmail = document.getElementById("email");
    const userEmailPattern = /^[a-z0-9@._]{3,}@(hotmail|gmail|yahoo|outlook)\.com$/;
    const userEmailValid = document.getElementsByClassName(
      "confirm-valid-email"
    );

    const userPassword = document.getElementById("password");
    const userPasswordPattern = /^[a-zA-Z0-9!@#$%^&*]{6,16}$/;
    const userPasswordValid = document.getElementsByClassName(
      "confirm-valid-password"
    );


    if(userNamePattern.test(userName.value)==true){
      userNameValid[0].classList.remove('not-valid')
      userName.classList.remove('invalid')
      userEmail.removeAttribute('disabled')
      userEmail.previousElementSibling.classList.remove('not-active')
      SetError(false)
    }else if(userNamePattern.test(userName.value)==false){
      userNameValid[0].classList.add('not-valid')
      userEmail.setAttribute('disabled','')
      userEmail.previousElementSibling.classList.add('not-active')
      SetError(true)
    }

    if(userEmailPattern.test(userEmail.value)==true){
      userEmailValid[0].classList.remove('not-valid')
      userEmail.classList.remove('invalid')
      userPassword.removeAttribute('disabled')
      userPassword.previousElementSibling.classList.remove('not-active')
      SetError(false)
    }else if(userEmailPattern.test(userEmail.value)==false){
      userEmailValid[0].classList.add('not-valid')
      userPassword.setAttribute('disabled','')
      userPassword.previousElementSibling.classList.add('not-active')
      SetError(true)
    }

    if(userPasswordPattern.test(userPassword.value)==true){
      userPasswordValid[0].classList.remove('not-valid')
      userPassword.classList.remove('invalid')
      SetError(false)
    }else if(userPasswordPattern.test(userPassword.value)==false){
      userPasswordValid[0].classList.add('not-valid')
      SetError(true)
    }

    if(userEmail.hasAttribute('disabled')==true){
      userPassword.setAttribute('disabled',''),
      userPassword.previousElementSibling.classList.add('not-active')
      SetError(true)
    }


  };

  return (
    <>
      <div className="form-background">
        <h1>silver shop</h1>
        <div className="form">
          <div className="form-header">
            <h4>Register</h4>
          </div>
          <form action="" onSubmit={handleSubmit}>
            <div className="form-group">
              <div className="label">
                <label htmlFor="">enter your name</label>
                <div className="confirm-valid confirm-valid-name not-valid">
                  <FaCheckCircle />
                </div>
              </div>
              <input
                onChange={handleChange}
                type="text"
                name="name"
                id="name"
              />
              <p></p>
            </div>
            <div className="form-group">
            <div className="label not-active" >
                <label htmlFor="">enter your email</label>
                <div className="confirm-valid confirm-valid-email not-valid">
                  <FaCheckCircle />
                </div>
              </div>

              <input
                disabled
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
                placeholder="password must be more than 6 chrachters"
              />
              <p></p>
            </div>
            <div className="form-btns">
              <button htmlFor="" >register</button>
              <Link to={"/login"}>have account?</Link>
            </div>
          </form>
        </div>
        <h4 className="visit-link" onClick={()=>navigate('/')}>take a look</h4>
      </div>
    </>
  );
};

export default Register;
