import Login from "./pages/Login";
import './App.css'
import SignUp from "./pages/SignUp";

import { Route, Router, Routes } from "react-router-dom";
import AddBirthDate from "./pages/AddBirthDate";


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
