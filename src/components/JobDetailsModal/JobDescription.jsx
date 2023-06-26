/** @format */

import React, { useRef, useState } from "react";
import JobDetailsModal from ".";
import EditIcon from "@/src/assets/EditIcon";
import Button from "../Button";
import ToolBar from "../ToolBar";
import { Editor } from "@tinymce/tinymce-react";
import { toast } from "react-hot-toast";
import { useDispatch } from "react-redux";
import { editJob, getJobById } from "@/src/store/jobReducer";

export default function JobDescription({ jobs, inputData, setinputData }) {
  const [change, setchange] = useState(false);
  const editorRef = useRef(null);
  const log = () => {
    if (editorRef.current) {
      console.log("TEST", editorRef.current.getContent());
      setinputData({
        ...inputData,
        jobDescription: editorRef.current.getContent(),
      });
    }
  };
  const dispatch = useDispatch();
  const { jobDescription } = inputData;

  const handleSubmit = async () => {
    if (jobDescription !== "") {
      const body = {
        id: jobs.id,
        ...inputData,
      };
      await dispatch(editJob(body));
      dispatch(getJobById(body?.id));
      toast.success("Job Description Updated Successfully");
      setchange(false);
    } else {
      toast.error("You have missed some field!");
    }
  };
  return (
    <>
      <div className="mb-3">
        <h1 className="font-semibold max-[1000px]:ml-7">Description</h1>
        {!change ? (
          <>
            <div
              className="absolute top-6 right-4 cursor-pointer"
              onClick={() => {
                setchange(true);
              }}
            >
              <EditIcon />
            </div>
            <div dangerouslySetInnerHTML={{ __html: jobs.jobDescription }} />
          </>
        ) : (
          <div className="absolute top-6 right-4 flex gap-2">
            <Button
              title={"Cancel"}
              customClass={" text-[#57A4F2] hover:bg-gray-200"}
              onClick={() => {
                setchange(false);
              }}
            />

            <Button
              title={"Save"}
              customClass={"bg-[#57A4F2] text-[white] hover:bg-gray-300"}
              onClick={() => {
                handleSubmit();
              }}
            />
          </div>
        )}
      </div>
      {!change ? (
        <div></div>
      ) : (
        <div className="flex flex-col">
          {/* <textarea className="w-[100%] bg-[#fff] h-auto border-none min-h-[40vh]"></textarea> */}

          <Editor
            initialValue={jobs.jobDescription}
            apiKey="qg0r5p4371d3r2v8ypb8nsduls2kusdwmhdoyyfgddjolw4c"
            onInit={(evt, editor) => (editorRef.current = editor)}
            onChange={log}
            init={{
              height: 500,
              menubar: false,
              plugins: [
                "advlist",
                "autolink",
                "lists",
                "link",
                "image",
                "charmap",
                "preview",
                "anchor",
                "searchreplace",
                "visualblocks",
                "code",
                "fullscreen",
                "insertdatetime",
                "media",
                "table",
                "code",
                "help",
                "wordcount",
              ],
              toolbar:
                "undo redo | blocks | " +
                "bold italic forecolor | alignleft aligncenter " +
                "alignright alignjustify | bullist numlist outdent indent | " +
                "removeformat | help",
              content_style:
                "body { font-family:Helvetica,Arial,sans-serif; font-size:14px ,color:#8246FD }",
            }}
          />
        </div>
      )}
    </>
  );
}
