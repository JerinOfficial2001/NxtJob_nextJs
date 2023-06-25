import React from 'react'

export default function LikedIcon({color,fill}) {
  return (
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="9" cy="9" r="8.5" fill={fill?fill:"#D1FAE5"} stroke={color?color:"#059669"}/>
    <path d="M6 9.5L8 11.5L12.5 7" stroke={color?color:"#059669"}/>
    </svg>
    
  )
}
