import React from "react";
import "./MainContent.css";
import Story from "../StoryContainer/Story";
import Content from "../Common/PlayingContent/Content";

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

      <div className="rightMainContainer">rightSide</div>
    </div>
  );
};

export default MainContent;
