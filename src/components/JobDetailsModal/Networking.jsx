import React, { useState } from "react";
import NetworkCard from "../NetworkCard";
import NetworkCardContainer from "../NetworkCardContainer";
import ImageSrc from "@/src/assets/ImageSrc";
import userImage from "../../assets/Avatar.png";
import Button from "../Button";
import SearchBar from "../SearchBar";

export default function Networking() {
  const [change, setchange] = useState(false);

  return (
    <>
      <h1 className="font-semibold max-[1000px]:ml-7">Your Network</h1>
      {!change ? (
        <>
          <div className="absolute top-6 right-4 flex gap-2 max-[1000px]:right-0 max-[1000px]:top-14 max-[1000px]:p-1">
            <SearchBar customClass={"max-[1000px]:w-[57%]"}/>
            <Button
              title={"Create New"}
              customClass={"bg-[#57A4F2] text-[white] hover:bg-gray-300"}
            />
          </div>
          <div className=" flex justify-center gap-2 pt-5 flex-col">
            {/* <Text name={"Add Note"} /> */}

            <NetworkCardContainer
              heading={"Follow-Up 1"}
              card={
                <NetworkCard
                  userName={"Monisha Raut"}
                  description={"UI/UX Designer at Crisil"}
                  svg={<ImageSrc src={userImage} />}
                  companyName={"Name of Company"}
                  date={"17 June, 2023"}
                />
              }
            />
          </div>
        </>
      ) : null}
    </>
  );
}
