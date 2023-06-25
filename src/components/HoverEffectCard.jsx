import React from 'react'
import * as HoverCard from '@radix-ui/react-hover-card';
import Button from './Button';
import DeleteIcon from '../assets/DeleteIcon';

export default function HoverEffectCard({hoverItem,hoverTitle}) {
  return (
    <HoverCard.Root>
    <HoverCard.Trigger asChild>
      <div>
        {hoverTitle}
      </div>
    </HoverCard.Trigger>
    <HoverCard.Portal>
      <HoverCard.Content
        className="data-[side=bottom]:animate-slideUpAndFade data-[side=right]:animate-slideLeftAndFade data-[side=left]:animate-slideRightAndFade data-[side=top]:animate-slideDownAndFade w-[300px] rounded-md bg-white p-5 shadow-[hsl(206_22%_7%_/_35%)_0px_10px_38px_-10px,hsl(206_22%_7%_/_20%)_0px_10px_20px_-15px] data-[state=open]:transition-all"
        sideOffset={5}
      >
        <div className="flex gap-[7px]">
        {hoverItem}
        </div>

        <HoverCard.Arrow className="fill-white" />
      </HoverCard.Content>
    </HoverCard.Portal>
  </HoverCard.Root>
  )
}
