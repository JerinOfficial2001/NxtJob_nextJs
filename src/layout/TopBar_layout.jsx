/** @format */

import React from "react";
import Logo from "../assets/Logo";
import NavDropdown from "../components/NavDropdown";
import BellIcon from "../assets/BellIcon";
import AvatarComponent from "../components/Avatar";

export default function TopBar_layout() {
 const OPTIONS = [
      {
         title: "Option 1",
         onclick: () => console.log("Option 1"),
      },
      {
         title: "Option 1",
         onclick: () => console.log("Option 1"),
      },
      {
         title: "Option 1",
         onclick: () => console.log("Option 1"),
      },
      {
         title: "Option 1",
         onclick: () => console.log("Option 1"),
      },
   ];

   return (
      <div className="bg-white p-3 flex flex-row justify-between shadow-md">
         <div className="bg-white flex items-center gap-12 ml-4 ">
            
            <Logo />
<div className="bg-white flex items-center gap-12 ml-4 max-[1000px]:hidden">
<NavDropdown
               label={"Resume Builder"}
               options={OPTIONS}
            />
            <NavDropdown
               label={"Cover Letter"}
               options={OPTIONS}
            />
            <NavDropdown
               label={"LinkedIn Review"}
               options={OPTIONS}
            />
            <NavDropdown
               label={"Interview"}
               options={OPTIONS}
            />
            <NavDropdown
               customClassColors={"bg-[#F7F3FF] text-[#8246FD] hover:bg-[#EAE2FE] hover:text-[#8246FD]"}
               label={"Job Tracker & Networking"}
               options={OPTIONS}
            />
</div>
            
         </div>
         <div className="bg-white flex items-center gap-5">
            <span className="flex items-center justify-center ">
               <BellIcon />
            </span>
            <span>
               <AvatarComponent
                  profileDetails={{
                     name: "John Doe",
                     profile_url: null,
                  }}
               />
            </span>
         </div>
      </div>
   );
}
