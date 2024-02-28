import React from "react";
import { Link } from "react-router-dom";

const Button1 = ({ text, bgColor, textColor, handler = () => {} }) => {
  return (
    <Link
    data-aos="fade-down"
      to="/Blogs"
      onClick={handler}
      className={`${bgColor} ${textColor}  drop-shadow-[-8px_4px_6px_rgba(0,0,0,0.4)] py-2 px-9 font-bold ml-2 rounded-full -z-50`}
    >
      {text}
    </Link>
  );
};

export default Button1;
