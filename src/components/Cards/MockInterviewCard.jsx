import React from "react";
import Button from "../Button";
import Text from "../Text";
import ImageSrc from "@/src/assets/ImageSrc";
import UserImg from "../../assets/UserImg.png";
import PlayIcon from "../../assets/PlayIcon";
import MotionCard from "../MotionCard";
import { classNames } from "@/src/utils/Classname";

export default function MockInterviewCard({
  setinterviewHover,
  job,
  customClass,
}) {
  return (
    <MotionCard
      onMouseLeave={() => {
        setinterviewHover("");
      }}
      customClass={classNames(
        customClass,
        "bg-white h-[293px] w-[213px] absolute top-[100px] left-40 max-[1000px]:left-12"
      )}
      hoverItem={
        <div className="flex flex-col justify-center gap-3 ">
          <div className="flex flex-col justify-center">
            <div className="h-[181px] w-[213px] rounded-[8px 8px 0px 0px] relative">
              <ImageSrc src={UserImg} customClass={"h-[100%] w-[100%] "} />
              <div className="w-[33.33px] h-[33.33px] absolute top-20 right-24 hover:transform hover:scale-[1.3] hover:transition-[2s]">
                <PlayIcon />
              </div>
            </div>
            <Text
              name={job.jobTitle}
              customClass={"text-[#212121] text-[14px] pl-3 pt-3"}
            />
            <Text
              fetchItem={job.mockInterviewName}
              name={"% Match with Job Description"}
              customClass={"text-[#059669] text-[12px] pl-3 "}
            />
          </div>
          <div className="pl-2 pt-2">
            <Button
              title={"Give Mock Interview"}
              customClass={
                "bg-[#8246FD] text-justify text-[15px] text-[#FFFFFF] font-semibold w-[193px] h-[32px]"
              }
            />
          </div>
        </div>
      }
    />
  );
}
