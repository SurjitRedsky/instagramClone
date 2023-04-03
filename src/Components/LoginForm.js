import React from "react";
import "./LoginForm.css";

// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faFacebookSquare } from "@fortawesome/free-brands-svg-icons";

import appleAppStore from "../images/Yfc020c87j0.png";
import googleAppStore from "../images/c5Rp7Ym-Klz.png";
import blackInstaLogo from "../images/binstalogo.png";
import InputFeild from "./InputFeild";
import Button from "./Button";
import ImgTag from "./ImgTag";
import AnchorTag from "./AnchorTag";

const LoginForm = () => {
  return (
    <div className="loginForm">
      <div className="loginContainer">
        <div className="icon">
          <ImgTag src={blackInstaLogo} width={200} />
        </div>

        <form className="form">
          <InputFeild
            type={"text"}
            placeholder={"Phone number, username or email"}
          />
          <InputFeild type={"password"} placeholder={"Password"} />

          <Button className={"loginBtn"} text={"Log In"} />

          <div className="horizontal">
            <div className="line">
              <hr />
            </div>
            <div>
              <span>or</span>
            </div>
            <div className="line">
              <hr />
            </div>
          </div>

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
      <div className="signUp">
        Don't have an account?
        <AnchorTag href={"*"} text={"Sign Up"} />
      </div>

      <div className="appStoreIcons">
        <div className="getAppHeading">
          <span> Get the app.</span>
        </div>
        <div className="getAppIcons">
          <ImgTag src={appleAppStore} width={130} />
          <ImgTag src={googleAppStore} width={130} />
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
