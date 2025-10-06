import { Icons } from "@/components/common/icons";

export interface skillsInterface {
  name: string;
  description: string;
  rating: number;
  icon: any;
}

export const skillsUnsorted: skillsInterface[] =[
  {
    name: "Node.js",
    description:
      "Run JavaScript on the server to build scalable and high-performance applications.",
    rating: 5,
    icon: Icons.nodejs,
  },
  {
    name: "DSA",
    description:
      "Solved 200+ data structures and algorithms questions, strong problem-solving skills.",
    rating: 4,
    icon: Icons.algorithm || null, // Use a fitting icon or fallback
  },
  {
    name: "C++",
    description:
      "General-purpose programming language known for performance and system programming.",
    rating: 5,
    icon: Icons.cpp,
  },
  {
    name: "Laravel",
    description:
      "Elegant PHP framework for building robust and scalable web applications easily.",
    rating: 4,
    icon: Icons.php || Icons.backend || Icons.default || null,
  },
  {
    name: "express.js",
    description:
      "Minimal and flexible Node.js web application framework for building APIs and web apps.",
    rating: 5,
    icon: Icons.express,
  },
  {
    name: "Shopify",
    description:
      "E-commerce platform for creating and managing online stores with ease.",
    rating: 5,
    icon: Icons.express,
  },
  {
    name: "Javascript",
    description:
      "Versatile scripting language used to create dynamic and interactive web content.",
    rating: 5,
    icon: Icons.javascript,
  },
  {
    name: "CSS 3",
    description:
      "Style and layout web pages using modern features like flexbox, grid, and animations.",
    rating: 5,
    icon: Icons.css3,
  },
  {
    name: "Tailwind CSS",
    description:
      "Utility-first CSS framework for rapidly building custom and responsive designs.",
    rating: 5,
    icon: Icons.tailwindcss,
  },
  {
    name: "GraphQL",
    description:
      "Query language for your API that lets clients request exactly the data they need.",
    rating: 4,
    icon: Icons.graphql,
  },
  {
    name: "MongoDB",
    description:
      "NoSQL database designed for scalability and flexibility with JSON-like documents.",
    rating: 4,
    icon: Icons.mongodb,
  },
  {
    name: "HTML 5",
    description:
      "The standard markup language for creating modern and structured web pages.",
    rating: 4,
    icon: Icons.html5,
  },
  {
    name: "Bootstrap",
    description:
      "Popular front-end toolkit for building responsive and mobile-first websites.",
    rating: 4,
    icon: Icons.bootstrap,
  },
  {
    name: "MySQL",
    description:
      "Reliable relational database management system for storing structured data.",
    rating: 4,
    icon: Icons.mysql,
  },
  {
    name: "Netlify",
    description:
      "Platform for deploying, hosting, and managing modern web projects effortlessly.",
    rating: 4,
    icon: Icons.netlify,
  },
  {
    name: "Nest.js",
    description:
      "Progressive Node.js framework for building efficient, scalable server-side apps.",
    rating: 3,
    icon: Icons.nestjs,
  }
];



export const skills = skillsUnsorted;

export const featuredSkills = skills.slice(0, 6);
