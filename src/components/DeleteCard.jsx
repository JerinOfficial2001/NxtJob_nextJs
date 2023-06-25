import React from 'react'
import {motion} from "framer-motion"
import Button from './Button';
import DeleteIcon from '../assets/DeleteIcon';
import "animate.css"

export default function DeleteCard({onclick,close}) {
 
  return (
    <div
      className="animate__animated animate__fadeIn absolute top-11 right-0 z-10 shadow-inner shadow  rounded-md flex items-center bg-white w-[217px] h-[50px] hover:bg-slate-100 "
      style={{ boxShadow: "0px 0px 4px 0px" }}
      onMouseLeave={close}
      onClick={onclick}
    >
      <Button
        title={"Delete"}
        svgfront={<DeleteIcon />}
        customClass={" text-[red]  p-[5px 10px 5px 10px]"}
      />
    </div>
  );
}
