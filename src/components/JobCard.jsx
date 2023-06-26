/** @format */

import React, { useState } from "react";
import CompanyLogo from "../assets/CompanyIcon.png";
import Image from "next/image";
import HomeIcon from "../assets/HomeIcon";
import classNames from "classnames";
import Resume from "./Resume";
import Letter from "../assets/Letter";
import MessageIcon from "../assets/MessageIcon";
import { useDispatch } from "react-redux";
import { getJobById, removeJob } from "../store/jobReducer";
import VertIcon from "../assets/VertIcon";
import DeleteCard from "./DeleteCard";
import ResumeCard from "./Cards/ResumeCard";
import LetterCard from "./Cards/LetterCard";
import MockInterviewCard from "./Cards/MockInterviewCard";
import { toast } from "react-hot-toast";
import { Draggable } from "react-beautiful-dnd";

const JobCard = ({ job, setclose, index }) => {
  const [hover, setHover] = useState("");

  const generateStyleByPercent = (percent) => {
    if (percent >= 75) {
      return "bg-[#D1FAE5] text-[#059669]";
    } else if (percent < 75 && percent > 50) {
      return "bg-[#FEE2E2] text-[#FBBD4E]";
    } else if (percent <= 50 && percent > 0) {
      return "bg-[#FEE2E2] text-[#B91C1C]";
    } else if (
      percent === null ||
      percent === undefined ||
      percent === "" ||
      percent === 0
    ) {
      return false;
    }
  };
  const JobCardCompanyDetails = ({ onClick }) => {
    return (
      <div
        className="flex justify-between items-center w-[100%] "
        onClick={onClick}
      >
        <div className="flex items-center gap-2">
          <div className="flex items-center justify-center">
            <Image
              alt="loading"
              src={CompanyLogo}
              height={"100%"}
              width={"100%"}
            />
          </div>
          <div className="flex flex-col gap-0.5 ">
            <span className="text-[14px] font-[400] ">{job?.jobTitle}</span>
            <span className="flex items-center gap-2">
              <span>
                <HomeIcon />
              </span>
              <span className="text-[#AFAFAF] text-[12px] font-[400]">
                {job?.location}
              </span>
            </span>
          </div>
        </div>
      </div>
    );
  };

  const Tags = ({ icon, percent, ...props }) => {
    return (
      <div
        {...props}
        className={classNames(
          generateStyleByPercent(percent)
            ? `${generateStyleByPercent(percent)} rounded-md`
            : "bg-none border-dashed border-2  rounded-full",
          "flex items-center justify-center gap-3 mt-1 p-1 px-2"
        )}
      >
        {icon}
        {generateStyleByPercent(percent) && <div className="">{percent}%</div>}
      </div>
    );
  };

  const JobRequestDetails = () => {
    return (
      <div className="flex gap-2">
        <div>
          <Tags
            onClick={() => {
              setHover("resume");
            }}
            onMouseLeave={() => {
              if (hover != "resume") setHover("");
            }}
            name={" Resume Name "}
            icon={
              <Resume
                color={
                  generateStyleByPercent(job?.resumeName)
                    ? generateStyleByPercent(job?.resumeName)
                        ?.split(" ")[1]
                        .split("[")[1]
                        .split("]")[0]
                    : false
                }
              />
            }
            percent={job?.resumeName}
          />
        </div>
        <div>
          <Tags
            onClick={() => {
              setHover("letter");
            }}
            onMouseLeave={() => {
              if (hover != "letter") setHover("");
            }}
            name={"Cover Letter Name "}
            icon={
              <Letter
                color={
                  generateStyleByPercent(job?.coverLetterName)
                    ? generateStyleByPercent(job?.coverLetterName)
                        ?.split(" ")[1]
                        .split("[")[1]
                        .split("]")[0]
                    : false
                }
              />
            }
            percent={job?.coverLetterName}
          />
        </div>
        <div>
          <Tags
            onClick={() => {
              setHover("interview");
            }}
            onMouseLeave={() => {
              if (hover != "interview") setHover("");
            }}
            name={" Mock Interview"}
            icon={
              <MessageIcon
                color={
                  generateStyleByPercent(job?.mockInterviewName)
                    ? generateStyleByPercent(job?.mockInterviewName)
                        ?.split(" ")[1]
                        .split("[")[1]
                        .split("]")[0]
                    : false
                }
              />
            }
            percent={job?.mockInterviewName}
          />
        </div>
      </div>
    );
  };
  const handleDeleteJob = async (id) => {
    try {
      await dispatch(removeJob(id));
      toast.success("Deleted Successfully");
      sethoverCard(false);
    } catch (error) {
      toast.error("failed");
    }
  };
  const dispatch = useDispatch();
  const [hoverCard, sethoverCard] = useState(false);
  return (
    <>
      <div
        onSelect={() => {
          return false;
        }}
        className="flex shadow-sm gap-2 h-fit rounded-md p-2 bg-white  relative "
      >
        <div className=" w-[90%] ">
          <JobCardCompanyDetails
            onClick={async () => {
              setclose(true);
              await dispatch(getJobById(job?.id));
            }}
          />
          <JobRequestDetails />
        </div>
        <div
          className="flex items-center justify-center w-6 h-8  absolute right-3 top-3 "
          onClick={() => {
            sethoverCard(true);
          }}
        >
          <VertIcon />
        </div>

        {hoverCard && (
          <DeleteCard
            close={() => {
              sethoverCard(false);
            }}
            onclick={() => {
              handleDeleteJob(job?.id);
            }}
          />
        )}
        {hover === "resume" && (
          <ResumeCard job={job} setresumeHover={setHover} />
        )}
        {hover === "letter" && (
          <LetterCard
            setletterHover={setHover}
            title={"Cover Letter"}
            name={"Cover Letter Name"}
            customClass={" left-0"}
          />
        )}
        {hover === "interview" &&
          (job.mockInterviewName > 0 ? (
            <MockInterviewCard setinterviewHover={setHover} job={job} customClass={"left-10"} />
          ) : (
            <LetterCard
              setletterHover={setHover}
              title={"Mock Interview"}
              name={"Mock Interview Name"}
              customClass={"  left-0"}
            />
          ))}
      </div>
    </>
  );
};

export default JobCard;
