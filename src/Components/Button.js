import React from "react";

const Button = ({ type, className, id, onClick, text,disabled }) => {
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
          text
        }
      </button>
    </>
  );
};

export default Button;
