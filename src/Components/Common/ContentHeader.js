import React from "react";
import ImgTag from "../ImgTag";
import Button from "../Button";
// import '../../content.css'
import '../Common/PlayingContent/Content.css'
const ContentHeader = ({ data }) => {

  // convert uri
  const convert = (url) => {
    if (url.uri) {
      const encoded = encodeURI(url.uri);
      return encoded;
    }
    return url;
  };

  return (
    <div className="contentHeader">
      <div className="userProfile">
        <div className="userProfileImg">
          {/* <ImgTag src={convert(data?.profileImage?.uri)} width={35} /> */}
          <ImgTag src={data?.profileImage ? convert(data?.profileImage) : " ../images/inputIcons/profile.png"} width={35} />
        </div>
        <div className="userDetailOnPost">
          <h5>{data.userName}</h5>
          <span> title </span>
        </div>
      </div>
      <div className="optionButton">
        <Button text={"..."} />
      </div>
    </div>
  );
};

export default ContentHeader;
