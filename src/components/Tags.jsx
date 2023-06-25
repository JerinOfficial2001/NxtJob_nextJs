import React from 'react'
import { classNames } from '../utils/Classname';
import { generateStyleByPercent } from '../utils/GenerateStyleByPercent';
import Text from './Text';

const Tags = ({ icon, percent, name,...props }) => {
    return (
      <>
        <div
        {...props}
          className={classNames(
            generateStyleByPercent(percent)
              ? `${generateStyleByPercent(percent)} rounded-md`
              : "bg-none border-2  rounded-md",
            "flex items-center justify-center gap-3 mt-1 p-1 px-2 max-[1000px]:hidden"
          )}
        >
          {icon}
          <Text name={name} customClass={"text-none"} />
          {generateStyleByPercent(percent) && (
            <div className="flex gap-2">{percent}%</div>
          )}
        </div>
        <>
          <div
            className={classNames(
              generateStyleByPercent(percent)
                ? `${generateStyleByPercent(percent)} rounded-md`
                : "bg-none border-2  rounded-md",
              "flex items-center justify-center gap-3 mt-1 p-1 px-2 min-[1000px]:hidden"
            )}
          >
            {icon}

            {generateStyleByPercent(percent) && (
              <div className="flex gap-2">{percent}%</div>
            )}
          </div>
        </>
      </>
    );
  };


export default Tags