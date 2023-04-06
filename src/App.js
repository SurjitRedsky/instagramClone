import Login from "./pages/Login/Login";
import './App.css';
import './components/Common/common.css';
import SignUp from "./pages/Signup/SignUp";

import { Route, Router, Routes } from "react-router-dom";
import AddBirthDate from "./pages/AddBirth/AddBirthDate";
import CodeVerification from "./pages/CodeVerification/CodeVerification";
import Home from "./pages/Login/Home";


function App() {
  return (
    <div className="app">
       <Routes>
        <Route path="/" element={<Login />} />
        <Route path='/accounts/login' element={<Login />} />
        <Route path="/accounts/emailsignup" element={<SignUp />} />
       <Route path="/accounts/emailssignup/addbirthdate"  element={<AddBirthDate/>} />
        <Route path="/accounts/emailsignup/codeveified" element={<CodeVerification/>} />
        <Route path="/home" element={<Home/>}/>  
              </Routes> 


      {/* add birth date sign up time */}
      {/* <AddBirthDate /> */}
    
    
    {/* code verification  */}
    {/* <CodeVerification/> */}
    </div>

  );
}

export default App;
