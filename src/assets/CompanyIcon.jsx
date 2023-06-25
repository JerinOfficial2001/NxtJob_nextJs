import React from 'react'

export default function CompanyIcon({color}) {
  return (
    <svg width="22" height="19" viewBox="0 0 22 19" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M16.425 5.925H17.925V4.425H16.425V5.925ZM16.425 10.2H17.925V8.7H16.425V10.2ZM16.425 14.45H17.925V12.95H16.425V14.45ZM15.025 18.5V17H20.5V2H10.625V4.8L9.125 3.75V0.5H22V18.5H15.025ZM0 18.5V8.75L6.775 3.9L13.525 8.75V18.5H8.1V13.475H5.45V18.5H0ZM1.5 17H3.95V11.975H9.6V17H12.025V9.525L6.775 5.75L1.5 9.53555V17Z" fill={color ? color : "#5A5A5A"}/>
</svg>

  )
}
