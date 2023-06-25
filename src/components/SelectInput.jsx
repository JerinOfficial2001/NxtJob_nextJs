/** @format */

import { Fragment, useState } from "react";
import { Listbox, Transition } from "@headlessui/react";
import { classNames } from "../utils/Classname";
import DownArrow from "../assets/DownArrow";

export default function SelectInput({ options, onChange, customClass }) {
  const [selected, setSelected] = useState(options[0]);

  return (
    <Listbox value={selected} onChange={(e) => onChange(e)}>
      {({ open }) => (
        <>
          <div className="relative ">
            <Listbox.Button
              className={classNames(
                customClass ? customClass : "h-[50px] w-full",
                "relative  cursor-default rounded-md bg-white py-1.5 pl-3 pr-10 text-left text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 sm:text-sm sm:leading-6"
              )}
            >
              <span className="flex ">
                <span className=" block truncate">{selected.title}</span>
              </span>
              <span className="pointer-events-none absolute inset-y-0 right-0 ml-3 flex items-center pr-2">
                <DownArrow />
              </span>
            </Listbox.Button>

            <Transition
              show={open}
              as={Fragment}
              leave="transition ease-in duration-100"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <Listbox.Options className="absolute z-10 mt-1 max-h-56 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                {options.map((option, index) => (
                  <Listbox.Option
                    key={index}
                    className={({ active }) =>
                      classNames(
                        active ? "bg-indigo-600 text-white" : "text-gray-900",
                        "relative cursor-default select-none py-2 pl-3 pr-9"
                      )
                    }
                    value={option.value}
                  >
                    <>
                      <div
                        className="flex items-center"
                        onClick={() => {
                          setSelected(option);
                        }}
                      >
                        <span
                          className={classNames(
                            selected.title === option.title
                              ? "font-semibold"
                              : "font-normal",
                            " block truncate"
                          )}
                        >
                          {option.title}
                        </span>
                      </div>
                    </>
                  </Listbox.Option>
                ))}
              </Listbox.Options>
            </Transition>
          </div>
        </>
      )}
    </Listbox>
  );
}

// export default SelectInput;
