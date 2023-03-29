import React from "react";
import "./Login.css";
import img from '../Images/instagramAdd.png'


const Login = () => {
  return (
    <section className="section">
      <div className="main">
        <article className="loginPage">
          <div className="ImageContainer">

            <img src={img} ></img>
          </div>
          <div className="loginContainer">login</div>
        </article>
      </div>

      <footer>footer</footer>
    </section>
  );
};
export default Login;
