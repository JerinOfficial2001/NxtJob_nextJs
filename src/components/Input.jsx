/** @format */

import React from "react";
import { classNames } from "../utils/Classname";

const Input = ({ placeholder,customClass,...props}) => {
   return (
      
         <input
         placeholder={placeholder}
            {...props}
            className={classNames(customClass?customClass:"text-gray-900 w-full  h-[45px]   ","px-3  py-2 ring-1 rounded-md ring-gray-300 text-sm font-semibold  shadow-sm")}
         />
   )
};

export default Input;
