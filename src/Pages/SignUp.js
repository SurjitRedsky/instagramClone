import React from "react";
import "./SignUp.css";
import ImgTag from "../components/ImgTag";
import AnchorTag from "../components/AnchorTag";
import InputFeild from "../components/InputFeild";
import Button from "../components/Button";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faFacebookSquare } from "@fortawesome/free-brands-svg-icons";

import appleAppStore from "../images/Yfc020c87j0.png";
import googleAppStore from "../images/c5Rp7Ym-Klz.png";
import blackInstaLogo from "../images/binstalogo.png";
import facebook from '../images/facebook (1).png'
import Footer from "../components/Footer";

const SignUp = () => {
  return (
    <div className="signUpContainer">
      <div className="signUpPanel">
        <div className="icon">
          <ImgTag src={blackInstaLogo} width={200} />
        </div>

        <form className="form">
          <h3 className="signUpHeading">Sign up to see photos and videos from your friends.</h3>
          <Button
            className={"facebookLoginBtn"}
            fontIcon={<ImgTag src={facebook} width={15} />}
            text={` Log in with Facebook `}
          />

          <div className="horizontal">
            <hr className="line" />
            <span>or</span>
            <hr className="line" />
          </div>
          <InputFeild type={"text"} placeholder={"Mobile number or email"} />
          <InputFeild type={"text"} placeholder={"Full Name"} />
          <InputFeild type={"text"} placeholder={"Username"} />
          <InputFeild type={"password"} placeholder={"Password"} />
          {/* <div className="signUpDescription"> */}
          <div className="signUpDescription">
            <p>
              People who use our service may have uploaded your contact
              information to Instagram.{" "}
              <AnchorTag href={"*"} text={" Learn More"} />
            </p>
            <p>
              By signing up, you agree to our
              <AnchorTag href={"*"} text={"Terms , Privacy Policy"} />
              and
              <AnchorTag href={"*"} text={"Cookies Policy."} />
            </p>
          </div>

          <Button className={"sginUpBtn"} text={"Sign up"} />
        </form>
      </div>
      <div className="haveLoginAcc">
        Have an account?
        <AnchorTag href={"*"} text={"Log In"} />
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
      <Footer />
    </div>
  );
};

export default SignUp;
