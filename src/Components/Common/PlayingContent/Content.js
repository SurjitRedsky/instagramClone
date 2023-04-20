import React from "react";
import "./Content.css";
import ContentHeader from "../ContentHeader";
import ImgTag from "../../ImgTag";

const Content = () => {
  return (
    <div className="playingContent">
      <div className="contentHeader">
        <ContentHeader />
      </div>
      <div className="content">

        <ImgTag src={"../images/demo.jpeg"} />
      </div>
      <div className="filedIcons">
        <div className="LikeShare">
          <ImgTag src={"../images/inputIcons/blackHeart.png"} width={20} height={23} />
          <ImgTag src={"../images/inputIcons/blackIconComment.png"} width={20} height={23} />
          <ImgTag src={"../images/inputIcons/shareBlackIcon.png"} width={20} height={23} />

        </div>
        <div className="saveContent">
          <ImgTag src={"../images/inputIcons/saveBlackIcon.png"} width={20} height={23} />
        </div>
      </div>
      <div className="contentDescription">
      </div>
    </div>
  );
};

export default Content;
