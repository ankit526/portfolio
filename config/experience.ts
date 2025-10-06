import { ValidSkills } from "./constants";

export interface ExperienceInterface {
  id: string;
  position: string;
  company: string;
  location: string;
  startDate: Date;
  endDate: Date | "Present";
  description: string[];
  achievements: string[];
  skills: ValidSkills[];
  companyUrl?: string;
  logo?: string;
}

export const experiences: ExperienceInterface[] = [
  {
    "id": "zehntech",
    "position": "Software Engineer",
    "company": "Zehntech Technologies",
    "location": "",
    "startDate": new Date("2023-09-01"),
    "endDate": "Present",
    "description": [
      "Spearheaded Web apps development with modern technologies and provided tailored solutions to meet client needs.",
      "Proficient in building Single Page Applications (SPA) using React, Remix, NodeJS, and Shopify for app development.",
      "Collaborated closely with cross-functional teams to ensure seamless integration of apps within the Shopify platform and web apps."
    ],
    "achievements": [],
    "skills": [
      "NodeJs",
      "Remix",
      "NodeJS",
      "Shopify",
      "Node",
      "PHP",
      "Laravel",
      "GraphQL",
      "Tailwind CSS",
      "Git"
    ],
    "companyUrl": "",
    "logo": ""
  },
  {
    "id": "odessa",
    "position": "Pre-Hire Training Program",
    "company": "Odessa Technologies Inc",
    "location": "",
    "startDate": new Date("2023-02-01"),
    "endDate": new Date("2023-05-31"),
    "description": [
      "Successfully completed Odessa’s intensive online training program focused on RDBMS, SQL, and C# (.NET).",
      "Gained hands-on experience writing SQL queries, building basic C# applications, and understanding enterprise software practices.",
      "Earned a Certificate of Completion after successfully passing technical assessments."
    ],
    "achievements": [],
    "skills": [
      "C# (.NET)",
      "RDBMS",
      "SQL"
    ],
    "companyUrl": "",
    "logo": ""
  }
];
