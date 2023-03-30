import React,{useState,useEffect} from "react";
import "./Login.css";
import addImg1 from "../images/screenshot1.png";
import addImg2 from '../images/screenshot2.png';
import addImg3 from '../images/screenshot3.png';
import addImg4 from '../images/screenshot4.png';


import Footer from "../components/Footer";
import LoginForm from "../components/LoginForm";


const Login = () => {
const [currentImage, setCurrentImage] = useState(null)
const addImages=[addImg1,addImg2,addImg3,addImg4]

  
  useEffect(() => {
    const intervalId = setInterval(() => {
        setCurrentImage(addImages[Math.floor(Math.random() * addImages.length)]);
    }, 3000)
    
    return () => clearInterval(intervalId);
}, [])

  
  
  
  return (
    < div className="loginPanel">
     
        <div className="main">
          <div className="imageContainer">
         
<img src={currentImage} id="add"></img>

     
          </div>
          <LoginForm />
        </div>
      {/* </section> */}
      <div>
      <Footer />
      </div>
    </div>
  );
};
export default Login;
