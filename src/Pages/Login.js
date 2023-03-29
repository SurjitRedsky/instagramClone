import React from "react";
import "./Login.css";
import img from "../images/instagramAdd.png";
import Footer from "../components/Footer";
import LoginForm from "../components/LoginForm";

const Login = () => {
  return (
    <>
      <section className="section">
        <div className="main">
          <div className="imageContainer">
            <img src=""></img>
          </div>
          <LoginForm />
        </div>
      </section>
      <Footer />
    </>
  );
};
export default Login;
