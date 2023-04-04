import Login from "./pages/Login/Login";
import './App.css';
import './components/Common/common.css';
import SignUp from "./pages/Signup/SignUp";

import { Route, Router, Routes } from "react-router-dom";
import AddBirthDate from "./pages/AddBirth/AddBirthDate";


function App() {
  return (
    <div className="app">
      {/* <Routes>
        <Route path="/" element={<Login />} />
        <Route path='/accounts/login' element={<Login />} />
        <Route path="/accounts/emailsignup" element={<SignUp />} />
      </Routes> */}
      <AddBirthDate />
    </div>

  );
}

export default App;
