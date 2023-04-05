import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./LoginForm.css";

import InputFeild from "../InputFeild";
import Button from "../Button";
import ImgTag from "../ImgTag";
import AnchorTag from "../AnchorTag";
import AppStoreIcons from "../Common/AppStoreIcons/AppStoreIcons";
import LoginSignupOption from "../Common/LoginSignupOption";
import HorizontalLine from "../Common/HorizontalLine";
import { logIn } from "../../api/authApi";
import { TextField } from "@mui/material";

const LoginForm = () => {
  const navigate = useNavigate();
  const loginInitialState = {
    userName: "",
    password: "",
  };

  const [loginData, setLoginData] = useState(loginInitialState);
  const [inputChange,setInputChange]=useState(false)
  const [error, setError] = useState({ username: "", password: "" });

  // set login data
  const handleChange = (e) => {
    setInputChange(true)
    setLoginData({ ...loginData, [e.target.name]: e.target.value });
  };

  // login button submit form
  const handleSubmit = (e) => {

    console.log("loginUser", loginData);
    e.preventDefault();
    logIn(loginData, navigate);
  };

  return (
    <div className="loginForm">
      <div className="loginContainer">
        <div className="icon">
          <ImgTag src={"/images/binstalogo.png"} width={200} />
        </div>

        <form className="form" onSubmit={handleSubmit}>
          <InputFeild
            requied
            type={"text"}
            placeholder={"Phone number, username or email"}
            onchange={handleChange}
            name={"userName"}
            value={loginData.userName}
          />
{/* <TextField label="password" variant="filled"/> */}
          {/* {inputChange ? (
            <label>
              <span>password</span>
            <InputFeild
            type={"password"}
            placeholder={"Password"}
            onchange={handleChange}
            name={"password"}
            value={loginData.password}
          />
            </label>

          ) : ( */}
            <InputFeild
              type={"password"}
              placeholder={"Password"}
              onchange={handleChange}
              name={"password"}
              value={loginData.password}
            />
          {/* )} */}

          <span></span>

          <Button className={"loginBtn"} text={"Log In"} />

          <HorizontalLine />
          <AnchorTag
            href={"*"}
            className={"facebookIcons"}
            text={` Log in with Facebook `}
          />
          <AnchorTag
            href={"*"}
            className={"forgotPass"}
            text={"Forgot Password?"}
          />
        </form>
      </div>
      <LoginSignupOption
        label="Don' t have an account?"
        linkText="SignUp"
        linkUrl="/accounts/emailsignup"
      />
      <AppStoreIcons />
    </div>
  );
};

export default LoginForm;

const errorMessages = {
  username: "no user",
  password: "nop as",
};
