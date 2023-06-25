/** @format */

import React from "react";
import TopBar_layout from "./TopBar_layout";
import SideBar from "./SideBar";
import { Toaster } from "react-hot-toast";

export default function Layout({
  children,
  SIDEBAR_ITEMS,
  selectedTab,
  setselectedTab,
  open,
  setopenMenu,
}) {
  return (
    <div
      className=" w-[100vw] h-[100vh] flex flex-col gap-5 bg-[#F5F5F5] max-[1000px]:h-[100vh] max-[1000px]:w-[100%] relative"
     
    >
      <Toaster position="top-center" />
      <TopBar_layout />
      <div className=" flex gap-5 px-4 max-[1000px]:w-[100%]">
        <div className="h-fit  w-[250px] py-5 rounded-md bg-white ml-2  max-[1000px]:hidden">
          <SideBar
            SIDEBAR_ITEMS={SIDEBAR_ITEMS}
            selectedTab={selectedTab}
            setselectedTab={setselectedTab}
          />
        </div>

        <div className="w-[82%] h-[100%] flex flex-col gap-4  max-[1000px]:w-[100%] max-[1000px]:h-[100%] relative">
          {open && (
            <div className="w-[20%] absolute top-20 bg-white h-[75%] rounded-xl z-[10] min-[1000px]:hidden">
              <SideBar
                setopenMenu={setopenMenu}
                SIDEBAR_ITEMS={SIDEBAR_ITEMS}
                selectedTab={selectedTab}
                setselectedTab={setselectedTab}
              />
            </div>
          )}
          <div className="gap-3 flex flex-col h-[100%] w-[100%]">{children}</div>
        </div>
      </div>
    </div>
  );
}
