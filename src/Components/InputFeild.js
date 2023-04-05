import React from "react";

const InputFeild = ({ type, className, id,placeholder,onchange,name }) => {
  return (
    <>
      <input
        type={type}
        className={className}
        id={id}
        placeholder={placeholder}
        onChange={onchange}
        name={name}
      ></input>
    </>
  );
};

export default InputFeild;
