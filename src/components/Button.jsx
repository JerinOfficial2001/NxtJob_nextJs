/** @format */

import React from "react";
import { classNames } from "../utils/Classname";

const Button = ({ title, customClass,svgfront,svgback, onClick, ...props }) => {
   return (
      <button
      
         {...props}
         onClick={onClick}
         className={classNames(customClass ? customClass : "bg-[#FE5BAC] text-[#fff] hover:bg-[#212121]", " flex items-center justify-center px-4 rounded-md  transition-all ease-in duration-75 cursor-pointer")}>
            {svgfront}
        <span className=" cursor-pointer p-2">{title}</span> 
        {svgback}
        
      </button>
   );
};

export default Button;
