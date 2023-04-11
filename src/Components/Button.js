import React from "react";

const Button = ({ type, className, id, onClick, text,disabled ,fontIcon}) => {
  // console.log("kedhkjs",disable);
  return (
    <>
      <button
        type={type}
        className={className}
        id={id}
        onClick={onClick}
       disabled={disabled}
      >
        {
          fontIcon
        }
        {
          text
        }
      </button>
    </>
  );
};

export default Button;
