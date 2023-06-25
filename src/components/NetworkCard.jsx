import React, { useState } from 'react'
import Text from './Text'
import WarningIcon from '../assets/WarningIcon'
import VertIcon from '../assets/VertIcon'
import Message from '../assets/Message'
import DeleteCard from './DeleteCard'
import NotificationCard from './Cards/NotificationCard'

export default function NetworkCard({userName,description,svg,companyName,date}) {
    const [hoverCard, sethoverCard] = useState(false)
    const [notificationHover, setnotificationHover] = useState(false)
  return (
    <div className="flex justify-between bg-white relative rounded-xl items-center pr-4 ">
        <div className="flex item-center gap-2 p-2 relative">
            <div className="flex justify-center item-center absolute top-4 left-6">
            {svg}
            </div>
           
            <div className="flex flex-col gap-2 ml-16">

            <Text name={userName}/>
            <Text name={description} customClass={"text-[#9E9E9E] text-xs"}/>
            </div>
        </div>
        <Text name={companyName} customClass={"text-[#9E9E9E] text-xs "}/>
            <Text name={date} customClass={"text-[#9E9E9E] text-xs "}/>
            <div className="flex gap-4 items-center relative">
                <div className="cursor-pointer" onClick={()=>{setnotificationHover(p=>p=!p)}}><WarningIcon/></div>
                <div className="cursor-pointer"><Message/></div>
                <div className="cursor-pointer " onClick={()=>{sethoverCard(true)}}><VertIcon/></div>
               {hoverCard && <DeleteCard close={()=>{sethoverCard(false)}}  onclick={()=>{sethoverCard(false)}}/>}
               {notificationHover&& <NotificationCard close={setnotificationHover} customClass={"top-[45px] right-[5px]"}/>}
            </div>
    </div>
  )
}
