import React, { useState } from "react";
import "./ForgetPassword.css";
import Footer from "../../components/Footer/Footer";
import ImgTag from "../../components/ImgTag";
import Button from "../../components/Button";
import InputField from "../../components/InputField";
import AnchorTag from "../../components/AnchorTag";
import HorizontalLine from "../../components/Common/HorizontalLine";
import { useNavigate } from "react-router-dom";

const ForgetPassword = () => {
  const navigate = useNavigate()

  const [userName, setUserName] = useState("");

  const handleChange = (e) => {
    setUserName(e.target.value);
    console.log("value-->", userName);
  };

const handleSubmit=(e)=>{
e.preventDefault()
navigate("/challenges")
}



  return (
    <div className="forgetPasswordPage">
      <div className="iconContainer">
        <div className="forgetPasswordIcon">
          <ImgTag src={"/images/instagramLogo.png"} width={102} />
        </div>
      </div>
      <div className="main">
        <div className="forgetPasswordContainer">
          <div className="lockIconContainer">
            <span className="lockIconImg"></span>
          </div>

          <div className="troubleLoggingHeading">
            <span>Trouble logging in? </span>
          </div>

          <div className="instructionsForgetPassword">
            <span>
              Enter your email, phone, or username and we'll send you a link to
              get back into your account.
            </span>
          </div>

          <div className="forgetPasswordInput">
            <form >
              <InputField
                required
                type={"text"}
                placeholder={"Email, Phone or Username"}
                onchange={handleChange}
                name={"userName"}
                value={userName}
                style={{minWidth:"300px"}}
              />
            </form>
          </div>

          <div className="sendBtnLinkContainer">
            <div className="sendLinkBtn" onClick={handleSubmit}>Send login link </div>
            <AnchorTag
              href={"https://help.instagram.com/374546259294234"}
              text={"Can't reset your password?"}
            />
          </div>

          <div className="horizontalOptionLine">
            <HorizontalLine />
          </div>

          <div className="createNewAccountOption">
            <AnchorTag
              href={"/accounts/emailsignup"}
              text={"Create new account"}
            />
          </div>


<div className="backLoginBtnCont">
<div className="backloginBtn">
<AnchorTag  href={"/accounts/login"} text={"Back to login"}/>
  </div>
  </div>

        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ForgetPassword;
