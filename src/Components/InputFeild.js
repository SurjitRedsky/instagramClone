import React from "react";
import './Common/common.css'

const InputFeild = ({ type, className, id,placeholder,onchange,name,required,value,innerInputContent }) => {
  return (
    
     <div
        className={`inputWithLabel`}
      >
<div className={`userNameInput ${
          value?.length > 0 ? "currentValue" : "changeValue"
        } `}>
          {value?.length > 0 && (
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
    <div className={`${value?.length>0 ? "show" :"InputIneerBtnHide" }`} >
{innerInputContent}
    </div>
    </div>

  );
};

export default InputFeild;
