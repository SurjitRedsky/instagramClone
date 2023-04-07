import React, { useState } from "react";
import "./CodeVerification.css";
import LoginSignupOption from "../../components/Common/LoginSignupOption";
import AppStoreIcons from "../../components/Common/AppStoreIcons/AppStoreIcons";
import Footer from "../../components/Footer/Footer";
import ImgTag from "../../components/ImgTag";
import InputFeild from "../../components/InputFeild";
import Button from "../../components/Button";
import AnchorTag from "../../components/AnchorTag";
import { confirVerificaionCode } from "../../api/authApi";
import { useNavigate } from "react-router-dom";

function CodeVerification() {
  const currentUser = JSON.parse(localStorage.getItem("loginUser")).user;
// const currentUser=localStorage;

  const navigate=useNavigate()
const [verificationCode,setVerificationCode]=useState("")

const handleChange=(e)=>{
  setVerificationCode(e.target.value)
}
const onSubmit=(e)=>{
  e.preventDefault();
  console.log("code->",verificationCode);
confirVerificaionCode({code:verificationCode,id:currentUser._id},navigate)
}

  return (
    <div className="codeVerificationPage">
      <div className="codeVerificationPanel">
        <div className="codevericationContainer">
          <ImgTag src={"/images/birthDayCake.png"} width={100} />
          <div className="headingForCodeVerify">
            <h4> Just one more step</h4>
            <p>
              Enter the 6-digit code we sent to:<span>4734674387</span>
            </p>
          </div>
          <form className="codeVerifyForm" onSubmit={onSubmit}>
            <InputFeild type={"text"} placeholder={"££££££"} name={"code"} onchange={handleChange}  required={true}/>
            <Button className={"confirmBtn"} text={"Confirm"} />
          </form>
          <div className="updateNumberRequest">
            <AnchorTag text={"Change Number"} />
            {"|"}
            <AnchorTag text={"Request New Code"} />
          </div>
        </div>
        <LoginSignupOption
          label={"Have an account?"}
          linkText={"Log In"}
          linkUrl={"accounts/login"}
        />
        <AppStoreIcons  />
      </div>
      <Footer />
    
    </div>
  );
}

export default CodeVerification;
