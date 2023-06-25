/** @format */

import { createSlice } from "@reduxjs/toolkit";

const initialState = {
   job: [
      {
         id: "0234234",
         jobType: "saved",
         jobTitle: "Software Engineer",
         location: "Mountain View, CA",
         jobAddedBy: "linkedin.com",
         jobAddedDateOn: "Tue May 30 2023",
         resumeName: 75,
         coverLetterName: 1,
         mockInterviewName: 10,

         companyName: "PIXSTER STUDIO",
         description:
            "Pixster Studio offers a complete array of Mobile & Web-based services ranging from development of iOS, Android, and Web applications all the way to front-end and back-end website solutions. We’ve more than 15 products and satisfied clients all around the world.",
         website: "https://www.linkedin.com/company/pixster-studio/life/",
         industry: "Information Technology & Services",
         employeesCount: "11-50",
         address: "Ahmedabad, Gujarat, India",
         notes: [],
      },
      {
         id: "1424234",
         jobType: "applied",
         jobTitle: "Software Engineer",
         companyName: "Google",
         location: "Mountain View, CA",
         jobAddedBy: "linkedin.com",
         jobAddedDateOn: "Tue May 30 2023",
         resumeName: 0,
         coverLetterName: 60,
         mockInterviewName: 0,

         description:
            "Pixster Studio offers a complete array of Mobile & Web-based services ranging from development of iOS, Android, and Web applications all the way to front-end and back-end website solutions. We’ve more than 15 products and satisfied clients all around the world.",
         website: "https://www.linkedin.com/company/pixster-studio/life/",
         industry: "Information Technology & Services",
         employeesCount: "11-50",
         address: "Ahmedabad, Gujarat, India",
         notes: [],
      },
      {
         id: "2q24234",
         jobType: "interviewing",
         jobTitle: "Software Engineer",
         companyName: "Google",
         location: "Mountain View, CA",
         jobAddedBy: "linkedin.com",
         jobAddedDateOn: "Tue May 30 2023",
         resumeName: 70,
         coverLetterName: 20,
         mockInterviewName: 90,

         description:
            "Pixster Studio offers a complete array of Mobile & Web-based services ranging from development of iOS, Android, and Web applications all the way to front-end and back-end website solutions. We’ve more than 15 products and satisfied clients all around the world.",
         website: "https://www.linkedin.com/company/pixster-studio/life/",
         industry: "Information Technology & Services",
         employeesCount: "11-50",
         address: "Ahmedabad, Gujarat, India",
         notes: [],
      },
      {
         id: "32424",
         jobType: "offer",
         jobTitle: "Software Engineer",
         companyName: "Google",
         location: "Mountain View, CA",
         jobAddedBy: "linkedin.com",
         jobAddedDateOn: "Tue May 30 2023",
         resumeName: 70,
         coverLetterName: 10,
         mockInterviewName: 90,
         jobRole: "Software Engineer",

         description:
            "Pixster Studio offers a complete array of Mobile & Web-based services ranging from development of iOS, Android, and Web applications all the way to front-end and back-end website solutions. We’ve more than 15 products and satisfied clients all around the world.",
         website: "https://www.linkedin.com/company/pixster-studio/life/",
         industry: "Information Technology & Services",
         employeesCount: "11-50",
         address: "Ahmedabad, Gujarat, India",
         notes: [
            {
               note_id: "0",
               job_id: "3",
               note: "Salary negotiation is pending",
            },
         ],
      },
      {
         id: "43434",
         jobType: "rejected",
         jobTitle: "UI/UX Designer (Mobile Apps)",
         companyName: "Google",
         location: "Mountain View, CA",
         jobAddedBy: "linkedin.com",
         jobAddedDateOn: "Tue May 30 2023",
         resumeName: 70,
         coverLetterName: 20,
         mockInterviewName: 90,
         jobRole: "UI/UX Designer (Mobile Apps)",

         description:
            "Pixster Studio offers a complete array of Mobile & Web-based services ranging from development of iOS, Android, and Web applications all the way to front-end and back-end website solutions. We’ve more than 15 products and satisfied clients all around the world.",
         website: "https://www.linkedin.com/company/pixster-studio/life/",
         industry: "Information Technology & Services",
         employeesCount: "11-50",
         address: "Ahmedabad, Gujarat, India",
         notes: [],
      },
      {
         id: "54242",
         jobType: "saved",
         jobTitle: "UI/UX Designer (Mobile Apps)",
         companyName: "Google",
         location: "Mountain View, CA",
         jobAddedBy: "linkedin.com",
         jobAddedDateOn: "Tue May 30 2023",
         resumeName: 70,
         coverLetterName: 20,
         mockInterviewName: 0,
         jobRole: "UI/UX Designer (Mobile Apps)",

         description:
            "Pixster Studio offers a complete array of Mobile & Web-based services ranging from development of iOS, Android, and Web applications all the way to front-end and back-end website solutions. We’ve more than 15 products and satisfied clients all around the world.",
         website: "https://www.linkedin.com/company/pixster-studio/life/",
         industry: "Information Technology & Services",
         employeesCount: "11-50",
         address: "Ahmedabad, Gujarat, India",
         notes: [],
      },
      {
         id: "642424",
         jobType: "saved",
         jobTitle: "UI/UX Designer (Mobile Apps)",
         companyName: "Google",
         location: "Mountain View, CA",
         jobAddedBy: "linkedin.com",
         jobAddedDateOn: "Tue May 30 2023",
         resumeName: 30,
         coverLetterName: 20,
         mockInterviewName: 0,
         jobRole: "UI/UX Designer (Mobile Apps)",

         description:
            "Pixster Studio offers a complete array of Mobile & Web-based services ranging from development of iOS, Android, and Web applications all the way to front-end and back-end website solutions. We’ve more than 15 products and satisfied clients all around the world.",
         website: "https://www.linkedin.com/company/pixster-studio/life/",
         industry: "Information Technology & Services",
         employeesCount: "11-50",
         address: "Ahmedabad, Gujarat, India",
         notes: [],
      },
      {
         id: "742424",
         jobType: "saved",
         jobTitle: "Software Engineer",
         companyName: "Google",
         location: "Mountain View, CA",
         jobAddedBy: "linkedin.com",
         jobAddedDateOn: "Tue May 30 2023",
         resumeName: 75,
         coverLetterName: 0,
         mockInterviewName: 0,

         description:
            "Pixster Studio offers a complete array of Mobile & Web-based services ranging from development of iOS, Android, and Web applications all the way to front-end and back-end website solutions. We’ve more than 15 products and satisfied clients all around the world.",
         website: "https://www.linkedin.com/company/pixster-studio/life/",
         industry: "Information Technology & Services",
         employeesCount: "11-50",
         address: "Ahmedabad, Gujarat, India",
         notes: [],
      },
   ],
   singleJob: {},
   lists: [],
};

export const counterSlices = createSlice({
   name: "Counter",
   initialState,
   reducers: {
      createList: (state, { payload }) => {
         const temp = [...state.lists];
         temp.push(payload);
         state.lists = temp;
      },
      addJob: (state, { payload }) => {
         console.log("ADDJOBS", payload);
         const temp = [...state.job];
         temp.push(payload);
         state.job = temp;
      },
      removeJob: (state, { payload }) => {
         const id = payload;
         const temp = [...state.job];
         const index = temp.findIndex((i) => i.id === id);
         temp.splice(index, 1);
         state.job = temp;
      },
      editJob: (state, { payload }) => {
         console.log("EDITJOB", payload);
         const id = payload.id;
         const temp = [...state.job];
         const index = temp.findIndex((i) => i.id === id);
         temp.splice(index, 1, payload);
         state.job = temp;
      },
      getJobById: (state, { payload }) => {
         const id = payload;
         const job = state.job?.find((i) => i.id === id);
         console.log("GOT JOB", job);
         state.singleJob = job;
      },

      addNotes: (state, { payload }) => {
         console.log("ADDEDNOTES", payload);
         const temp = [...state.job];
         const currentJob = temp.find((i) => i.id === payload.job_id);
         currentJob?.notes.push(payload);
      },
      removeNotes: (state, { payload }) => {
         const temp = state.job.find((i) => i.id === payload.job_id).notes;
         const index = temp.findIndex((i) => i.note_id === payload.note_id);
         temp.splice(index, 1);
      },
      editNotes: (state, { payload }) => {
         console.log("EDITEDNOTES", payload);
         const id = payload.id;
         const temp = [...state.job];
         const index = temp.findIndex((i) => i.id === id);
         temp.splice(index, 0, payload);
         state.job = temp;
      },
      getNotesById: (state, { payload }) => {
         const id = payload;
         const NOTES_ARRAY = state.NOTES_ARRAY?.find((i) => i.id === id);
         console.log("GOT NOTES", NOTES_ARRAY);
         state.singleNotes = NOTES_ARRAY;
      },
      resetSingleJob: (state) => {
         state.singleJob = {};
      },
   },
});

export const { getJobs, createList, addJob, getJobById, removeJob, editJob, editNotes, removeNotes, addNotes, getNotes, getNotesById, resetSingleJob } = counterSlices.actions;
export default counterSlices.reducer;
