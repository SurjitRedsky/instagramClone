import React from "react";
import "./Login.css";
import img from "../Images/instagramAdd.png";
import Footer from "../Components/Footer";
import LoginForm from "../Components/LoginForm";

const Login = () => {
  return (
    <>
      <section className="section">
        <div className="loginPage">
          <div className="main">
            <div className="imageContainer">
              <img src=""></img>
            </div>
            <div className="loginContainer">
              <LoginForm />
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};
export default Login;
