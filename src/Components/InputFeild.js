import React from "react";

const InputFeild = ({ type, className, id,placeholder }) => {
  return (
    <>
      <input
        type={type}
        className={className}
        id={id}
        placeholder={placeholder}
      ></input>
    </>
  );
};

export default InputFeild;
