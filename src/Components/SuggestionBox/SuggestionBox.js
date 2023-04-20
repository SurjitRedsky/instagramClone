import React, { useEffect, useState } from "react";
import "./SuggestionBox.css";
import ImgTag from "../ImgTag";
import Button from "../Button";
import SuggestionBoxFooter from "./SuggestionBoxFooter";
import { getAllUsers } from "../../apiRequests/userApi";

const SuggestionBox = ({ user }) => {
  const [listOfUser, setListOfUser] = useState([]);

  const getUsers = async (token) => {
    await getAllUsers(token)
      .then((response) => {
        setListOfUser(response.data.users);
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    const token = JSON.parse(localStorage.getItem("token"));
    getUsers(token);
  }, []);

  
 
  return (
    <div className="suggestionContainer">
      <div className="userDetails">
        <div className="userProfile">
          <div>
            <ImgTag src={"../images/inputIcons/profile.png"} width={60} />
          </div>
          <div className="userDetail">
            <h5>{user?.userName}</h5>
            <span> {user?.firstName} </span>
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
        {listOfUser.map((user, ind) => {
          return (
            <div className="suggestedUserProfile" key={ind}>
              <div className="userProfile" >
                <div>
                  <ImgTag
                    src={
                      user?.profileImage?.url 
                        ? user?.profileImage.url
                        : "../images/inputIcons/profile.png"
                    }
                    width={34}
                  />
                </div>
                <div className="userDetail">
                  <h5>{user?.userName} </h5>
                  <span> {user?.firstName}</span>
                </div>
              </div>

              <div className="switchButton">
                <Button text={"Follow"} />
              </div>
            </div>
          );
        })}
      </div>

      <div>
        <SuggestionBoxFooter />
      </div>
    </div>
  );
};

export default SuggestionBox;
