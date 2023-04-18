import Login from "./pages/Login/Login";
import './App.css';
import './components/Common/common.css';
import SignUp from "./pages/Signup/SignUp";

import { Route, Routes } from "react-router-dom";
import AddBirthDate from "./pages/AddBirth/AddBirthDate";
import CodeVerification from "./pages/CodeVerification/CodeVerification";

import LeftHeader from "./components/Header/LeftHeader";
import HomePage from "./pages/HomePage/HomePage";
import Button from "./components/Button";




function App() {
  return (
    <div className="app">


      <Routes>
        <Route path="/" element={<Login />} />
        <Route path='/accounts/login' element={<Login />} />
        <Route path="/accounts/emailsignup" element={<SignUp />} />
        <Route path="/accounts/emailsignup/addbirthdate" element={<AddBirthDate />} />
        <Route path="/accounts/emailsignup/codeveified" element={<CodeVerification />} />
        <Route path="/homePage" element={<HomePage />} />
      </Routes>
    </div>

  );
}

export default App;
