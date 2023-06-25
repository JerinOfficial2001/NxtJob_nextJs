/** @format */

import { Fragment, useRef, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import Button from "./Button";
import Input from "./Input";
import SelectInput from "./SelectInput";
import Text from "./Text";
import InfoIcon from "./InfoIcon";
import { useDispatch } from "react-redux";
import { addJob } from "../store/jobReducer";
import { generateId } from "../utils/GenerateId";
import { toast } from "react-hot-toast";
import { classNames } from "../utils/Classname";
import { Select } from "@radix-ui/react-select";

export const OPTIONS = [
   {
      title: "Saved",
      value: "Saved",
   },
   {
      title: "Applied",
      value: "Applied",
   },
   {
      title: "Interviewing",
      value: "Interviewing",
   },
   {
      title: "Offer",
      value: "Offer",
   },
   {
      title: "Rejected",
      value: "Rejected",
   },
];

export default function AddJobModal({ open, setOpen }) {
  const cancelButtonRef = useRef(null);

   const TopDetails = () => {
      return (
         <div className="mt-3 text-center sm:ml-4 sm:mt-0 sm:text-center">
            <Dialog.Title
               as="h3"
               className="text-base font-semibold leading-6 text-gray-900">
               Add Job
            </Dialog.Title>
            <div className="mt-2">
               <p className="text-sm text-gray-500">Create job card to track that job.</p>
            </div>
         </div>
      );
   };
   const dispatch = useDispatch();

   const [inputDatas, setinputDatas] = useState({
      companyName: "",
      jobTitle: "",
      jobUrl: "",
      jobType: "",
   });
   const { companyName, jobTitle, jobUrl, jobType } = inputDatas;
   const handleSubmit = async () => {
      if (companyName !== "" && jobTitle !== "" && jobUrl !== "") {
         const body = {
            id: await generateId(),
            ...inputDatas,
         };
         await dispatch(addJob(body));
         setOpen(false);
         setinputDatas({
            companyName: "",
            jobTitle: "",
            jobUrl: "",
            jobType: "",
         });
         toast.success("Job Added successfully");
      } else {
         toast.error("All Fields are Mandatory!");
      }
   };

   return (
      <Transition.Root
         show={open}
         as={Fragment}>
         <Dialog
            as="div"
            className="relative z-10"
            initialFocus={cancelButtonRef}
            onClose={setOpen}>
            <Transition.Child
               as={Fragment}
               enter="ease-out duration-300"
               enterFrom="opacity-0"
               enterTo="opacity-100"
               leave="ease-in duration-200"
               leaveFrom="opacity-100"
               leaveTo="opacity-0">
               <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
            </Transition.Child>

        <div className="fixed inset-0 z-10 overflow-y-auto ">
          <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0 ">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              enterTo="opacity-100 translate-y-0 sm:scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 translate-y-0 sm:scale-100"
              leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            >
              <Dialog.Panel className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 w-[30vw] sm:max-w-lg max-[1000px]:h-[90%] max-[1000px]:w-[100%] ">
                <div className="bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4 ">
                  <div className="sm:flex sm:items-center justify-center">
                    <TopDetails />
                  </div>
                </div>
                <div className="bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4">
                  <div className="h-fit flex flex-col gap-2">
                    <Input
                      placeholder="Company name"
                      value={companyName}
                      type="text"
                      onChange={(e) => {
                        setinputDatas({
                          ...inputDatas,
                          companyName: e.target.value,
                        });
                      }}
                    />
                    <Input
                      placeholder="Job title"
                      value={jobTitle}
                      onChange={(e) => {
                        setinputDatas({
                          ...inputDatas,
                          jobTitle: e.target.value,
                        });
                      }}
                    />
                    <Input
                      placeholder="Job Url"
                      value={jobUrl}
                      onChange={(e) => {
                        setinputDatas({
                          ...inputDatas,
                          jobUrl: e.target.value,
                        });
                      }}
                    />

                    <SelectInput
                      options={OPTIONS}
                      onChange={(e) => {
                        setinputDatas({
                          ...inputDatas,
                          jobType: e.toLowerCase(),
                        });
                      }}
                    />
                  </div>
                </div>
                <div className="bg-gray-50  px-4 py-3 flex sm:flex justify-center gap-2 sm:px-6">
                  <Button
                    title={"Cancel"}
                    onClick={() => setOpen(false)}
                    customClass={
                      "inline-flex w-full h-[50px] justify-center rounded-md bg-gray-300 px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm hover:bg-gray-200 sm:ml-3"
                    }
                    ref={cancelButtonRef}
                  />
                  <Button
                    title={"Submit"}
                    customClass="inline-flex w-full h-[50px] justify-center rounded-md bg-red-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-red-500 sm:ml-3 "
                    onClick={() => handleSubmit()}
                  />
                </div>

                <div className="p-6 flex items-center justify-center ">
                  <div className="bg-[#EDE9FE] rounded-lg p-3  flex items-center justify-center gap-4 relative">
                    <div className="flex absolute top-5 left-4">
                      <InfoIcon />
                    </div>
                    <Text
                      customClass={
                        "text-xs text-justify text-[#5A5A5A] p-1 ml-7"
                      }
                      name={
                        "Did yoy know? You can save job directly from our Extension and have all the data imported in a simple  click! It takes just a few seconds,"
                      }
                    />
                  </div>
                </div>
                {/* <div>Did yoy know? You can save job directly from our Extension and have all the data imported in a simple click! It takes just a few seconds,</div> */}
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  );
}
