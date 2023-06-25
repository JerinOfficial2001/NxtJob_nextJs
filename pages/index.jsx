/** @format */

import { Inter } from "next/font/google";
import Layout from "@/src/layout/Layout";
import Button from "@/src/components/Button";
import JobCard from "@/src/components/JobCard";
import { useState } from "react";
import AddJobModal from "@/src/components/AddJobModal";
import JobDetailsModal from "@/src/components/JobDetailsModal";
import BoardsIcon from ".././src/assets/BoardsIcon";
import NetworkingIcon from ".././src/assets/NetworkingIcon";
import ArchiveIcon from ".././src/assets/ArchiveIcon";
import LoopSettings from ".././src/assets/LoopSettings";
import SuggestAFeacture from ".././src/assets/SuggestAFeacture";
import ReportIssue from ".././src/assets/ReportIssue";
import { useSelector } from "react-redux";
import Networking from "@/src/components/MenuItems/Networking";
import Archive from "@/src/components/MenuItems/Archive";
import Loop from "@/src/components/MenuItems/Loop";
import Features from "@/src/components/MenuItems/Features";
import Report from "@/src/components/MenuItems/Report";
import SearchBar from "@/src/components/SearchBar";
import MenuIcon from "@/src/assets/MenuIcon";
import { JobCardContainer } from "@/src/components/JobCardContainer";
import ListForm from "@/src/components/ListForm";
import { toast } from "react-hot-toast";
import { useDispatch } from "react-redux";
import { createList } from "@/src/store/jobReducer";
import { DragDropContext, Draggable } from "react-beautiful-dnd";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const [selectedTab, setselectedTab] = useState("boards");
  const lists = useSelector((state) => state.counter.lists);
  const [listName, setListName] = useState("");
  const [open, setOpen] = useState(false);
  const [close, setclose] = useState(false);
  const [openMenu, setopenMenu] = useState(false);
  const Jobs = useSelector((state) => state.counter.job);
  const dispatch = useDispatch();
  const [addList, setAddList] = useState(false);
  const filterJobsByType = (type) => {
    const filteredJobs = Jobs?.filter((i) => i?.jobType === type);
    return filteredJobs;
  };
  const handleAddList = () => {
    if (listName != "") {
      dispatch(createList(listName));
      setListName("");
      toast.success("List added successfully");
    } else {
      toast.error("Please enter list name");
    }
  };
  const SIDEBAR_ITEMS = [
    {
      id: 0,
      title: "Boards",
      icon: <BoardsIcon color={selectedTab === "boards" ? "#fff" : "#000"} />,
      to: "boards",
    },
    {
      id: 1,
      title: "Networking",
      icon: (
        <NetworkingIcon
          color={selectedTab === "networking" ? "#fff" : "#000"}
        />
      ),
      to: "networking",
    },
    {
      id: 2,
      title: "Archive Jobs",
      icon: <ArchiveIcon color={selectedTab === "archive" ? "#fff" : "#000"} />,
      to: "archive",
    },
    {
      id: 3,
      title: "Loop Settings",
      icon: (
        <LoopSettings color={selectedTab === "settings" ? "#fff" : "#000"} />
      ),
      to: "settings",
    },
    {
      id: 4,
      title: "Suggest a feature",
      icon: (
        <SuggestAFeacture color={selectedTab === "feature" ? "#fff" : "#000"} />
      ),
      to: "feature",
    },
    {
      id: 5,
      title: "Report an Issue",
      icon: <ReportIssue color={selectedTab === "issue" ? "#fff" : "#000"} />,
      to: "issue",
    },
  ];
  const [columns, setColumns] = useState({
    saved: {
      id: "saved",
      list: filterJobsByType("saved"),
    },
    applied: {
      id: "applied",
      list: filterJobsByType("applied"),
    },
    interviewing: {
      id: "interviewing",
      list: filterJobsByType("interviewing"),
    },
    offer: {
      id: "offer",
      list: filterJobsByType("offer"),
    },
    rejected: {
      id: "rejected",
      list: filterJobsByType("rejected"),
    },
  });
  const onDragEnd = ({ source, destination }) => {
    console.log(source, destination);
    if (destination === undefined || destination === null) return null;
    if (
      source.droppableId === destination.droppableId &&
      destination.index === source.index
    )
      return null;
    const start = columns[source.droppableId];
    const end = columns[destination.droppableId];
    if (start === end) {
      const newList = start?.list.filter((_, idx) => idx !== source.index);
      newList?.splice(destination.index, 0, start.list[source.index]);
      const newCol = {
        id: start.id,
        list: newList,
      };
      setColumns((state) => ({ ...state, [newCol.id]: newCol }));
      return null;
    } else {
      const newStartList = start?.list?.filter(
        (_, idx) => idx !== source.index
      );
      const newStartCol = {
        id: start.id,
        list: newStartList,
      };
      const newEndList = end?.list;
      newEndList?.splice(destination.index, 0, start?.list[source.index]);
      const newEndCol = {
        id: end?.id,
        list: newEndList,
      };
      setColumns((state) => ({
        ...state,
        [newStartCol.id]: newStartCol,
        [newEndCol.id]: newEndCol,
      }));
      return null;
    }
  };

  const TopBanner = ({ setopenMenu }) => {
    return (
      <div
        style={{
          width: "100%",
        }}
        className="flex  w-[90%] justify-between bg-white p-3 items-center rounded-lg "
      >
        <div className="flex items-center gap-2 max-[1000px]:hidden">
          My 2023 Job Search
        </div>
        <MenuIcon
          onclick={() => {
            setopenMenu((p) => !p);
          }}
        />
        <div className="flex gap-5">
          <SearchBar customClass={"w-[100%] max-[1000px]:w-[50%]"} />
          <Button
            title={"Create"}
            onClick={() => {
              setOpen(true);
            }}
          />
        </div>
      </div>
    );
  };
  const Boards = () => {
    return (
      <div
        className="h-[100%] container-snap w-[100%] flex gap-2 max-[1000px]:flex-col"
        style={{
          overflowX: "scroll",
        }}
      >
        {Object.values(columns).map((col) => (
          <div>
            <JobCardContainer id={col.id} key={col.id} jobs={col.list}>
              {col.list.map((job, index) => {
                return (
                  <div>
                    <Draggable draggableId={job?.id} index={index}>
                      {(provided) => (
                        <div
                          key={index}
                          className="bg-white p-3 rounded-lg shadow-md"
                          ref={provided.innerRef}
                          {...provided.draggableProps}
                          {...provided.dragHandleProps}
                        >
                          <JobCard
                            key={job?.id}
                            job={job}
                            index={index}
                            setclose={setclose}
                          />
                        </div>
                      )}
                    </Draggable>
                  </div>
                );
              })}
            </JobCardContainer>
          </div>
        ))}
        {/* {lists?.map((list, index) => {
               return (
                  <JobCardContainer
                     key={index}
                     title={list}
                     jobs={filterJobsByType(list)}
                     setclose={setclose}>
                     {filterJobsByType(list)?.map((job, index) => {
                        return (
                           <JobCard
                              key={index}
                              job={job}
                              setclose={setclose}
                           />
                        );
                     })}
                  </JobCardContainer>
               );
            })} */}

        <ListForm
          listName={listName}
          setListName={setListName}
          addList={addList}
          setAddList={setAddList}
          handleSubmit={handleAddList}
        />
      </div>
    );
  };

  return (
    <Layout
      open={openMenu}
      SIDEBAR_ITEMS={SIDEBAR_ITEMS}
      selectedTab={selectedTab}
      setselectedTab={setselectedTab}
      setopenMenu={setopenMenu}
    >
      <TopBanner setopenMenu={setopenMenu} />
      <AddJobModal open={open} setOpen={setOpen} />{" "}
      <DragDropContext onDragEnd={onDragEnd}>
        <Boards />
      </DragDropContext>
      {/* {selectedTab === "boards" && <Boards />}
         {selectedTab === "networking" && <Networking />}
         {selectedTab === "archive" && <Archive />}
         {selectedTab === "settings" && <Loop />}
         {selectedTab === "feature" && <Features />}
         {selectedTab === "issue" && <Report />} */}
      <JobDetailsModal open={close} setOpen={setclose} />
    </Layout>
  );
}
