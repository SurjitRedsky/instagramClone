import React from "react";
import "./SignUp.css";
import ImgTag from "../../components/ImgTag";
import AnchorTag from "../../components/AnchorTag";
import InputFeild from "../../components/InputFeild";
import Button from "../../components/Button";

import Footer from "../../components/Footer/Footer";
import AppStoreIcons from "../../components/Common/AppStoreIcons/AppStoreIcons";
import LoginSignupOption from "../../components/Common/LoginSignupOption";
import HorizontalLine from "../../components/Common/HorizontalLine";

const SignUp = () => {
  return (
    <div className="panel">
      <div className="signUpContainer">
        <div className="signUpPanel">
          <div className="icon">
            <ImgTag src={'/images/binstalogo.png'} width={200} />
          </div>
          <form className="signUpForm">
            <h2 className="signUpHeading">Sign up to see photos and videos from your friends.</h2>
            <Button
              className={"facebookLoginBtn"}
              fontIcon={<ImgTag src={'/images/lightFacebookIcons.png'} width={15} />}
              text={` Log in with Facebook `}
            />

            <HorizontalLine />
            <InputFeild type={"text"} placeholder={"Mobile number or email"} />
            <InputFeild type={"text"} placeholder={"Full Name"} />
            <InputFeild type={"text"} placeholder={"Username"} />
            <InputFeild type={"password"} placeholder={"Password"} />
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
        <LoginSignupOption
          label={"Have an account?"}
          linkText="Log In"
          linkUrl="/accounts/login"
        />
        <AppStoreIcons />
      </div>

      <Footer />
    </div>


  );
};

export default SignUp;
