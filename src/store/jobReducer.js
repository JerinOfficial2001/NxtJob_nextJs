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
      jobDescription:
        "<p><strong>About the job</strong></p> <p>&nbsp;</p> <p>Are you passionate about UI/UX design and eager to gain hands-on experience working with a prestigious Management Consulting firm? TalentKompass Deutschland, a top Human Resources company based in Germany, is searching for a motivated UI/UX Design Intern to join our esteemed client. This remote position offers an extraordinary chance for someone who is excited to learn and develop their skills in a dynamic and fast-paced environment.</p> <p>&nbsp;</p> <p>As a UI/UX Design Intern, you will work closely with the consulting and design teams, where you will be responsible for a range of tasks, including user research, wireframing, prototyping, and usability testing. You will have the unique opportunity to learn from experienced professionals who will provide mentorship and guidance throughout the internship. With this internship, you will gain valuable experience in UI/UX design, design thinking, and teamwork &ndash; all essential skills for a successful career in this field.</p> <p>&nbsp;</p> <p>Responsibilities:</p> <p>&nbsp;</p> <p>Assist in the research, design, and prototyping of user interfaces and experiences</p> <p>Conduct user research and develop personas, user stories, and user flows</p> <p>Create wireframes, mockups, and prototypes to effectively communicate design ideas</p> <p>Collaborate with cross-functional teams to gather requirements and develop solutions</p> <p>Participate in usability testing and incorporate feedback into design iterations</p> <p>Support the team with general administrative tasks as needed</p> <p>Contribute to the creation of design documentation and style guides</p> <p>&nbsp;</p> <p>Requirements:</p> <p>&nbsp;</p> <p>Basic understanding of UI/UX design principles and practices</p> <p>Familiarity with design tools, such as Sketch, Adobe XD, Figma is a plus</p> <p>Excellent written and verbal communication skills in English</p> <p>Ability to work independently and as part of a team</p> <p>Strong analytical and problem-solving skills</p> <p>Knowledge of web and mobile design best practices is a plus</p> <p>Experience with user research methodologies and usability testing is a plus</p> <p>&nbsp;</p> <p>At TalentKompass Deutschland, we are committed to helping our interns develop their skills and reach their full potential. Our client is a reputable Management Consulting firm that will provide invaluable experience in a competitive industry. Don't miss this incredible opportunity to kick-start your career in UI/UX design.</p> <p>&nbsp;</p>",
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
      jobDescription:
        "<p><strong>About the job</strong></p> <p>&nbsp;</p> <p>Are you passionate about UI/UX design and eager to gain hands-on experience working with a prestigious Management Consulting firm? TalentKompass Deutschland, a top Human Resources company based in Germany, is searching for a motivated UI/UX Design Intern to join our esteemed client. This remote position offers an extraordinary chance for someone who is excited to learn and develop their skills in a dynamic and fast-paced environment.</p> <p>&nbsp;</p> <p>As a UI/UX Design Intern, you will work closely with the consulting and design teams, where you will be responsible for a range of tasks, including user research, wireframing, prototyping, and usability testing. You will have the unique opportunity to learn from experienced professionals who will provide mentorship and guidance throughout the internship. With this internship, you will gain valuable experience in UI/UX design, design thinking, and teamwork &ndash; all essential skills for a successful career in this field.</p> <p>&nbsp;</p> <p>Responsibilities:</p> <p>&nbsp;</p> <p>Assist in the research, design, and prototyping of user interfaces and experiences</p> <p>Conduct user research and develop personas, user stories, and user flows</p> <p>Create wireframes, mockups, and prototypes to effectively communicate design ideas</p> <p>Collaborate with cross-functional teams to gather requirements and develop solutions</p> <p>Participate in usability testing and incorporate feedback into design iterations</p> <p>Support the team with general administrative tasks as needed</p> <p>Contribute to the creation of design documentation and style guides</p> <p>&nbsp;</p> <p>Requirements:</p> <p>&nbsp;</p> <p>Basic understanding of UI/UX design principles and practices</p> <p>Familiarity with design tools, such as Sketch, Adobe XD, Figma is a plus</p> <p>Excellent written and verbal communication skills in English</p> <p>Ability to work independently and as part of a team</p> <p>Strong analytical and problem-solving skills</p> <p>Knowledge of web and mobile design best practices is a plus</p> <p>Experience with user research methodologies and usability testing is a plus</p> <p>&nbsp;</p> <p>At TalentKompass Deutschland, we are committed to helping our interns develop their skills and reach their full potential. Our client is a reputable Management Consulting firm that will provide invaluable experience in a competitive industry. Don't miss this incredible opportunity to kick-start your career in UI/UX design.</p> <p>&nbsp;</p>",
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
      jobDescription:
        "<p><strong>About the job</strong></p> <p>&nbsp;</p> <p>Are you passionate about UI/UX design and eager to gain hands-on experience working with a prestigious Management Consulting firm? TalentKompass Deutschland, a top Human Resources company based in Germany, is searching for a motivated UI/UX Design Intern to join our esteemed client. This remote position offers an extraordinary chance for someone who is excited to learn and develop their skills in a dynamic and fast-paced environment.</p> <p>&nbsp;</p> <p>As a UI/UX Design Intern, you will work closely with the consulting and design teams, where you will be responsible for a range of tasks, including user research, wireframing, prototyping, and usability testing. You will have the unique opportunity to learn from experienced professionals who will provide mentorship and guidance throughout the internship. With this internship, you will gain valuable experience in UI/UX design, design thinking, and teamwork &ndash; all essential skills for a successful career in this field.</p> <p>&nbsp;</p> <p>Responsibilities:</p> <p>&nbsp;</p> <p>Assist in the research, design, and prototyping of user interfaces and experiences</p> <p>Conduct user research and develop personas, user stories, and user flows</p> <p>Create wireframes, mockups, and prototypes to effectively communicate design ideas</p> <p>Collaborate with cross-functional teams to gather requirements and develop solutions</p> <p>Participate in usability testing and incorporate feedback into design iterations</p> <p>Support the team with general administrative tasks as needed</p> <p>Contribute to the creation of design documentation and style guides</p> <p>&nbsp;</p> <p>Requirements:</p> <p>&nbsp;</p> <p>Basic understanding of UI/UX design principles and practices</p> <p>Familiarity with design tools, such as Sketch, Adobe XD, Figma is a plus</p> <p>Excellent written and verbal communication skills in English</p> <p>Ability to work independently and as part of a team</p> <p>Strong analytical and problem-solving skills</p> <p>Knowledge of web and mobile design best practices is a plus</p> <p>Experience with user research methodologies and usability testing is a plus</p> <p>&nbsp;</p> <p>At TalentKompass Deutschland, we are committed to helping our interns develop their skills and reach their full potential. Our client is a reputable Management Consulting firm that will provide invaluable experience in a competitive industry. Don't miss this incredible opportunity to kick-start your career in UI/UX design.</p> <p>&nbsp;</p>",
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
      jobDescription:
        "<p><strong>About the job</strong></p> <p>&nbsp;</p> <p>Are you passionate about UI/UX design and eager to gain hands-on experience working with a prestigious Management Consulting firm? TalentKompass Deutschland, a top Human Resources company based in Germany, is searching for a motivated UI/UX Design Intern to join our esteemed client. This remote position offers an extraordinary chance for someone who is excited to learn and develop their skills in a dynamic and fast-paced environment.</p> <p>&nbsp;</p> <p>As a UI/UX Design Intern, you will work closely with the consulting and design teams, where you will be responsible for a range of tasks, including user research, wireframing, prototyping, and usability testing. You will have the unique opportunity to learn from experienced professionals who will provide mentorship and guidance throughout the internship. With this internship, you will gain valuable experience in UI/UX design, design thinking, and teamwork &ndash; all essential skills for a successful career in this field.</p> <p>&nbsp;</p> <p>Responsibilities:</p> <p>&nbsp;</p> <p>Assist in the research, design, and prototyping of user interfaces and experiences</p> <p>Conduct user research and develop personas, user stories, and user flows</p> <p>Create wireframes, mockups, and prototypes to effectively communicate design ideas</p> <p>Collaborate with cross-functional teams to gather requirements and develop solutions</p> <p>Participate in usability testing and incorporate feedback into design iterations</p> <p>Support the team with general administrative tasks as needed</p> <p>Contribute to the creation of design documentation and style guides</p> <p>&nbsp;</p> <p>Requirements:</p> <p>&nbsp;</p> <p>Basic understanding of UI/UX design principles and practices</p> <p>Familiarity with design tools, such as Sketch, Adobe XD, Figma is a plus</p> <p>Excellent written and verbal communication skills in English</p> <p>Ability to work independently and as part of a team</p> <p>Strong analytical and problem-solving skills</p> <p>Knowledge of web and mobile design best practices is a plus</p> <p>Experience with user research methodologies and usability testing is a plus</p> <p>&nbsp;</p> <p>At TalentKompass Deutschland, we are committed to helping our interns develop their skills and reach their full potential. Our client is a reputable Management Consulting firm that will provide invaluable experience in a competitive industry. Don't miss this incredible opportunity to kick-start your career in UI/UX design.</p> <p>&nbsp;</p>",
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
      jobDescription: "test job description",
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
      jobDescription: "test job description",
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
      jobDescription: "test job description",
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
      jobDescription: "test job description",
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
