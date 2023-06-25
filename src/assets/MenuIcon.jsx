import React from 'react'
import {RiMenuFill} from "react-icons/ri"

export default function MenuIcon({onclick}) {
  return (
    <div className='w-5 h-5 min-[1000px]:hidden' onClick={onclick}>
        <RiMenuFill className='w-[100%] h-[100%] '/>
    </div>
  )
}
