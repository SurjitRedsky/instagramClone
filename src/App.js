
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





function App() {
  return (
    <div className="app">


      <Routes>
        <Route path="/" element={<Login/>} />
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
