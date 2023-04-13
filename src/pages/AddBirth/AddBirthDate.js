import React, { useState, useEffect } from "react";
import "./AddBirthDate.css";

import Footer from "../../components/Footer/Footer";

import AnchorTag from "../../components/AnchorTag";
import ImgTag from "../../components/ImgTag";

import Button from "../../components/Button";
import AppStoreIcons from "../../components/Common/AppStoreIcons/AppStoreIcons";
import LoginSignupOption from "../../components/Common/LoginSignupOption";
import DatePicker from "../../components/Common/DatePicker/DatePicker";
import { useLocation, useNavigate } from "react-router-dom";
import { sendCodeAndAddBirthday } from "../../apiRequests/authApi";

const AddBirthDate = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const user = location.state?.user;
  console.log("user->", user);

  //initial state for birthdate
  const initialBirthDate = {
    month: new Date().getMonth() + 1,
    day: new Date().getDate(),
    year: new Date().getFullYear(),
  };

  const [birthDate, setBirthDate] = useState(initialBirthDate);
  const [btnDisale, setBtnDisable] = useState(true);

  //state for set string date into object
  const [newDateFormat, setNewDateFormat] = useState(
    new Date(`${birthDate.year},${birthDate.month},${birthDate.day}`)
  );

  useEffect(() => {
    if (birthDate.year < new Date().getFullYear() - 7) {
      setBtnDisable(false);
    } else {
      setBtnDisable(true);
    }
    setNewDateFormat(
      new Date(`${birthDate.year},${birthDate.month},${birthDate.day}`)
    );
  }, [birthDate]);

  const onclick = (e) => {
    e.preventDefault();

    sendCodeAndAddBirthday(
      { dateOfBirth: newDateFormat, userName: user?.email, id: user?._id },
      navigate
    );
  };

  return (
    <div className="AddBirthDatePanel">
      <div className="birthDateContainer">
        <form className="selectDatePanel" onSubmit={onclick}>
          <div className="formlayout">
            <div className="cakeIcon">
              <ImgTag src={"/images/birthDayCake.png"} width={140} />
              <h4 className="headingForBirth">Add Your Birthday</h4>

              <p className="publicProfile">
                This won't be a part of your public profile.
              </p>
              <AnchorTag
                className={"question"}
                href={"*"}
                text={"Why do I need to provide my birthday?"}
              />
            </div>
            {/* <form> */}

            <div className="dateSelection">
              <DatePicker setBirthDate={setBirthDate} birthDate={birthDate} />
              <p className="birthDateDescription ">
                <span className="wearing">
                  {" "}
                  You need to enter the date you were born
                </span>
                Use your own birthday, even if this account is for a business, a
                pet, or something else
              </p>
            </div>
            <div className="nextBackBtn">
              <Button
                className={"nextBtn"}
                text={"Next"}
                disabled={btnDisale}
              />
              <AnchorTag href={"*"} text={"Go Back"} />
            </div>
            {/* </form> */}
          </div>
        </form>
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
