import React from 'react'
import SearchIcon from '../assets/SearchIcon';
import { classNames } from '../utils/Classname';

export default function SearchBar({customClass}) {

        return (
          <form
            style={{ border: "1px solid #DDDDDD" }}
            className={classNames(customClass," bg-white relative flex items-center  rounded-lg dark:placeholder-gray-400 ")}
          >
            <span className="absolute" style={{ left: 15, top: 12 }}>
              <SearchIcon fontSize="18px" color="#212121" />
            </span>
            <input
              type="text"
              className=" focus:border-teal rounded-lg focus:outline-none focus:ring-0 border-[#D0D5DD] hover-none"
              placeholder="Search"
              style={{ marginLeft: 23,width:"100%"}}
            />
          </form>
        );
      };
  

