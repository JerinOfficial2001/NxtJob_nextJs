/** @format */

import React from "react";

const Resume = ({ color }) => {
   return (
      <svg
         width="14"
         height="16"
         viewBox="0 0 14 16"
         fill="none"
         xmlns="http://www.w3.org/2000/svg">
         <path
            d="M13.8654 7.46667H9.15385C8.72542 7.46667 8.31454 7.2981 8.0116 6.99804C7.70865 6.69798 7.53846 6.29101 7.53846 5.86667V1.2C7.53846 1.16464 7.52428 1.13072 7.49903 1.10572C7.47379 1.08071 7.43955 1.06667 7.40385 1.06667H5.61178C5.54893 0.951379 5.47572 0.841936 5.39303 0.739667C5.005 0.262667 4.42851 0 3.76923 0C2.50115 0 1.61538 0.987 1.61538 2.4V7.2C1.61538 8.03333 2.2999 8.53333 2.96154 8.53333C3.13886 8.53525 3.31477 8.50208 3.47897 8.43575C3.64317 8.36942 3.79234 8.27128 3.91773 8.14709C4.04312 8.02289 4.14221 7.87514 4.20917 7.71251C4.27613 7.54987 4.30963 7.37563 4.30769 7.2V2.13333C4.30769 1.99188 4.25096 1.85623 4.14998 1.75621C4.049 1.65619 3.91204 1.6 3.76923 1.6C3.62642 1.6 3.48946 1.65619 3.38848 1.75621C3.2875 1.85623 3.23077 1.99188 3.23077 2.13333V7.2C3.23194 7.23533 3.22578 7.27053 3.21266 7.30341C3.19954 7.33628 3.17976 7.36615 3.15452 7.39114C3.12928 7.41614 3.09913 7.43574 3.06594 7.44873C3.03274 7.46172 2.99721 7.46783 2.96154 7.46667C2.88649 7.46667 2.69231 7.41867 2.69231 7.2V2.4C2.69231 1.75533 2.97534 1.06667 3.76923 1.06667C4.76841 1.06667 4.84615 2.07167 4.84615 2.37933V7.00433C4.84615 7.586 4.66207 8.112 4.32755 8.48633C3.98798 8.86667 3.51582 9.06667 2.96154 9.06667C2.40726 9.06667 1.9351 8.86667 1.59553 8.48633C1.26101 8.112 1.07692 7.586 1.07692 7.00433V4.26667C1.07692 4.12522 1.02019 3.98956 0.919211 3.88954C0.81823 3.78952 0.68127 3.73333 0.538462 3.73333C0.395653 3.73333 0.258693 3.78952 0.157712 3.88954C0.0567306 3.98956 0 4.12522 0 4.26667V7.00433C0 8.72133 1.11697 9.992 2.69231 10.122V13.8667C2.69231 14.4325 2.91923 14.9751 3.32315 15.3752C3.72708 15.7752 4.27492 16 4.84615 16H11.8462C12.4174 16 12.9652 15.7752 13.3692 15.3752C13.7731 14.9751 14 14.4325 14 13.8667V7.6C14 7.56464 13.9858 7.53072 13.9606 7.50572C13.9353 7.48071 13.9011 7.46667 13.8654 7.46667Z"
            fill={color ? color : "#9E9E9E"}
         />
         <path
            d="M9.1537 6.39889H13.5223C13.5356 6.39883 13.5485 6.39489 13.5595 6.38756C13.5706 6.38023 13.5791 6.36984 13.5842 6.3577C13.5893 6.34555 13.5906 6.33219 13.588 6.31929C13.5855 6.3064 13.5791 6.29454 13.5698 6.28522L8.72999 1.49155C8.72058 1.48229 8.70861 1.47598 8.6956 1.47343C8.68258 1.47088 8.66909 1.4722 8.65682 1.47723C8.64456 1.48225 8.63407 1.49075 8.62667 1.50166C8.61927 1.51258 8.61529 1.52541 8.61523 1.53855V5.86555C8.61523 6.007 8.67196 6.14266 8.77295 6.24268C8.87393 6.3427 9.01089 6.39889 9.1537 6.39889Z"
            fill={color ? color : "#9E9E9E"}
         />
      </svg>
   );
};

export default Resume;