import React from 'react'
import { classNames } from '../utils/Classname'


export default function MotionCard({hoverItem,onMouseLeave,customClass}) {
  return (
    <div 
          className={classNames(customClass,"animate__animated animate__fadeIn  z-10 shadow-inner shadow  rounded-xl bg-white")}
          style={{ boxShadow: "0px 0px 4px 0px" }}
          onMouseLeave={onMouseLeave}
        >
          {hoverItem}
        </div>
  )
}
