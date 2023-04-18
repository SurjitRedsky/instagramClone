import React from "react";
import './Common/common.css'

const InputField = ({
  type, className,
  id, placeholder, onchange, name,
  required, value, innerInputContent, showBtn, autoFocus, pattern, maxNum, minNum,
  handleBlur = () => { }
}) => {

  return (

    <div
      className={`inputWithLabel`}
    >
      <div className={`userNameInput ${value?.length > 0 ? "currentValue" : "changeValue"
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
          value={value}
          onBlur={() => handleBlur(name)}
          autoFocus={autoFocus}
          pattern={pattern}
          min={minNum}
          max={maxNum}
        >
        </input>
      </div>
      <div className={`${showBtn ? "show" : "InputIneerBtnHide"}`} >
        {innerInputContent}
      </div>
    </div>

  );
};

export default InputField;
