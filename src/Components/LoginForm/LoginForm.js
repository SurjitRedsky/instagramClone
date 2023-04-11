import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./LoginForm.css";

import InputFeild from "../InputField";
import Button from "../Button";
import ImgTag from "../ImgTag";
import AnchorTag from "../AnchorTag";
import AppStoreIcons from "../Common/AppStoreIcons/AppStoreIcons";
import LoginSignupOption from "../Common/LoginSignupOption";
import HorizontalLine from "../Common/HorizontalLine";
import { logIn } from "../../api/authApi";

const LoginForm = () => {
  const navigate = useNavigate();
  const loginInitialState = {
    userName: "",
    password: "",
  };

  const [loginData, setLoginData] = useState(loginInitialState);
  const [warning, setWarning] = useState("");
  const [disable, setDisable] = useState(true);

  //password input
  const [passwordType, setPasswordType] = useState("password");
  const [passwordText, setPasswordText] = useState("Show");

  // set login data
  const handleChange = (e) => {
    loginData.password.length >= 5 ? setDisable(false) : setDisable(true);
    setLoginData({ ...loginData, [e.target.name]: e.target.value });
  };

  // login button submit form
  const handleSubmit = (e) => {
    e.preventDefault();
    logIn(loginData, navigate, setWarning);
    console.log("loginUser", loginData);
  };


  const toggleBtn = (e) => {
    e.preventDefault()
    if (passwordType === "password") {
      setPasswordType("text");
      setPasswordText("Hide");
      return;
    }
    setPasswordType("password");
    setPasswordText("Show");
  };

  return (
    <div className="loginForm">
      <div className="loginContainer">
        <div className="icon">
          <ImgTag src={"/images/binstalogo.png"} width={200} />
        </div>

        <form className="form" >
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
            type={passwordType}
            placeholder={"Password"}
            onchange={handleChange}
            name={"password"}
            value={loginData.password}
            showBtn={loginData?.password?.length > 0}
            innerInputContent={
              <Button
                text={passwordText}
                className={"hideShowPassword"}
                onclick={toggleBtn}
              />
            }
          />

          <Button className={"loginBtn"} text={"Log In"} disabled={disable} onclick={handleSubmit} />

          <HorizontalLine />

          <div className="facebookLink">
            <ImgTag src={"./images/facebook.png"} width={"16px"}></ImgTag>

            <AnchorTag
              href={"*"}
              className={"facebookIcons"}
              text={` Log in with Facebook `}
            />
          </div>
          {
            setWarning.length > 0 ? (
              <span className="errorWearningShow">{warning}
              </span>
            ) : ""
          }

          <AnchorTag
            href={"*"}
            className={"forgotPass"}
            text={"Forgot password?"}
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
