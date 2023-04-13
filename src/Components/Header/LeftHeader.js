import React from "react";
import AnchorTag from "../AnchorTag";
import ImgTag from "../ImgTag";
import "./LeftHeader.css";
import Button from "../Button";
import { useNavigate } from "react-router-dom";

const LeftHeader = () => {
const navigate=useNavigate();


  const headerLinks = [
    {
      url: "*",
      name: "Home",
    },
    {
      url: "https://about.meta.com/",
      name: "Search",
    },
    {
      url: "https://about.meta.com/",
      name: "Explore",
    },
    {
      url: "https://about.meta.com/",
      name: "Reels",
    },
    {
      url: "https://about.meta.com/",
      name: "Messages",
    },
    {
      url: "https://about.meta.com/",
      name: "Notifications",
    },
    {
      url: "https://about.meta.com/",
      name: "Create",
    },
    {
      url: "https://about.meta.com/",
      name: "Profile",
    },
  ];

  const getAllStorage=()=> {
    let data = [];
    for (var i = 0; i<localStorage.length; i++) {
        data[i] = localStorage.getItem(localStorage.key(i));
    }
    return data
  }

  const handleClick=(e)=>{
if(getAllStorage().length>0){
  localStorage.clear();
  navigate("/")
}

  }

  return (
    <div className="leftHeader">
      <div className="leftHeaderIcon">
        <ImgTag src={"/images/binstalogo.png"} width={102} />
      </div>
      <div className="leftHeaderLinks">
        {headerLinks.map((item, index) => {
          return <AnchorTag src={item.url} text={item.name} key={index} />;
        })}
      </div>
      <div className="LogOutBtn">
<Button  text={"Log Out"} onclick={handleClick}/>
      </div>
    </div>
  );
};

export default LeftHeader;
