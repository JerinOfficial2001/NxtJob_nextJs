import React from "react";
import Button from "../Button";
import Text from "../Text";
import MotionCard from "../MotionCard";
import { classNames } from "@/src/utils/Classname";

export default function ResumeCard({ setresumeHover, job, customClass }) {
  return (
    <MotionCard
      onMouseLeave={() => {
        setresumeHover("");
      }}
      customClass={classNames(
        customClass,
        "bg-white h-[111px] w-[213px] absolute top-[100px] p-3"
      )}
      hoverItem={
        <div className="flex flex-col justify-center gap-5 ">
          <div className="flex flex-col justify-center">
            <Text
              name={"Gopal_Sapara_V1"}
              customClass={"text-[#212121] text-[14px]"}
            />
            <Text
              fetchItem={job.resumeName}
              name={"% Match with Job Description"}
              customClass={"text-[#059669] text-[12px] "}
            />
          </div>
          <div>
            <Button
              title={"Customize It"}
              customClass={
                "bg-[#8246FD] text-[#FFFFFF] font-semibold w-[193px] h-[32px]"
              }
            />
          </div>
        </div>
      }
    />
  );
}
