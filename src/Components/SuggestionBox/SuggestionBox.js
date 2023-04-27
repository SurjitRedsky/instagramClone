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

 // convert uri
 const convert = (url) => {
  if (url.uri) {
    const encoded = encodeURI(url.uri);
    return encoded;
  }
  return url;
};
  // console.log("user÷->", user);
  return (
    <div className="suggestionContainer">
      <div className="userDetails">
        <div className="userProfile">
          <div>
            <ImgTag
              src={
                user?.profileImage?.uri
                  ? convert(user?.profileImage?.uri)
                  : " ../images/inputIcons/profile.png"
              }
              width={60}
            />
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
              <div className="userProfile">
                <div className="suggestedUserProfileImg">
                  <ImgTag
                    src={
                      user?.profileImage?.thumbnail?.uri
                        ? convert(user?.profileImage?.thumbnail?.uri)
                        : " ../images/inputIcons/profile.png"
                    }
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
