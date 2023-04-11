import React from "react";
import './Common/common.css'

const InputFeild = ({ type, className, id,placeholder,onchange,name,required,value }) => {
  return (
    
     <div
        className={`inputWithLabel ${
          value?.length > 0 ? "currentValue" : "changeValue"
        }`}
      >
<div className="userNameInput">
          {value.length > 0 && (
            <span className="spanPassword"> {placeholder}</span>
          )}

      <input
      required={required}
        type={type}
        className={className}
        id={id}
        placeholder={placeholder}
        onChange={onchange}
        name={name}
      ></input>
    </div>
    <div className="input ">

    </div>
    </div>

  );
};

export default InputFeild;
