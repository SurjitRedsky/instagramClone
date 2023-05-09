import React, { useState } from "react";
import "./ForgetPassword.css";

import AnchorTag from "../../components/AnchorTag";
import Footer from "../../components/Footer/Footer";
import ImgTag from "../../components/ImgTag";
import Button from "../../components/Button";
import InputField from "../../components/InputField";

const RobotCaptchaScreen = () => {
const [isChecked,setIsChecked]=useState("") 

const handleChange=(e)=>{
setIsChecked( e.target.checked)
}


  return (
    <div className="forgetPasswordPage">
      <div className="robotCapcthaNavBar">
        <div className="robotCapcthaNavBarCont">
          <div className="robotCapcthaNavBarLeft">
            <ImgTag src={"/images/instagramLogo.png"} width={102} />
          </div>
          <div className="robotCapcthaNavBarRight">
            <AnchorTag href={"*"} text={"Log Into Another Account"} />
          </div>
        </div>
      </div>
      <div className="main">
        <div className="robotCaptchaContainer">
          <div className="robotCaptchaContainerContent">
            <div className="robotCaptchaContent1">
              <h2 className="robotCaptchaContentHeading">
                Confirm it's You to Login
              </h2>

              <div className="robotCaptchaContentDes1">
                We noticed unusual activity from your account so we've logged
                you out.
              </div>

              <div className="robotCaptchaContentDes2">
                Follow the next steps within 1 day so we can try to get you back
                into your account before it's disabled.
              </div>
            </div>
            <div className="robotCaptchaContent1">
              <div className="robotCaptchaContentInputCont">
                <input type="checkbox" value="" onChange={e => handleChange(e)} /> I'm not a robot
              </div>
              <div className="robotCaptchaContentDes3">
                <p>
                  This helps us to combat harmful conduct, detect and prevent
                  spam and maintain the integrity of our Products. 
                  </p>
                  <p>
                  We’ve used
                  Google's reCAPTCHA Enterprise product to provide this security
                  check. Your use of reCAPTCHA Enterprise is subject to Google’s
                  Privacy Policy and Terms of Use.
                  </p>
                  <p>
                   reCAPTCHA Enterprise collects
                  hardware and software information, such as device and
                  application data, and sends it to Google to provide, maintain,
                  and improve reCAPTCHA Enterprise and for general security
                  purposes. This information is not used by Google for
                  personalized advertising.
                </p>
              </div>
            </div>
          </div>
          <div className="robotCaptchaNextBtnCont">
            <div className="BTTTT2222">
              <Button text={"Next"} className="BTTTT" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RobotCaptchaScreen;
