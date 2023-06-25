/** @format */

import React, { useEffect, useState } from "react";
import Button from "../Button";
import Text from "../Text";
import EditIcon from "@/src/assets/EditIcon";
import DeleteIcon from "@/src/assets/DeleteIcon";
import ClockIcon from "@/src/assets/ClockIcon";
import NoItemsImg from "@/src/assets/NoItemsImg";
import { generateId } from "@/src/utils/GenerateId";
import { useDispatch, useSelector } from "react-redux";
import { addJob, addNotes, getJobById, removeNotes } from "@/src/store/jobReducer";

export default function Notes({ inputDatas, job }) {
   const [change, setchange] = useState(false);
   const [note, setnote] = useState("");
   const dispatch = useDispatch();

   const deleteHandler = (note) => {
      dispatch(removeNotes(note));
      dispatch(getJobById(job?.id));
   };

   const addHandler = async () => {
      const body = {
         id: await generateId(),
         job_id: job?.id,
         note: note,
      };

      dispatch(addNotes(body));
      dispatch(getJobById(body?.job_id));
      setchange(false);
   };

   const NotesCard = ({ note }) => {
      return (
         <>
            <div className="bg-white rounded-lg  mt-10">
               <div className="border-b-2 boder-[#DCDCDC]  pb-14 pl-4 pt-2">{note.note}</div>
               <div className="flex justify-between p-2 item-center">
                  <div className="flex items-center gap-2">
                     <ClockIcon />
                     <p
                        className="text-sm "
                        style={{ color: "#9E9E9E", paddingBottom: 5 }}>
                        a few seconds ago
                     </p>
                  </div>
                  <div className="flex gap-3 p-2">
                     <EditIcon />
                     <DeleteIcon
                        onclick={() => {
                           deleteHandler(note);
                        }}
                     />
                  </div>
               </div>
            </div>
         </>
      );
   };

   return (
      <>
         <h1 className="font-semibold max-[1000px]:ml-7">Notes</h1>
         {!change ? (
            <>
               <div className="absolute top-6 right-4 flex gap-2">
                  <Button
                     onClick={() => {
                        setchange(true);
                     }}
                     title={"Create New  Note"}
                     customClass={"bg-[#57A4F2] text-[white] hover:bg-gray-300 "}
                  />
               </div>

               {job?.notes?.length === 0 ? (
                  <div className="flex flex-col  justify-center gap-5 items-center p-28 relative">
                     <NoItemsImg />
                     <Text
                        name={"No notes created"}
                        customClass={"flex bottom-12 font-semibold text-[23px] text-[#5A5A5A]"}
                     />
                     <Text
                        name={<p>You can tap the "Create New Notes" Button to start taking notes!</p>}
                        customClass={" text-[#5A5A5A] w-[20vw] text-center"}
                     />
                  </div>
               ) : (
                  <>
                     {job?.notes?.map((note) => {
                        return <NotesCard note={note} />;
                     })}
                  </>
               )}
            </>
         ) : (
            <div className=" flex justify-center gap-2 pt-5 flex-col">
               <Text name={"Add Note"} />
               <textarea
                  onChange={(e) => setnote(e.target.value)}
                  className=" rounded-xl"
                  style={{
                     height: 100,
                  }}
               />
               <div className="relative">
                  <div
                     className="flex gap-2 absolute"
                     style={{ right: 0 }}>
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
                        onClick={() => {
                           addHandler();
                        }}
                     />
                  </div>
               </div>
            </div>
         )}
      </>
   );
}
