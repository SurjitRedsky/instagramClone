import React from "react";
import Button from "../Button";
import ImgTag from "../ImgTag";

const AddDecriptionPost = ({ handleBackClick, currentUser, link }) => {
  //convert uri to url
  const convert = (uri) => {
    const encoded = encodeURI(uri.uri);
    return encoded;
  };

  return (
    <div className="createPostCont">
      <div className="addCaptionHeading">
        <Button
            text={"Back"}
            className="postModalBackBtn"
            onclick={handleBackClick}
          />
          <h4> Create New Post </h4>
          <Button text={"Share"} className="postModalNextBtn" />
      </div>
      <div className="uploadPostModalWithUser">
        <div className="uploadPostModalImg">
          <ImgTag src={link} width={450} />
        </div>

        <div className="uploadPostModalUser">
          <div className="userNameCont">
            <ImgTag
              src={
                currentUser?.profileImage?.uri
                  ? convert(currentUser?.profileImage?.uri)
                  : " ../images/inputIcons/profile.png"
              }
              width={30}
            />
            <h4> {currentUser?.userName}</h4>
          </div>
          <div className="writeCaptionBox"></div>
          <div className="uploadPostOption"></div>
        </div>
      </div>
    </div>
  );
};

export default AddDecriptionPost;
