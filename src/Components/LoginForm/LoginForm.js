import React, { useState } from "react";
import "./LoginForm.css";
import { Link } from "react-router-dom";

// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faFacebookSquare } from "@fortawesome/free-brands-svg-icons";

import InputFeild from "../InputFeild";
import Button from "../Button";
import ImgTag from "../ImgTag";
import AnchorTag from "../AnchorTag";
import AppStoreIcons from "../Common/AppStoreIcons/AppStoreIcons";
import LoginSignupOption from "../Common/LoginSignupOption";
import HorizontalLine from "../Common/HorizontalLine";

const LoginForm = () => {
  const [error, setError] = useState({ username: '', password: '' })
  const [username, setUser] = useState('')
  const [password, setPassword] = useState('')

  const handleChange = (key, value) => {
    if (key === 'username') {
      setUser(value)
    }
    if (key === 'password') {
      setPassword(value)
    }
  }

  return (
    <div className="loginForm">
      <div className="loginContainer">
        <div className="icon">
          <ImgTag src={'/images/binstalogo.png'} width={200} />
        </div>

        <form className="form" onSubmit={(e) => e.preventDefault()}>
          <InputFeild
            type={"text"}
            placeholder={"Phone number, username or email"}
            onChange={(e) => handleChange('username', e.target.value)}
          />
          {error.username}
          <InputFeild type={"password"} placeholder={"Password"}
            onChange={(e) => handleChange('password', e.target.value)}
          />
          {error.password}
          <Button className={"loginBtn"} text={"Log In"} />

          <HorizontalLine />
          <AnchorTag
            href={"*"}
            className={"facebookIcons"}
            // fontIcon={<FontAwesomeIcon size="1x" icon={faFacebookSquare} />}
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
        linkText='SignUp'
        linkUrl='/accounts/emailsignup'
      />
      <AppStoreIcons />
    </div>
  );
};

export default LoginForm;

const errorMessages = {
  'username': 'no user',
  'password': 'nop as'
}