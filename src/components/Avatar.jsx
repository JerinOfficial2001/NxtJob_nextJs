/** @format */
import React from "react";
import * as Avatar from "@radix-ui/react-avatar";

const generateShortName = (name) => {
   const splitName = name.split(" ");
   if (splitName.length > 1) {
      return `${splitName[0][0]}${splitName[1][0]}`;
   } else {
      return `${splitName[0][0]}${splitName[0][1]}`;
   }
};

const AvatarComponent = ({ profileDetails }) => (
   <div className="flex gap-5">
      <Avatar.Root className="bg-[#57A4F2] inline-flex h-[45px] w-[45px] select-none items-center justify-center overflow-hidden rounded-full align-middle">
         {profileDetails?.profile_url !== null ? (
            <Avatar.Image
               className="h-full w-full rounded-[inherit] object-cover"
               src={profileDetails?.profile_url}
               alt="loading"
            />
         ) : (
            <Avatar.Fallback className="text-[#fff] leading-1 flex h-full w-full items-center justify-center text-[15px] font-medium">{generateShortName(profileDetails?.name)}</Avatar.Fallback>
         )}
      </Avatar.Root>
   </div>
);

export default AvatarComponent;
