
import './App.css';
import './components/Common/common.css';
import SignUp from "./pages/signup/SignUp";

import { Route, Routes } from "react-router-dom";
import AddBirthDate from "./pages/addBirth/AddBirthDate";
import CodeVerification from "./pages/codeVerification/CodeVerification";

import LeftHeader from "./components/Header/LeftHeader";
import HomePage from "./pages/homePage/HomePage";
import Button from "./components/Button";
import Login from './pages/login/Login'
import SuggestionBox from './components/SuggestionBox/SuggestionBox';
// import io from 'socket.io-client'
import { useEffect } from 'react';

// socket.io-client

// const SC = {};
// const socket = io("http://localhost:3001", { autoConnect: false });



function App() {
  
  // useEffect(()=>{
  // socket.connect()
  // },[])


  return (
    <div className="app">


      <Routes>
        <Route path="/" element={<Login />} />
        <Route path='/accounts/login' element={<Login />} />
        <Route path="/accounts/emailsignup" element={<SignUp />} />
        <Route path="/accounts/emailsignup/addbirthdate" element={<AddBirthDate />} />
        <Route path="/accounts/emailsignup/codeveified" element={<CodeVerification />} />
        <Route path="/homePage" element={<HomePage />} />
        {/* <Route path='/explore' element={<SuggestionBox/>}/> */}
      </Routes>
    </div>

  );
}

export default App;
