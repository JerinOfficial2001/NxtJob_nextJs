import React from "react";
import Button from "../Button";
import Text from "../Text";
import MotionCard from "../MotionCard";
import { classNames } from "@/src/utils/Classname";
import PencilIcon from "@/src/assets/PencilIcon";
import LayerIcon from "@/src/assets/LayerIcon";
import ImageSrc from "@/src/assets/ImageSrc";
import LinkedinImg from "../../assets/linkedin.png";
import LikedIcon from "@/src/assets/LikedIcon";

export default function NotificationCard({ close, customClass }) {
  return (
    <MotionCard
      onMouseLeave={() => {
        close(false);
      }}
      customClass={classNames(
        customClass,
        "bg-white h-[376px] w-[217px] absolute top-[100px] p-3"
      )}
      hoverItem={
        <div className="flex flex-col justify-center gap-[10px] p-3">
          <div className="flex flex-col justify-center gap-[10px]">
            <div className="flex flex-col justify-center gap-[10px]">
              <Text svg={<LikedIcon/>}
                name={"Like 1 post"}
                customClass={"text-[#212121] text-[14px]"}
              />
              <Text svg={<LikedIcon color={"#5A5A5A"} fill={"#fff"}/>}
                name={"Send a message"}
                customClass={"text-[#212121] text-[14px] "}
              />
            </div>
            <Text
              name={<p>To a ux designer who<br/> works at Google</p>}
              customClass={"text-[#212121] text-[12px] font-semibold p-1"}
            />
            <Text
              name={
                <p className="text-justify text-[10px] text-[#5A5A5A]">
                  Hi [Name],<br/> I'm Gopal Sapara and I am <br/>currently working as a UX<br/>
                  designer. Being passionate about <br/>user experience, I am
                  interested<br/> in exploring the opportunity of<br/> becoming part of
                  Google's UX <br/>team. Could you provide me with<br/> some insights on
                  how to initiate<br/> this process? Thank you for your<br/> time!
                </p>
              }
              customClass={"text-[#059669] text-[12px] "}
            />
          </div>
          <div className="flex items-center justify-between gap-[10px]">
            <div className="flex items-center justify-between gap-[10px]">
              <PencilIcon />
              <LayerIcon />
            </div>
            <ImageSrc customClass={"h-[28px] w-[28px] "} src={LinkedinImg} />
          </div>
        </div>
      }
    />
  );
}
