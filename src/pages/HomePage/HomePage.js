import React from "react";
import "./HomePage.css";
import LeftHeader from "../../components/Header/LeftHeader";
import Footer from "../../components/Footer/Footer";
import PlayListSection from "../../components/PlayListSection/PlayList";

const HomePage = () => {
  return (
    <div className="homePage">
      <div className="leftContainer">
        <LeftHeader />
      </div>
      <div className="centreContainer">
<PlayListSection/>
      {/* <Footer/> */}
      </div>

    </div>
  );
};

export default HomePage;
