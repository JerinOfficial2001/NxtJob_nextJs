/** @format */

import { DragDropContext, Droppable } from "react-beautiful-dnd";

export const JobCardContainer = ({
  id,
  jobs,
  setclose,
  children,
  onDragEnd,
}) => {
  return (
    <div
      className="flex flex-col   rounded-md shadow-lg bg-[#F6F4F4] border-2 p-2"
      style={{ minWidth: "22vw" }}
    >
      <div className="flex justify-between items-center p-3">
        <span className="capitalize">{id}</span>
        <span>{jobs?.length} Jobs</span>
      </div>
      <Droppable droppableId={id}>
        {(provided) => {
          return (
            <div
              id={id}
              ref={provided.innerRef}
              {...provided.droppableProps}
              className="container-snap h-[500px] overflow-y-scroll flex flex-col gap-3 px-2"
            >
              {children}
            </div>
          );
        }}
      </Droppable>
    </div>
  );
};
