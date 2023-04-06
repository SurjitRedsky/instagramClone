import React, { useState } from "react";
import "./SignUp.css";
import ImgTag from "../../components/ImgTag";
import AnchorTag from "../../components/AnchorTag";
import InputFeild from "../../components/InputFeild";
import Button from "../../components/Button";

import Footer from "../../components/Footer/Footer";
import AppStoreIcons from "../../components/Common/AppStoreIcons/AppStoreIcons";
import LoginSignupOption from "../../components/Common/LoginSignupOption";
import HorizontalLine from "../../components/Common/HorizontalLine";
import { register } from "../../api/authApi";
import { useNavigate } from "react-router-dom";

const SignUp = () => {
  const navigate = useNavigate();

  const initialState = {
    email: "",
    name: "",
    userName: "",
    password: "",
  };

  const [signUpData, setSignUpData] = useState(initialState);
  const [warning,setWarning]=useState("")
  const [disable, setDisable] = useState(true);

  const handleChange = (e) => {
    setSignUpData({ ...signUpData, [e.target.name]: e.target.value });
    signUpData.password.length >= 5 ? setDisable(false) : setDisable(true);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    register(signUpData, navigate,setWarning);
  };

  return (
    <div className="panel">
      <div className="signUpContainer">
        <div className="signUpPanel">
          <div className="icon">
            <ImgTag src={"/images/binstalogo.png"} width={200} />
          </div>
          <form className="signUpForm" onSubmit={handleSubmit}>
            <h2 className="signUpHeading">
              Sign up to see photos and videos from your friends.
            </h2>
            <Button
              className={"facebookLoginBtn"}
              fontIcon={
                <ImgTag src={"/images/lightFacebookIcons.png"} width={15} />
              }
              text={` Log in with Facebook `}
            />

            <HorizontalLine />

            {/* requied
            type={"text"}
            placeholder={"Phone number, username or email"}
            onchange={handleChange}
            name={"userName"}
            value={loginData.userName} */}

            <InputFeild
              type={"text"}
              placeholder={"Mobile number or email"}
              onchange={handleChange}
              name={"email"}
              value={signUpData.email}
            />
            <InputFeild
              type={"text"}
              placeholder={"Full Name"}
              onchange={handleChange}
              name={"name"}
              value={signUpData.email}
            />
            <InputFeild
              type={"text"}
              placeholder={"Username"}
              onchange={handleChange}
              name={"userName"}
              value={signUpData.email}
            />
            <InputFeild
              type={"password"}
              placeholder={"Password"}
              onchange={handleChange}
              name={"password"}
              value={signUpData.email}
            />
            <span>
              {
                warning
              }
            </span>
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

            <Button
              className={"sginUpBtn"}
              text={"Sign up"}
              disabled={disable}
            />
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
