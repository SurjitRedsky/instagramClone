import React, { useState } from "react";
import "./AddBirthDate.css";

import Footer from "../../components/Footer/Footer";

import AnchorTag from "../../components/AnchorTag";
import ImgTag from "../../components/ImgTag";

import Button from "../../components/Button";
import AppStoreIcons from "../../components/Common/AppStoreIcons/AppStoreIcons";
import LoginSignupOption from "../../components/Common/LoginSignupOption";
import DatePicker from "../../components/Common/DatePicker/DatePicker";

const AddBirthDate = () => {
  return (
    <div className="AddBirthDatePanel">
      <div className="birthDateContainer">
        <div className="selectDatePanel">
          <div className="cakeIcon">
            <ImgTag src={"/images/birthDayCake.png"} width={150} />
            <h4 className="headingForBirth">Add Your Birthday</h4>

            <p className="publicProfile">This won't be a part of your public profile.</p>
            <AnchorTag
            className={"question"}
              href={"*"}
              text={"Why do I need to provide my birthday?"}
            />
          </div>
          <div className="dateSelection">
            <DatePicker />
            <p className="birthDateDescription ">
            <span className="wearing"> You need to enter the date you were born</span>Use your own birthday,
              even if this account is for a business, a pet, or something else
            </p>
          </div>
          <div className="nextBackBtn">
            <Button className={"nextBtn"} text={"next"} />
            <AnchorTag href={"*"} text={"Go Back"} />
          </div>
        </div>
        <LoginSignupOption
          label={"Have an account?"}
          linkText={"Log In"}
          linkUrl={"/accounts/login"}
        />

        <AppStoreIcons />
      </div>
      <Footer />
    </div>
  );
};

export default AddBirthDate;
