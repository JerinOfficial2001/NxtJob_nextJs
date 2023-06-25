/** @format */

import React from "react";

const BoardsIcon = ({ color }) => {
   return (
      <svg
         width="32"
         height="32"
         viewBox="0 0 32 32"
         fill="none"
         xmlns="http://www.w3.org/2000/svg">
         <path
            d="M5 15.0833V5H15.0833V15.0833H5ZM5 27V16.9167H15.0833V27H5ZM16.9167 15.0833V5H27V15.0833H16.9167ZM16.9167 27V16.9167H27V27H16.9167Z"
            fill={color ? color : "white"}
         />
      </svg>
   );
};

export default BoardsIcon;
