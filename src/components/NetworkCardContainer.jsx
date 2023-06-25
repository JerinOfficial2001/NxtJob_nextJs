import React from 'react'
import Text from './Text'

export default function NetworkCardContainer({heading,card}) {
  return (
    <div className="w-full flex flex-col gap-2">
<Text name={heading}/>
        <div className="flex flex-col gap-2">
            {card}
        </div>
    </div>
  )
}
