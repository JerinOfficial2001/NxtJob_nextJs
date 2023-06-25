import React from "react";
import Button from "../Button";
import Image from "next/image";
import UIUXimage from "../../assets/UIUX.png";
import { Dialog, Transition } from "@headlessui/react";
import CompanyLogo from "@/src/assets/CompanyLogo";
import LocationIcon from "@/src/assets/LocationIcon";
import DollarIcon from "@/src/assets/DollarIcon";
import Text from "../Text";
import SelectInput from "../SelectInput";
import { useDispatch } from "react-redux";
import { removeJob } from "@/src/store/jobReducer";
import { toast } from "react-hot-toast";

export default function TopBarDetails({
  setOpen,
  cancelButtonRef,
  singleJob,
  inputDatas,
  setinputDatas,
}) {
  const dispatch = useDispatch();
  const OPTIONS = [
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
  const { jobType } = inputDatas;
  return (
    <div className="justify-between xl:w-[100%] flex  pt-9 pb-4 gap-3 item-center border-b-2 boder-[#DCDCDC] max-[1000px]:flex-col">
      <div className=" xl:w-[80%] flex pl-10 gap-3 item-center">
        <div className=" flex items-center justify-center">
          <Image alt="loading" src={UIUXimage} height={"100%"} width={"100%"} />
        </div>
        <div>
          <Dialog.Title
            as="h3"
            className="flex text-base font-semibold leading-6 text-gray-900"
          >
            {singleJob.jobRole}
          </Dialog.Title>
          <div className="mt-2 flex flex-col gap-2 justify-center">
            <p className="text-sm text-[#5A5A5A] flex items-center gap-2">
              <CompanyLogo /> {singleJob.companyName} <LocationIcon />{" "}
              {singleJob.address} <DollarIcon />
              {singleJob.address}
              <Text
                customClass={"font-semibold text-[#8246FD]"}
                name={"View Job Details"}
              />
            </p>
            <p className="text-sm text-[#9E9E9E] flex items-center">
              Job added from {singleJob.jobAddedBy} on{" "}
              {singleJob.jobAddedDateOn}.
            </p>
          </div>
        </div>
      </div>

      <div className="  flex  justify-center gap-2 mr-12 max-[1000px]:mr-0 max-[1000px]:p-3">
        <Button
          title={"Delete"}
          customClass="  h-[32px] w-[130px] justify-center rounded-md bg-red-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-red-500 sm:ml-3 max-[1000px]:w-[160px]"
          onClick={() => {
            dispatch(removeJob(singleJob.id))
              ? toast.success("Deleted Successfully")
              : toast.error("Something went wrong"),
              setOpen(false);
          }}
        />

        <SelectInput
          onChange={(e) => {
            setinputDatas({
              ...inputDatas,
              jobType: e.toLowerCase(),
            });
          }}
          options={OPTIONS}
          customClass={
            "h-[34px] w-[130px] max-[1000px]:w-[160px] flex items-center"
          }
        />
      </div>
    </div>
  );
}
