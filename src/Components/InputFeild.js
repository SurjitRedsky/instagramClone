import React from "react";

const InputFeild = ({ type, className, id,placeholder,onchange,name,required }) => {
  return (
    <>
      <input
      required={required}
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
