import React, { useState } from "react";
import "./CodeVerification.css";
import LoginSignupOption from "../../components/Common/LoginSignupOption";
import AppStoreIcons from "../../components/Common/AppStoreIcons/AppStoreIcons";
import Footer from "../../components/Footer/Footer";
import ImgTag from "../../components/ImgTag";
import Button from "../../components/Button";
import AnchorTag from "../../components/AnchorTag";
import { confirVerificaionCode, reSendVerificaionCode } from "../../api/authApi";
import { useNavigate } from "react-router-dom";

import InputField from "../../components/InputField";
// import { eventWrapper } from "@testing-library/user-event/dist/utils";

function CodeVerification() {
  const currentUser = JSON.parse(localStorage.getItem("SignUpUser"));

  const navigate = useNavigate();
  const [verificationCode, setVerificationCode] = useState("");
  const [wearning, setWearning] = useState("");
  const [resendCodeMsg, setResendCodeMsg] = useState(true);

  const handleChange = (e) => {
    // maxlength for input
    let maxlength = 6;
    let newValue = e.target.value;
    if (newValue.length > maxlength) {
      newValue = newValue.slice(0, maxlength);
    }
    setVerificationCode(newValue);
  };

  //submit button
  const onSubmit = (e) => {
    e.preventDefault();

    confirVerificaionCode(
      { code: verificationCode, id: currentUser.userId },
      navigate,
      setWearning
    );
  };
  const handleResendCode=(e)=>{

reSendVerificaionCode({id:currentUser.userId},navigate,setResendCodeMsg)
  }

  return (
    <div className="codeVerificationPage">
      <div className="codeVerificationPanel">
        <div className="codevericationContainer">
          <div>
            <ImgTag
              src={"/images/codeVerificationImg.png"}
              width={64}
              height={75}
            />
          </div>

          <div className="headingForCodeVerify">
            {resendCodeMsg.length > 0 ? <p>Your code was resent.</p> : ""}
            <h4> Just one more step</h4>
            <p>
              Enter the 6-digit code we sent to:
              <span>{currentUser.userName}</span>
            </p>
          </div>
          <form className="codeVerifyForm" onSubmit={onSubmit}>
            <InputField
              required
              autoFocus
              type={"number"}
              placeholder={"######"}
              onchange={handleChange}
              name={"code"}
              value={verificationCode}
            />
            <Button className={"confirmBtn"} text={"Confirm"} />
          </form>
          {wearning.length > 0 ? (
            <span className="errorWearningShow">{wearning}</span>
          ) : (
            ""
          )}

          <div className="updateNumberRequest">
            <Button text={"Change Number"} />
            {"|"}
            <Button text={"Request New Code"} onclick={handleResendCode}/>
          </div>
        </div>
        <LoginSignupOption
          label={"Have an account?"}
          linkText={"Log In"}
          linkUrl={"accounts/login"}
        />
        <AppStoreIcons />
      </div>
      <Footer />
    </div>
  );
}

export default CodeVerification;
