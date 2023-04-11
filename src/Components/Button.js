
import React from "react";

const Button = ({ type, className, id, onclick, text, disabled, fontIcon, styles }) => {
  // console.log("kedhkjs",disable);
  return (
    <>
      <button
        type={type}
        className={className}
        id={id}
        onClick={onclick}
        disabled={disabled}
        style={styles}
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
