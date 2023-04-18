import React from "react";
import "./HomePage.css";
import LeftHeader from "../../components/Header/LeftHeader";
import Footer from "../../components/Footer/Footer";
import MainContent from "../../components/MainContent/MainContent";


const HomePage = () => {
  return (
    <div className="homePage">
      <div className="leftContainer">
        <LeftHeader />
      </div>
      <div className="rightContainer">
<MainContent/>
      </div>

    </div>
  );
};

export default HomePage;
