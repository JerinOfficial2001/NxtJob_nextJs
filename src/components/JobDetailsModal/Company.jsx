/** @format */

import React, { useState } from "react";
import UIUXimage from "../../assets/UIUX.png";
import Image from "next/image";
import Text from "../Text";
import EditIcon from "@/src/assets/EditIcon";
import Button from "../Button";
import { generateId } from "@/src/utils/GenerateId";
import { useDispatch } from "react-redux";

import { toast } from "react-hot-toast";
import { editJob, getJobById } from "@/src/store/jobReducer";

export default function Company({ jobs, inputDatas, setinputDatas }) {
   const { address, industry, employeesCount, website, description, companyName, jobType } = inputDatas;
   const [change, setchange] = useState(false);
   const dispatch = useDispatch();

   const handleSubmit = async () => {
      if (companyName !== "" && description !== "" && website !== "" && employeesCount !== "" && industry !== "" && address !== "" && jobType !== "") {
         const body = {
            id: jobs.id,
            ...inputDatas,
         };
         await dispatch(editJob(body));
         dispatch(getJobById(body?.id));
         setchange(false);
        toast.success("Job Updated Successfully")
    } else {
      toast.error("You have missed some field!")
   }}
   return (
      <>
         <h1 className="font-semibold max-[1000px]:ml-7">Company info</h1>
         {!change ? (
            <>
               <div
                  className="absolute top-6 right-4 cursor-pointer"
                  onClick={() => {
                     setchange(true);
                     setinputDatas(jobs);
                  }}>
                  <EditIcon />
               </div>
               <div className="flex-col ">
                  <div className=" flex items-center gap-2 pt-5">
                     <Image
                        alt="loading"
                        src={UIUXimage}
                        height={"100%"}
                        width={"100%"}
                     />
                     <Text name={jobs.companyName} />
                  </div>
                  <p className="text-justify">{jobs.description}</p>
                  <Text name={"Website"} />
                  <a href="">{jobs.website}</a>

                  <Text name={"Industry"} />
                  <p>{jobs.industry}</p>
                  <Text name={jobs.employeesCount} />

                  <Text name={"Address"} />
                  <p>{jobs.address}</p>
               </div>
            </>
         ) : (
            <>
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
                     onClick={() => {
                        handleSubmit();
                     }}
                  />
               </div>
               <div>
                  <div className=" flex items-center gap-2 pt-5">
                     <Image
                        alt="loading"
                        src={UIUXimage}
                        height={"100%"}
                        width={"100%"}
                     />
                     <div className="flex flex-col w-[100%]">
                        <Text
                           name={"Company Name"}
                           customClass={"text-md font-semibold mb-1"}
                        />
                        <input
                           type="text"
                           className="rounded-md border-[#D0D5DD] w-[55%]"
                           style={{ boxShadow: "0px 0px 2px 0px" }}
                           value={companyName}
                           onChange={(e) => {
                              setinputDatas({
                                 ...inputDatas,
                                 companyName: e.target.value,
                              });
                           }}
                        />
                     </div>
                  </div>
                  <div className="w-full">
                     <Text
                        name={"Description"}
                        customClass={"text-[#344054] font-semibold mt-5"}
                     />
                     <textarea
                        className=" rounded-md w-[100%] mt-2 border-[#D0D5DD]"
                        style={{
                           height: 130,
                           boxShadow: "0px 0px 2px 0px",
                        }}
                        value={description}
                        onChange={(e) => {
                           setinputDatas({ ...inputDatas, description: e.target.value });
                        }}
                     />
                  </div>
                  <div className="w-full flex gap-2 mb-[20%]">
                     <div className="w-[50%]">
                        <Text
                           name={"Website"}
                           customClass={"text-[#344054] text-[14px] mt-5 font-semibold"}
                        />
                        <input
                           type="text"
                           className=" rounded-md w-[100%] mt-2 border-[#D0D5DD]"
                           style={{
                              boxShadow: "0px 0px 2px 0px",
                           }}
                           value={website}
                           onChange={(e) => {
                              setinputDatas({ ...inputDatas, website: e.target.value });
                           }}
                        />
                        <Text
                           name={"Employees Count"}
                           customClass={"text-[#344054] text-[14px] mt-5 font-semibold"}
                        />
                        <input
                           type="text"
                           className=" rounded-md w-[100%] mt-2 border-[#D0D5DD]"
                           style={{
                              boxShadow: "0px 0px 2px 0px",
                           }}
                           value={employeesCount}
                           onChange={(e) => {
                              setinputDatas({
                                 ...inputDatas,
                                 employeesCount: e.target.value,
                              });
                           }}
                        />
                     </div>

                     <div className="w-[50%] flex flex-col">
                        <Text
                           name={"Industry"}
                           customClass={"text-[#344054] text-[14px] mt-5 font-semibold"}
                        />
                        <input
                           type="text"
                           className=" rounded-md w-[100%] mt-2 border-[#D0D5DD]"
                           style={{
                              boxShadow: "0px 0px 2px 0px",
                           }}
                           value={industry}
                           onChange={(e) => {
                              setinputDatas({ ...inputDatas, industry: e.target.value });
                           }}
                        />
                        <Text
                           name={"Address"}
                           customClass={"text-[#344054] text-[14px] mt-5 font-semibold"}
                        />
                        <input
                           type="text"
                           className=" rounded-md w-[100%] mt-2 border-[#D0D5DD]"
                           style={{
                              boxShadow: "0px 0px 2px 0px",
                           }}
                           value={address}
                           onChange={(e) => {
                              setinputDatas({ ...inputDatas, address: e.target.value });
                           }}
                        />
                     </div>
                  </div>
               </div>
            </>
         )}
      </>
   );
}
