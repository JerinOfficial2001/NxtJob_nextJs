/** @format */

import React from "react";
import Button from "./Button";
import AddIcon from "../assets/AddIcon";

const ListForm = ({ addList, setAddList, handleSubmit, setListName, listName }) => {
   return (
      <div
         className="flex flex-col w-[100%] rounded-md  bg-[#F6F4F4] p-2 "
         style={{ maxWidth: "20vw", minHeight: "74vh" }}>
         {addList ? (
            <div className="flex w-[100%] flex-col gap-4">
               <input
                  autoFocus
                  className="rounded-md w-[100%] mt-2 border-[#D0D5DD] p-2"
                  type="text"
                  value={listName}
                  onChange={(e) => {
                     setListName(e.target.value);
                  }}
               />
               <div className="flex gap-2 items-center justify-between">
                  <Button
                     title={"Cancel"}
                     customClass={" text-[#57A4F2] hover:bg-gray-200 w-[50%]"}
                     onClick={() => {
                        setAddList(false);
                     }}
                  />

                  <Button
                     title={"Save"}
                     customClass={"bg-[#57A4F2] text-[white] hover:bg-gray-300 w-[50%]"}
                     onClick={() => {
                        handleSubmit();
                        setAddList(false);
                     }}
                  />
               </div>
            </div>
         ) : (
            <Button
               customClass={"bg-[#57A4F2] text-[#fff] hover:bg-[#212121]"}
               svgfront={<AddIcon />}
               title={"Add List"}
               onClick={() => setAddList(true)}
            />
         )}
      </div>
   );
};

export default ListForm;
