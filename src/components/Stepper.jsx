import React from 'react'
import Text from './Text'

export default function Stepper() {
  return (
    <>
      <ul
        className=" flex flex-col gap-[20px] w-[193px] p-[20px] h-[436px] "
        data-te-stepper-init
        data-te-stepper-type="vertical"
      >
        <div className="h-[24px] w-76px flex items-center">
          <Text
            name={"Time Line"}
            customClass={"text-[16px] text-[#5A5A5A] font-[700]"}
          />
        </div>
        <div className="flex flex-col justify-center">
          {/* first row */}
          <div className="flex flex-col relative h-[96px] w-[153]">
            <span
              data-te-stepper-head-icon-ref
              className="h-[16px] w-[16px] rounded-full bg-[#57A4F2] absolute "
            />
            <li
              data-te-stepper-step-ref
              className=" border-dashed border-l-[1.5px] border-[#57A4F2] h-[120px] absolute top-2 left-2 "
            />
            <div className="flex flex-col justify-center gap-[10px] h-[96px] w-[127px] absolute left-7 top-1 ">
              <span data-te-stepper-head-text-ref>
                <Text
                  name={"Today, 1:12 PM"}
                  customClass={"text-[10px] text-[#9E9E9E]"}
                />
              </span>

              <div
                data-te-stepper-content-ref
                className="bg-[#E4F2FF] rounded-md p-[10px] flex flex-col  justify-center text-justify align-center h-[70px] w-[127px] "
              >
                <Text
                  name={"Moved to Saved"}
                  customClass={"text-[#5A5A5A] font-[700] text-[12px]"}
                />
                <Text
                  name={"You moved this job from Applied to saved"}
                  customClass={"text-[#5A5A5A] text-[10px] font-[400]"}
                />
              </div>
            </div>
          </div>
        </div>
        {/* second row */}
        <div className="flex flex-col relative h-[96px] w-[153]">
          <span
            data-te-stepper-head-icon-ref
            className="h-[16px] w-[16px] rounded-full bg-[#57A4F2] absolute "
          />
          <li
            data-te-stepper-step-ref
            className=" border-dashed border-l-[1.5px] border-[#57A4F2] h-[120px] absolute top-2 left-2 "
          />
          <div className="flex flex-col justify-center gap-[10px] h-[96px] w-[127px] absolute left-7 top-1 ">
            <span data-te-stepper-head-text-ref>
              <Text
                name={"Today, 1:12 PM"}
                customClass={"text-[10px] text-[#9E9E9E]"}
              />
            </span>

            <div
              data-te-stepper-content-ref
              className="bg-[#E4F2FF] rounded-md p-[10px] flex flex-col  justify-center text-justify align-center h-[70px] w-[127px] "
            >
              <Text
                name={"Moved to Saved"}
                customClass={"text-[#5A5A5A] font-[700] text-[12px]"}
              />
              <Text
                name={"You moved this job from Applied to saved"}
                customClass={"text-[#5A5A5A] text-[10px] font-[400]"}
              />
            </div>
          </div>
        </div>
        {/* third row */}
        <div className="flex flex-col relative h-[96px] w-[153]">
          <span
            data-te-stepper-head-icon-ref
            className="h-[16px] w-[16px] rounded-full bg-[#57A4F2] absolute "
          />

          <div className="flex flex-col justify-center gap-[10px] h-[96px] w-[127px] absolute left-7 top-1 ">
            <span data-te-stepper-head-text-ref>
              <Text
                name={"Today, 1:12 PM"}
                customClass={"text-[10px] text-[#9E9E9E]"}
              />
            </span>

            <div
              data-te-stepper-content-ref
              className="bg-[#E4F2FF] rounded-md p-[10px] flex flex-col  justify-center text-justify align-center h-[70px] w-[127px] "
            >
              <Text
                name={"Moved to Saved"}
                customClass={"text-[#5A5A5A] font-[700] text-[12px]"}
              />
              <Text
                name={"You moved this job from Applied to saved"}
                customClass={"text-[#5A5A5A] text-[10px] font-[400]"}
              />
            </div>
          </div>
        </div>
      </ul>
    </>
  );
}
