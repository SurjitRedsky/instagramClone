import React from "react";
import "./MainContent.css";
import Story from "../StoryContainer/Story";
import Content from "../Common/PlayingContent/Content";
import SuggestionBox from "../SuggestionBox/SuggestionBox";

const MainContent = () => {


// useEffect(() => {
  
// }, [])

// const currentUser=JSON.parse(localStorage.getItem("loginUser"))






  return (
    <div className="homePageMainContent">
      <div className="leftMainContent">
        <div className="storyContainer">
          <Story />
        </div>
        <div className="mainContentList">
          <Content />
        </div>
      </div>

      <div className="rightMainContainer">
        <SuggestionBox/>
      </div>
    </div>
  );
};

export default MainContent;
