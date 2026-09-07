export type Semester = {
  year: string;
  label: string;
  courses: string[];
};

export const SEMESTERS: Semester[] = [
  {
    year: "Year 1",
    label: "Semester 1",
    courses: [
      "Compulsory English I",
      "Compulsory Nepali I",
      "Mathematics I",
      "Programming in C",
      "Fundamentals of IT",
      "Foundations of Education",
    ],
  },
  {
    year: "Year 1",
    label: "Semester 2",
    courses: [
      "Compulsory English II",
      "Compulsory Nepali II",
      "Mathematics II",
      "Object-Oriented Programming (OOP)",
      "Data Structures & Algorithms",
      "Educational Psychology",
    ],
  },
  {
    year: "Year 2",
    label: "Semester 3",
    courses: [
      "Database Management Systems (DBMS)",
      "Web Technology",
      "Curriculum & Evaluation",
      "Operating Systems",
    ],
  },
  {
    year: "Year 2",
    label: "Semester 4",
    courses: [
      "Computer Networks",
      "Software Engineering",
      "Instructional Design",
      "Java Programming",
    ],
  },
  {
    year: "Year 3",
    label: "Semester 5",
    courses: [
      "Python & AI Basics",
      "E-Learning Systems",
      "Information Security",
      "Mini Software Project",
    ],
  },
  {
    year: "Year 3",
    label: "Semester 6",
    courses: [
      "Mobile App Development",
      "Cloud Computing",
      "Research Methodology in Education",
    ],
  },
  {
    year: "Year 4",
    label: "Semester 7",
    courses: [
      "AI in Education",
      "Educational Leadership",
      "School Teaching Practicum",
      "Capstone Project I",
    ],
  },
  {
    year: "Year 4",
    label: "Semester 8",
    courses: [
      "Industry / School Internship",
      "Final Capstone Project Defense",
      "Professional Ethics",
    ],
  },
];

export const FACULTY = [
  {
    name: "Indra Parsad Sapkota",
    title: "Program Director / Head of Department",
    initials: "IS",
    expertise: [
      "Educational Technology",
      "System Analysis & Design",
      "Educational Leadership",
    ],
  },
  {
    name: "Shreeraj Khatiwada",
    title: "Senior Programming & IT Instructor",
    initials: "SK",
    expertise: [
      "Programming in C",
      "Object-Oriented Programming (OOP)",
      "Data Structures & Algorithms",
      "Web Technology",
    ],
  },
];

export const CONTACT = {
  institution: "Makwanpur Multiple Campus (MMC)",
  address: "Hetauda-4, Makwanpur, Bagmati Province, Nepal",
  phone: "057-520620",
  phoneHref: "tel:057520620",
  email: "mmc@ntc.net.np",
};

export const LEADS_KEY = "bicte_inquiries";

export type Lead = {
  id: string;
  fullName: string;
  phone: string;
  email: string;
  message: string;
  submittedAt: string;
};
