/** @format */

import { Fragment } from "react";
import { Menu, Transition } from "@headlessui/react";
import DownArrow from "../assets/DownArrow";

function classNames(...classes) {
   return classes.filter(Boolean).join(" ");
}

export default function NavDropdown({ label, options, customClassColors,customClass ,svg,customOptions,svg2}) {
   return (
      <Menu
         as="div"
         className="relative inline-block text-left cursor-pointer">
         <div>
            <Menu.Button
               className={classNames(
                  customClassColors ? `${customClassColors}` : "bg-white text-gray-900 ",
                  customClass?customClass:"flex items-center w-full justify-center gap-x-1.5 rounded-md  px-3 py-2 text-sm font-semibold  hover:bg-gray-50",
               )}>
               <span className="flex items-center justify-center h-100 mb-1"> {label}</span>
             <span className="flex items-center justify-center h-100">
                 { svg?svg:
                  <DownArrow />}
               </span>
               {/* // <span className="flex items-center justify-center h-100">
               //   { svg2?svg2:
               //    <DownArrow />}
               // </span> */}
            </Menu.Button>
         </div>

         <Transition
            as={Fragment}
            enter="transition ease-out duration-100"
            enterFrom="transform opacity-0 scale-95"
            enterTo="transform opacity-100 scale-100"
            leave="transition ease-in duration-75"
            leaveFrom="transform opacity-100 scale-100"
            leaveTo="transform opacity-0 scale-95">
            <Menu.Items className={classNames(customOptions?customOptions:" w-56","absolute  z-10 mt-2  origin-top-right left-0 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none")}>
               <div className="py-1">
                  {options?.map((option, index) => {
                     return (
                        <Menu.Item key={index}>
                           {({ active }) => (
                              <a
                                 href="#"
                                 className={classNames(active ? "bg-gray-100 text-gray-900" : "text-gray-700", "block px-4 py-2 text-sm")}>
                                 {option?.title}
                              </a>
                           )}
                        </Menu.Item>
                     );
                  })}
               </div>
            </Menu.Items>
         </Transition>
      </Menu>
   );
}
