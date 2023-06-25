/** @format */

import React from "react";
import * as Icon from "react-icons/bi" 
import { classNames } from "../utils/Classname";
import { color } from "framer-motion";

const SearchIcon = ({color,fontSize}) => {
   return (
      <Icon.BiSearch color={color} fontSize={fontSize}/>
   );
};

export default SearchIcon;
