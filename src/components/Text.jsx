import React from 'react'
import { classNames } from '../utils/Classname'

export default function Text({name,customClass,fetchItem,svg}) {
  return (
    <div className='flex items-center gap-2'>
      {svg}<h1 className={classNames(customClass?customClass:"font-semibold")}>{fetchItem}{name}</h1></div>
    
  )
}
