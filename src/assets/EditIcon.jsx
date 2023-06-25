import React from 'react'

export default function EditIcon({color}) {
  return (
    <svg width="15" height="15" viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg" className="cursor-pointer">
<path d="M16.3 6.425L12.05 2.225L13.45 0.825C13.8333 0.441667 14.3043 0.25 14.863 0.25C15.421 0.25 15.8917 0.441667 16.275 0.825L17.675 2.225C18.0583 2.60833 18.2583 3.071 18.275 3.613C18.2917 4.15433 18.1083 4.61667 17.725 5L16.3 6.425ZM14.85 7.9L4.25 18.5H0V14.25L10.6 3.65L14.85 7.9Z" fill={color?color:"#8246FD"}/>
</svg>

  )
}
