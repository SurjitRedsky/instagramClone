import React from 'react';
import './LoginForm.css';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faFacebookSquare } from '@fortawesome/free-brands-svg-icons'


import appleAppStore from '../images/Yfc020c87j0.png';
import googleAppStore from '../images/c5Rp7Ym-Klz.png';
import blackInstaLogo from '../images/binstalogo.png' 



const LoginForm = () => {
  return (
    <div className="loginForm">
      <div className="loginContainer">
        <div className="icon">
          <img src={blackInstaLogo} width={200}/>
        </div>

        <form className="form">
          <input type="text" placeholder='Phone number, username or email'></input>
          <input type="password" placeholder='Password'></input>
          <button className='loginBtn'>Log in</button>
          <div className='horizontal'>
            <div className='line'>
              <hr />

            </div>

            <div>
              <span>or</span>

            </div>
            <div className='line'>

              <hr />
            </div>

          </div>

         <a href='*' className='facebookIcons'> <FontAwesomeIcon size='1x' icon={faFacebookSquare}/>  Log in with Facebook </a>
          <a href='*' className="forgotPass">Forgot Password?</a>


        </form>
      </div>
      <div className="signUp">
        Don't have an account?<a href='*'>Sign up </a>
      </div>

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
