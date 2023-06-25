/** @format */

import { useRouter } from "next/router";
import React from "react";
import { classNames } from "../utils/Classname";

const MenuItem = ({
  data,
  activeClass,
  nonActiveClass,
  onClick,
  location,
  customeClass,
  setopenMenu,
  setselectedTab,
}) => {
  const router = useRouter();

  return (
    <>
      <>
        <div
          onClick={
            !onClick
              ? () => {
                  router.push(data?.to);
                }
              : onClick
          }
          className={classNames(
            data?.to === location ? activeClass : nonActiveClass,
            customeClass ? customeClass : null,
            "p-2 flex items-center gap-3 rounded-lg cursor-pointer max-[1000px]:hidden"
          )}
        >
          <div className="flex items-center justify-center  h-[3vh] w-[3vw]">
            <span>{data?.icon}</span>
          </div>
          <div className="flex items-center h-[3vh] xl:w-[10vw]">
            <span>{data?.title}</span>
          </div>
        </div>
      </>
      <>
        <div
          onClick={() => {
         
            setselectedTab(data?.to);
            setopenMenu(false)
          }}
          className={classNames(
            data?.to === location ? activeClass : nonActiveClass,
            customeClass ? customeClass : null,
            "p-2 flex items-center gap-3 rounded-lg cursor-pointer min-[1000px]:hidden"
          )}
        >
          <div className="flex items-center justify-center  h-[3vh] w-[3vw]">
            <span>{data?.icon}</span>
          </div>
          <div className="flex items-center h-[3vh] xl:w-[10vw]">
            <span>{data?.title}</span>
          </div>
        </div>
      </>
    </>
  );
};

export default MenuItem;
