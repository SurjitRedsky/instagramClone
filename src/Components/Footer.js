import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="mainFooter">
      <div className="footerLinks">
        <a src="*">Meta </a>
        <a src="*">About </a>
        <a src="*">Blog </a>
        <a src="*">Jobs </a>
        <a src="*">Help </a>
        <a src="*">Api </a>
        <a src="*">Privacy </a>
        <a src="*">Terms </a>
        <a src="*">Top Accounts </a>
        <a src="*">Locations </a>
        <a src="*">instagram Lite </a>
        <a src="*">Contact Uploading & Non-Users </a>
        <a src="*">Meta Verified </a>
      </div>
      <div className="firstLine">
        <select id="" className="laguageSelection">
          <option value="english" selected>
            English
          </option>
          <option value="hindi">Hindi</option>
          <option value="punjabi">Punjabi</option>
          <option value="englishUk">English(UK)</option>
        </select>
        <span>© 2023 Instagram from Meta </span>
      </div>
    </footer>
  );
};

export default Footer;
