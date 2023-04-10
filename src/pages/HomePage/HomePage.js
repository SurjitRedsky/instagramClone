import React from "react";
import "./HomePage.css";
import LeftHeader from "../../components/Header/LeftHeader";
import Footer from "../../components/Footer/Footer";

const HomePage = () => {
  return (
    <div className="homePage">
      <div className="leftContainer">
        <LeftHeader />
      </div>
      <div className="centreContainer">centre
      <Footer/>
      </div>
      <div className="rightContainer">rightSide</div>
    </div>
  );
};

export default HomePage;
