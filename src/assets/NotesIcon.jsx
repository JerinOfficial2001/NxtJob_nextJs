import React from 'react'

export default function NotesIcon({color}) {
  return (
    <svg width="16" height="21" viewBox="0 0 16 21" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M3.975 16.25H12.025V14.75H3.975V16.25ZM3.975 12H12.025V10.5H3.975V12ZM1.5 20.5C1.1 20.5 0.75 20.35 0.45 20.05C0.15 19.75 0 19.4 0 19V2C0 1.6 0.15 1.25 0.45 0.95C0.75 0.65 1.1 0.5 1.5 0.5H10.525L16 5.975V19C16 19.4 15.85 19.75 15.55 20.05C15.25 20.35 14.9 20.5 14.5 20.5H1.5ZM9.775 6.65V2H1.5V19H14.5V6.65H9.775Z" fill={color ? color : "#5A5A5A"}/>
</svg>

    )
}
