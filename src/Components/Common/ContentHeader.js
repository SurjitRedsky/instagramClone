import React from "react";
import ImgTag from "../ImgTag";
import Button from "../Button";

const ContentHeader = () => {
  return (
    <div className="contentHeader">
      <div className="userProfile">
      <div>
        <ImgTag src={"../images/inputIcons/profile.png"} width={35} />
      </div>
      <div className="userDetail">
        <h5>User Name</h5>
        <span> title </span>
      </div>
      </div>
      <div className="optionButton">
        <Button  text={"..."}/>
        {/* <div>...</div> */}
      </div>
    </div>
  );
};

export default ContentHeader;
