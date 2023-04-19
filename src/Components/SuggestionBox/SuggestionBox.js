import React from "react";
import "./SuggestionBox.css";
import ImgTag from "../ImgTag";
import Button from "../Button";

const SuggestionBox = () => {
  const listOfUser = [
    {
      name: "davinder",
      profileImage: "../images/inputIcons/profile.png",
      status: " Follows you",
    },
    {
      name: "jaspalSingh",
      profileImage: "../images/inputIcons/profile.png",
      status: "Suggested for you",
    },
    {
      name: "simarjeet",
      profileImage: "../images/inputIcons/profile.png",
      status: " Follows you",
    },
    {
      name: "  sartaj",
      profileImage: "../images/inputIcons/profile.png",
      status: "Suggested for youu",
    },
    {
      name: "luckySingh",
      profileImage: "../images/inputIcons/profile.png",
      status: " Follows you",
    },
  ];

  return (
    <div className="suggestionContainer">
      <div className="userDetails">
        <div className="userProfile">
          <div>
            <ImgTag src={"../images/inputIcons/profile.png"} width={60} />
          </div>
          <div className="userDetail">
            <h5>User Name</h5>
            <span> title </span>
          </div>
        </div>

        <div className="switchButton">
          <Button text={"Switch"} />
        </div>
      </div>

      <div className="suggestionHeading">
        <span>Suggestion for you</span>
        <Button text={"See All"} />
        {/* <span className="">See All</span> */}
      </div>

      <div className="suggestedUser">
        {listOfUser.map((item, ind) => {
          return (
            <div className="suggestedUserProfile">
              <div className="userProfile" key={ind}>
                <div>
                  <ImgTag src={item.profileImage} width={34} />
                </div>
                <div className="userDetail">
                  <h5>{item.name} </h5>
                  <span> {item.status}</span>
                </div>
              </div>

              <div className="switchButton">
                <Button text={"Follow"} />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default SuggestionBox;
