/** @format */

import React, { useState } from "react";
import MenuItem from "../components/MenuItem";
import { useRouter } from "next/router";


export default function SideBar({SIDEBAR_ITEMS,selectedTab, setselectedTab,setopenMenu}) {


   return (
      <div className="w-100  flex flex-col gap-3  px-2 max-[1000px]:p-4">
         {SIDEBAR_ITEMS?.map((item) => {
            return (
               <>
               <MenuItem
               key={item?.id}
               customeClass={"p-4 max-[1000px]:hidden"}
               location={selectedTab}
               onClick={() => {
                 setselectedTab(item?.to);
                 
               }}
                  data={item}
                  activeClass={"bg-[#8246FD] text-[#fff]"}
                  nonActiveClass={"bg-[#fff] text-[#000]"}
               />
               <MenuItem
               customeClass={"p-4 max-[1000px]:p-7 min-[1000px]:hidden"}
               location={selectedTab}
               setopenMenu={setopenMenu}
               setselectedTab={setselectedTab}
                  data={item}
                  activeClass={"bg-[#8246FD] text-[#fff]"}
                  nonActiveClass={"bg-[#fff] text-[#000]"}
               />
               </>
               
            );
         })}
      </div>
   );
}
