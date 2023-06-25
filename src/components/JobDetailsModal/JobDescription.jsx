/** @format */

import React, { useState } from "react";
import JobDetailsModal from ".";
import EditIcon from "@/src/assets/EditIcon";
import Button from "../Button";
import ToolBar from "../ToolBar";

export default function JobDescription() {
   const [change, setchange] = useState(false);
   return (
      <>
         <div className="mb-3">
            <h1 className="font-semibold max-[1000px]:ml-7">Description</h1>
            {!change ? (
               <>
                  <div
                     className="absolute top-6 right-4 cursor-pointer"
                     onClick={() => {
                        setchange(true);
                     }}>
                     <EditIcon />
                  </div>
               </>
            ) : (
               <div className="absolute top-6 right-4 flex gap-2">
                  <Button
                     title={"Cancel"}
                     customClass={" text-[#57A4F2] hover:bg-gray-200"}
                     onClick={() => {
                        setchange(false);
                     }}
                  />

                  <Button
                     title={"Save"}
                     customClass={"bg-[#57A4F2] text-[white] hover:bg-gray-300"}
                  />
               </div>
            )}
         </div>
         {!change ? (
            <div></div>
         ) : (
            <div className="flex flex-col">
               <ToolBar />
               <textarea className="w-[100%] bg-[#fff] h-auto border-none min-h-[40vh]"></textarea>
            </div>
         )}
      </>
   );
}
