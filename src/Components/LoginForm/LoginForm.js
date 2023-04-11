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
  const [warning, setWarning] = useState("");
  const [inputChange, setInputChange] = useState(false);
  const [disable, setDisable] = useState(true);
  const [error, setError] = useState({ username: "", password: "" });

  // set login data
  const handleChange = (e) => {
    setInputChange(true);
    loginData.password.length >= 5 ? setDisable(false) : setDisable(true);
    setLoginData({ ...loginData, [e.target.name]: e.target.value });
  };

  // login button submit form
  const handleSubmit = (e) => {
    e.preventDefault();
    logIn(loginData, navigate, setWarning);
    console.log("loginUser", loginData);
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
           
            <InputFeild
            required
              type={"password"}
              placeholder={"Password"}
              onchange={handleChange}
              name={"password"}
              value={loginData.password}
            />
      

            <Button className={"loginBtn"} text={"Log In"} disabled={disable} />

            <HorizontalLine />

            <div className="facebookLink">
              <ImgTag src={"./images/facebook.png"} width={"16px"}></ImgTag>

              <AnchorTag
                href={"*"}
                className={"facebookIcons"}
                text={` Log in with Facebook `}
              />
            </div>
            <div className="errorWearning" style={{display:setWarning!==0?"block":"none"}}>
            <p  >
              {warning}
              </p>
              </div>
            <AnchorTag
              href={"*"}
              className={"forgotPass"}
              text={"Forgot Password?"}
            />
          </form>
    
      </div>
      <LoginSignupOption
        label="Don't have an account?"
        linkText="Sign up"
        linkUrl="/accounts/emailsignup"
      />
      <AppStoreIcons />
    </div>
  );
};

export default LoginForm;
