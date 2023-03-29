import React from 'react';
import './LoginForm.css';
import instaLogo from '../images/instaBlackLogo.png';
import appleAppStore from '../images/Yfc020c87j0.png';
import googleAppStore from '../images/c5Rp7Ym-Klz.png';

const LoginForm = () => {
  return (
    <div className="loginform">
      <div className="loginContainer">
        <div className="icon">
          <img src={''} />
        </div>

        <form className="form">
          <input type="text" placeholder='Phone number, username or email address'></input>
          <input type="password" placeholder='Password'></input>
          <button className='loginBtn'>Log in</button>
          <div className='horizontal'>
            <div className='line'>
              <hr />

            </div>

            <div>
              <span>OR</span>

            </div>
            <div className='line'>

              <hr />
            </div>

          </div>

          <a href='*'>Log in with Facebook</a>
          <span>Forgotten your Password?</span>


        </form>
      </div>
      <div className="signUp">
        Don't have an account?<a href='*'>signUp </a>
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
