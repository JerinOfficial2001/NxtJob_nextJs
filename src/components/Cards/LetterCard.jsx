import React from "react";
import Button from "../Button";
import Input from "../Input";
import CancelIcon from "@/src/assets/CancelIcon";
import Text from "../Text";
import MotionCard from "../MotionCard";
import { classNames } from "@/src/utils/Classname";

export default function LetterCard({
  setletterHover,
  name,
  title,
  customClass,
}) {
  return (
    <MotionCard
      onMouseLeave={() => {
        setletterHover("");
      }}
      customClass={classNames(
        customClass,
        "bg-white h-[96px] w-[362px] p-3 absolute top-[100px] max-[1000px]:left-0 max-[1000px]:w-[300px]"
      )}
      hoverItem={
        <div className="flex flex-col justify-center gap-2 ">
          <div className="flex items-center justify-between">
            <Text name={title} customClass={"text-[#212121] text-[14px]"} />
            <div onClick={()=>{setletterHover("");}}>
              <CancelIcon  />
            </div>
          </div>
          <div className="flex items-center justify-between">
            <Input
              placeholder={name}
              customClass={"text-black h-[48px] w-[167px]"}
            />
            <Button
              title={"Create New "}
              customClass={
                "bg-[#8246FD] text-[#FFFFFF] font-semibold h-[48px] w-[167px]"
              }
            />
          </div>
        </div>
      }
    />
  );
}
