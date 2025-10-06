import { ValidCategory, ValidExpType, ValidSkills } from "./constants";

interface PagesInfoInterface {
  title: string;
  imgArr: string[];
  description?: string;
}

interface DescriptionDetailsInterface {
  paragraphs: string[];
  bullets: string[];
}

export interface ProjectInterface {
  id: string;
  type: ValidExpType;
  companyName: string;
  category: ValidCategory[];
  shortDescription: string;
  websiteLink?: string;
  githubLink?: string;
  techStack: ValidSkills[];
  startDate: Date;
  endDate: Date;
  companyLogoImg: any;
  descriptionDetails: DescriptionDetailsInterface;
  pagesInfoArr: PagesInfoInterface[];
}

export const Projects: ProjectInterface[] = [
  {
    id: "sott",
    companyName: "London E-Commerse Co.",
    type: "Professional",
    category: ["Web Dev", "Full Stack", "UI/UX"],
    shortDescription:
      "Conceptualized and developed a real-time web app enhancing customer experience using NodeJS, PHP, MySQL, HTML, and Tailwind CSS. Built over six applications to drive cross-selling and expand market reach by synchronizing product listings, pricing, and inventory across platforms. Automated data exchange to reduce manual effort and errors, while collaborating closely with clients and cross-functional teams to deliver user-friendly, business-aligned solutions that boost sales performance. ",
    websiteLink: "https://signofthetimeslondon.com/",
    techStack: [
      "Node.js",
      "PHP",
      "AJAX",
      "Tailwind CSS",
      "GraphQL",
      "Laravel",
      "Liquid",
    ],
    startDate: new Date("2021-07-01"),
    endDate: new Date("2022-07-01"),
    companyLogoImg: "/projects/sott/logo.png",
    pagesInfoArr: [
    ],
    descriptionDetails: {
      paragraphs: [
        "During my time at Builtdesign, I had the opportunity to work on a dynamic and user-focused project that involved designing and optimizing a website catering to a user base of over 4000 individuals. My role as a full-stack web developer was to ensure a seamless experience for users by creating an efficient and maintainable platform.",
        "I collaborated closely with the product team to integrate cutting-edge features, employing technologies like Next.js and React with TypeScript for captivating front-end experiences. Additionally, I contributed significantly to the backend by utilizing Node.js, MongoDB, and GraphQL to design robust APIs and ensure smooth system functionality.",
        "This experience allowed me to enhance my skills in various areas of web development and deliver a high-quality product. I gained proficiency in front-end technologies such as Material UI and Tailwind CSS, as well as backend technologies including Nest.js and MySQL. The project's success in catering to a large user base and providing an intuitive user interface has further motivated me to pursue excellence in web development.",
      ],
      bullets: [
        "Designed and customize pages for the campaign website, ensuring a cohesive and engaging user experience.",
        "Collaborated closely with the product team to implement cutting-edge features.",
        "Helped in increase the website traffic by 30% through SEO optimization and targeted marketing strategies."
      ],
    },
  },
  {
    id: "price-automation",
    companyName: "Consign Luxury Resale",
    type: "Professional",
    category: ["Web Dev", "Automation", "Full Stack"],
    shortDescription:
      "Built a full-stack application to streamline product consignment, offer management, and inventory uploads for a luxury resale platform. Developed and integrated automated email notifications for product submission, client offer communication, and customer offer acceptance. Gained hands-on experience in backend logic, form handling, email automation, and embedding business workflows into scalable web solutions.",
    websiteLink: "https://signofthetimeslondon.com/",
    techStack: [
      "Node.js",
      "PHP",
      "AJAX",
      "Tailwind CSS",
      "GraphQL",
      "Laravel",
      "Liquid",
    ],
    startDate: new Date("2021-07-01"),
    endDate: new Date("2022-07-01"),
    companyLogoImg: "/projects/automation/logo.webp",
    pagesInfoArr: [
    ],
    descriptionDetails: {
      paragraphs: [
        "Built a full-stack application to streamline product consignment, offer management, and inventory uploads for a luxury resale platform. Developed and integrated automated email notifications for product submission, client offer communication, and customer offer acceptance. Gained hands-on experience in backend logic, form handling, email automation, and embedding business workflows into scalable web solutions."],
      bullets: [
        "Developed and optimized a high-performing website catering to over 4000 users.",
        "Collaborated closely with the product team to implement cutting-edge features.",
        "Created an intuitive admin dashboard to efficiently manage and announce contest winners.",
        "Leveraged Next.js, React with TypeScript for captivating front-end experiences.",
        "Utilized Node.js, MongoDB, and GraphQL to design and manage databases.",
      ],
    },
  },
  {
    id: "car-rental",
    companyName: "Car-Rental",
    type: "Personal",
    category: ["Full Stack", "Rental System", "Inventory"],
    shortDescription:
      "Developed a robust Car Rental System from scratch with role-based Admin/Super Admin modules, core booking and management features, and efficient file-based data storage using OOP and file I/O techniques.",
    techStack: [
      "C++",
      "File System",
      "Console App",
    ],
    startDate: new Date("2024-06-01"),
    endDate: new Date("2025-02-01"),
    companyLogoImg: "/projects/carRental/carRental.webp",
    pagesInfoArr: [
      {
        title: "Product Submission & Offer Flow",
        description:
          "Handled complete product intake with automated email workflows for price approval and inventory sync.",
        imgArr: [/* Images to be added */],
      },
    ],
    descriptionDetails: {
      paragraphs: [
        "Developed a complete Car Rental System from scratch with distinct Admin and Super Admin modules featuring role-based access control. Implemented core features including vehicle booking, availability management, user registration, and rental history tracking. Designed an efficient file-based data storage system ensuring data integrity and fast retrieval. Applied strong object-oriented programming and file I/O techniques to create a robust, maintainable application. ",
      ],
      bullets: [
        "Developed a full-featured Car Rental System in C++ with separate Admin and Super Admin modules implementing role-based access control.",
        "Implemented core functionalities including vehicle booking, availability management, user registration, and rental history tracking.",
        "Designed and optimized a file-based data storage system using OOP and file handling to ensure data integrity and fast retrieval.",
      ],
    },
  },
  {
    "id": "mylivecart-shopify-integration",
    "companyName": "Mylivecart",
    "type": "Professional",
    "category": ["Web Dev", "Integration", "E-commerce", "Live Streaming"],
    "shortDescription": "Contributed to the development and integration of a live shopping platform with Shopify, enabling real-time product demonstrations and direct purchases during live streams.",
    "techStack": [
      "JavaScript",
      "React(Remix)",
      "Node.js",
      "REST APIs",
      "WebSocket",
      "Shopify API"
    ],
    "startDate": new Date("2023-03-01"),
    "endDate": new Date("2024-04-30"),
    "companyLogoImg": "/projects/mylivecart/logo.webp",
    "pagesInfoArr": [
      {
        "title": "Shopify Integration & Live Shopping",
        "description": "Implemented Shopify store integration to enable live shopping events, allowing customers to interact and purchase products directly during live streams.",
        "imgArr": [/* Images to be added */]
      }
    ],
    "descriptionDetails": {
      "paragraphs": [
        "Collaborated as part of the development team to build and enhance the live shopping integration for Shopify stores, improving customer engagement and boosting sales through live events.",
        "Worked on real-time interaction features and seamless synchronization of product data between Shopify and the live streaming platform."
      ],
      "bullets": [
        "Integrated Shopify API for product catalog syncing and order processing during live streams.",
        "Developed WebSocket-based real-time communication for interactive live shopping experiences.",
        "Supported multi-platform live streaming with real-time analytics for customer engagement tracking.",
        "Ensured smooth data flow and synchronization between Shopify and Mylivecart systems to maintain accurate product availability."
      ]
    }
  },
  {
  "id": "multi-platform-selling",
  "companyName": "Client Projects",
  "type": "Professional",
  "category": ["Web Development", "E-commerce", "Integration", "Inventory Management"],
  "shortDescription": "Developed multiple applications enabling clients to sell products on platforms like John Lewis, BrandAlley, Next Brand, with seamless inventory synchronization.",
  "techStack": [
    "Node.js",
    "Laravel",
    "MySQL",
    "REST APIs",
    "JavaScript",
    "Cron Jobs"
  ],
  "startDate": new Date("2022-05-01"),
  "endDate": new Date("2023-11-30"),
  "companyLogoImg": "/projects/crollsell/logo.png",
  "pagesInfoArr": [
    {
      "title": "Multi-Platform Selling & Inventory Sync",
      "description": "Created integrations allowing clients to list and sell products across multiple retail platforms while maintaining accurate inventory and pricing synchronization.",
      "imgArr": [/* Images to be added */]
    }
  ],
  "descriptionDetails": {
    "paragraphs": [
      "Built and deployed several robust applications to facilitate clients' product listings on major e-commerce platforms like John Lewis, BrandAlley, and Next Brand.",
      "Ensured real-time inventory synchronization and price updates to prevent overselling and maintain consistent availability across all channels."
    ],
    "bullets": [
      "Developed platform-specific integrations using Node.js and Laravel for seamless product listing and order management.",
      "Implemented automated stock and price synchronization using cron jobs and RESTful APIs.",
      "Enabled centralized inventory control to provide clients with a unified dashboard for managing products across multiple platforms.",
      "Enhanced data accuracy and operational efficiency by reducing manual updates and errors."
    ]
  }
}
];

export const featuredProjects = Projects.slice(0, 3);
