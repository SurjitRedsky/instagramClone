import React from "react";
import "./LoginForm.css";
import appleAppStore from "../Images/Yfc020c87j0.png";
import googleAppStore from "../Images/c5Rp7Ym-Klz.png";

const LoginForm = () => {
  return (
    <div className="loginform">
      <div className="form">
        {/* <input type="text"></input> */}
        {/* <input type="password"></input> */}
      </div>
      <div className="faceBookLogin"></div>
      <div className="appStoreIcons">
        <div className="getAppHeading">
          <span> Get the app.</span>
        </div>
        <div className="getAppIcons">
          <img src={appleAppStore} width={130}></img>
          <img src={googleAppStore} width={130}></img>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
