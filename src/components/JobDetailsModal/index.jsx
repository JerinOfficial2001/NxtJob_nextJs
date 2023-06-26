/** @format */

import { Fragment, useEffect, useRef, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import JobDescription from "./JobDescription";
import Company from "./Company";
import Notes from "./Notes";
import Networking from "./Networking";
import CancelIcon from "@/src/assets/CancelIcon";
import { classNames } from "@/src/utils/Classname";
import Resume from "../Resume";
import Letter from "@/src/assets/Letter";
import MessageIcon from "@/src/assets/MessageIcon";
import BoardsIcon from "@/src/assets/BoardsIcon";
import CompanyIcon from "@/src/assets/CompanyIcon";
import NotesIcon from "@/src/assets/NotesIcon";
import NetworkingIcon from "@/src/assets/NetworkingIcon";
import MenuItem from "../MenuItem";
import TopBarDetails from "./TopBarDetails";
import { useSelector } from "react-redux";
import MenuIcon from "@/src/assets/MenuIcon";
import Stepper from "../Stepper";
import ResumeCard from "../Cards/ResumeCard";
import LetterCard from "../Cards/LetterCard";
import MockInterviewCard from "../Cards/MockInterviewCard";
import Tags from "../Tags";
import { generateStyleByPercent } from "@/src/utils/GenerateStyleByPercent";
import { useDispatch } from "react-redux";
import { resetSingleJob } from "@/src/store/jobReducer";

export default function JobDetailsModal({
  open,
  setOpen,
  customClass,
  heading,
  svg,
  btnName,
  Btn1OnClick,
  svgOnclick,
  btn2Name,
  Btn2OnClick,
  SearchBar,
}) {
  const singleJob = useSelector((state) => state.counter.singleJob);
  const dispatch = useDispatch();
  const [openMenu, setopenMenu] = useState(false);
  const cancelButtonRef = useRef(null);
  const [selectedTab, setselectedTab] = useState("job_description");

  const [hover, setHover] = useState("");
  const [inputDatas, setinputDatas] = useState({});

  const handleClose = () => {
    setOpen(false);
    setinputDatas({});
    dispatch(resetSingleJob());
  };
  const LeftBar = ({ setopenMenu }) => {
    const SIDEBAR_ITEMS = [
      {
        title: "Job Description",
        icon: (
          <BoardsIcon
            color={selectedTab === "job_description" ? "#8246FD" : "#5A5A5A"}
          />
        ),
        to: "job_description",
      },
      {
        title: "Company",
        icon: (
          <CompanyIcon
            color={selectedTab === "company" ? "#8246FD" : "#5A5A5A"}
          />
        ),
        to: "company",
      },
      {
        title: "Note",
        icon: (
          <NotesIcon color={selectedTab === "notes" ? "#8246FD" : "#5A5A5A"} />
        ),
        to: "notes",
      },
      {
        title: "Networking",
        icon: (
          <NetworkingIcon
            color={selectedTab === "networking" ? "#8246FD" : "#5A5A5A"}
          />
        ),
        to: "networking",
      },
    ];

    return (
      <div>
        {SIDEBAR_ITEMS?.map((item) => {
          return (
            <>
              <div className="max-[1000px]:hidden">
                <MenuItem
                  key={item.id}
                  location={selectedTab}
                  onClick={() => {
                    setselectedTab(item?.to);
                  }}
                  data={item}
                  activeClass={"bg-[#F7F3FF] text-[#8246FD]"}
                  nonActiveClass={"bg-[#fff] text-[#5A5A5A]"}
                />
              </div>
              <>
                <div className="min-[1000px]:hidden">
                  <MenuItem
                    key={item.id}
                    location={selectedTab}
                    setselectedTab={setselectedTab}
                    setopenMenu={setopenMenu}
                    data={item}
                    activeClass={"bg-[#F7F3FF] text-[#8246FD]"}
                    nonActiveClass={"bg-[#fff] text-[#5A5A5A]"}
                  />
                </div>
              </>
            </>
          );
        })}
      </div>
    );
  };

  const JobRequestDetails = ({ job }) => {
    return (
      <div className="flex gap-2 max-[1000px]:h-[40px] max-[1000px]:w-[100%]">
        <div className="cursor-pointer">
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
        <div className="cursor-pointer">
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
        <div className="cursor-pointer">
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

  //main
  return (
    <Transition.Root show={open} as={Fragment}>
      <Dialog
        as="div"
        className="relative z-10 "
        initialFocus={cancelButtonRef}
        onClose={setOpen}
      >
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity " />
        </Transition.Child>

        <div className="fixed inset-0 z-10 overflow-y-auto ">
          <div className="flex min-h-full items-end justify-center lg:p-4 text-center sm:items-center sm:p-0 ">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              enterTo="opacity-100 translate-y-0 sm:scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 translate-y-0 sm:scale-100"
              leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            >
              <Dialog.Panel className="relative transform overflow-hidden rounded-lg bg-white shadow-xl transition-all xl:h-[90vh] xl:w-[85%] ">
                <div className="bg-white relative ">
                  <div className="absolute right-3 top-3">
                    <div onClick={handleClose}>
                      <CancelIcon setOpen={setOpen} />
                    </div>
                  </div>
                  <TopBarDetails
                    singleJob={singleJob}
                    setOpen={setOpen}
                    cancelButtonRef={cancelButtonRef}
                    setinputDatas={setinputDatas}
                    inputDatas={inputDatas}
                  />
                </div>
                <div className="flex-col shadow-sm gap-2 h-fit rounded-md p-2 bg-white border-b-2 border-[#DCDCDC] relative">
                  <JobRequestDetails job={singleJob} />
                  {hover === "resume" && (
                    <ResumeCard
                      job={singleJob}
                      setresumeHover={setHover}
                      customClass={"top-[50px]"}
                    />
                  )}
                  {hover === "letter" && (
                    <LetterCard
                      setletterHover={setHover}
                      title={"Cover Letter"}
                      name={"Cover Letter Name"}
                      customClass={"left-[150px] top-[50px]"}
                    />
                  )}

                  {hover === "interview" &&
                    (singleJob.mockInterviewName > 0 ? (
                      <MockInterviewCard
                        setinterviewHover={setHover}
                        job={singleJob}
                        customClass={"left-[400px] top-[50px]"}
                      />
                    ) : (
                      <LetterCard
                        setletterHover={setHover}
                        title={"Mock Interview"}
                        name={"Mock Interview Name"}
                        customClass={"left-[400px] top-[50px]"}
                      />
                    ))}
                </div>
                <div className="w-[100%] flex pt-2 pr-2 gap-2 h-[65vh] max-[1000px]:pr-0 max-[1000px]:justify-center relative">
                  <div className="border-r-2 boder-[#DCDCDC] w-[15vw] h-[100%] p-4 max-[1000px]:h-[100%] max-[1000px]:w-[100%] max-[1000px]:hidden">
                    <LeftBar setopenMenu={setopenMenu} />
                  </div>

                  <>
                    {openMenu && (
                      <div
                        className="animate__animated  animate__fadeInUp  border-r-2 boder-[#DCDCDC] w-[100%] h-[40%] p-4 rounded-xl min-[1000px]:hidden absolute bottom-0 z-[1000] bg-white"
                        style={{ boxShadow: "0px 2px 5px 2px" }}
                      >
                        <LeftBar setopenMenu={setopenMenu} />
                      </div>
                    )}
                  </>
                  <div
                    className={classNames(
                      customClass,
                      "w-[55vw] h-[100%] bg-[#F7F3FF] rounded-lg text-justify p-5 flex-col flex gap-4 relative max-[1000px]:h-[98%] max-[1000px]:w-[96%]"
                    )}
                    style={{ overflowY: "scroll" }}
                  >
                    <div className="absolute left-3 top-5 rounded-full bg-white h-7 w-7 flex items-center justify-center hover:border-[#35b5ef] hover:border-2 min-[1000px]:hidden">
                      {" "}
                      <MenuIcon
                        onclick={() => {
                          setopenMenu((p) => !p);
                        }}
                      />
                    </div>

                    {selectedTab === "job_description" && (
                      <JobDescription
                        svg={svg}
                        svgOnclick={svgOnclick}
                        heading={heading}
                        btnName={btnName}
                        btn2Name={btn2Name}
                        Btn1OnClick={Btn1OnClick}
                        Btn2OnClick={Btn2OnClick}
                        jobs={singleJob}
                        inputData={inputDatas}
                        setinputData={setinputDatas}
                      />
                    )}
                    {selectedTab === "company" && (
                      <Company
                        svg={svg}
                        svgOnclick={svgOnclick}
                        heading={heading}
                        btnName={btnName}
                        Btn1OnClick={Btn1OnClick}
                        btn2Name={btn2Name}
                        Btn2OnClick={Btn2OnClick}
                        jobs={singleJob}
                        setinputDatas={setinputDatas}
                        inputDatas={inputDatas}
                      />
                    )}
                    {selectedTab === "notes" && (
                      <Notes
                        heading={heading}
                        btnName={btnName}
                        Btn1OnClick={Btn1OnClick}
                        inputDatas={inputDatas}
                        job={singleJob}
                      />
                    )}
                    {selectedTab === "networking" && (
                      <Networking
                        heading={heading}
                        btnName={btnName}
                        Btn1OnClick={Btn1OnClick}
                        SearchBar={SearchBar}
                        singleJob={singleJob}
                      />
                    )}
                  </div>
                  <div className="w-[15vw] h-[50vh] bg-[#F9F8F8] rounded-lg max-[1000px]:hidden">
                    <Stepper />
                  </div>
                </div>
                {/* <div>Did yoy know? You can save job directly from our Extension and have all the data imported in a simple click! It takes just a few seconds,</div> */}
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  );
}
