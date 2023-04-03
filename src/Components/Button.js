import React from "react";

const Button = ({type,className,id,onClick,text,fontIcon} ) => {
  return (
    <>
      <button
        type={type}
        className={className}
        id={id}
        onClick={onClick}
        fontIcon={fontIcon}
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
