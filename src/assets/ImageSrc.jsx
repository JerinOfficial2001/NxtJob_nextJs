import Image from 'next/image'
import React from 'react'
import Avatar from "../assets/Avatar.png"
import { classNames } from '../utils/Classname'

export default function ImageSrc({customClass,src}) {
  return (
    <div>
      <Image alt='Loading' className={classNames(customClass)} src={src}/>
    </div>
  )
}
