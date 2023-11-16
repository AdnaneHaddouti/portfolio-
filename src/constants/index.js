// data.js

import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  docker,
  meta,
  tangermed,
  oneeicon,
  webpack,
  php,
  tangerm,
  strapi,
  refferal,
  docfilms,
  annance,
  blockchain,
  solidity,

} from "../assets";

const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "project",
    title: "Projects",
  },
  {
    id: "tachnologies",
    title: "Technologies",
  },
];

const services = [
  {
    title: "Full Stack Developer",
    icon: web,
  },
  {
    title: "DevOps Engineer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Frontend Developer",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "Solidity",
    icon: solidity,
  },
  {
    name: "PHP",
    icon: php,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "docker",
    icon: docker,
  },
  {
    name: "Meta",
    icon: meta,
  },
  {
    name: "Webpack",
    icon: webpack,
  },
];

const experiences = [
  {
    title: "Full-stack developer - Internship",
    company_name: "Tanger Med Port Authority (TMPA)",
    date: "2 Mois | Tanger, Maroc",
    icon: tangermed,
    iconBg: "#E6DEDD",
    points: [
      "Display the pop-up in the main context on the relevant website pages.",
      "Allow users to input and submit reviews about the services.",
      "Ensure that the pop-up interface is intuitive and straightforward for users to use.",
      "Allow administrators to log in to the dashboard or table with secure credentials.",
      "Present four surface-level statistics and analyses, similar to ratings.",
      "Provide four filtering and sorting options to facilitate the search and management of reviews."
    ],
  },
  {
    title: "Full-stack developer - Internship",
    company_name: "National Office of Electricity and Drinking Water (ONEE)",
    date: "1 Mois | Al-Hoceïma, Maroc",
    icon: oneeicon,
    iconBg: "#E6DEDD",
    points: [
      "Developing and maintaining web applications using PHP and other related technologies.",
      "Dashboard for effective management of advertisements.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Email messaging system for customer service."
    ],
  },
];

const projects = [
  {
    name: "E-Commerce Application 'CosmétiqueProd'",
    description: "This project, named 'CosmétiqueProd', is an E-Commerce application built with Node.js, Strapi (Headless CMS), React, and Material-UI. It enables users to explore and purchase cosmetic products.",
    tags: [
      {
        name: "Nodejs",
        color: "blue-text-gradient",
      },
      {
        name: "Strapi",
        color: "green-text-gradient",
      },
      {
        name: "React",
        color: "pink-text-gradient",
      },
      {
        name: "MUI",
        color: "white-text-gradient",
      },
    ],
    image: strapi,
    source_code_link: "https://github.com/",
  },
  {
    name: "Revision Management Application",
    description: "Developed using UML, the MERN stack (MongoDB, Express.js, React, Node.js), Material UI, and Webpack, this application facilitates the efficient management of revisions. UML is employed for modeling, while the MERN stack ensures a robust and dynamic system.",
    tags: [
      {
        name: "UML",
        color: "blue-text-gradient",
      },
      {
        name: "MERN stack",
        color: "green-text-gradient",
      },
      {
        name: "MUI",
        color: "pink-text-gradient",
      },
      {
        name: "Webpack",
        color: "white-text-gradient",
      },
    ],
    image: tangerm,
    source_code_link: "https://github.com/",
  },
  {
    name: "Web 3.0 Blockchain Crowdfunding Application",
    description: "A cutting-edge web application utilizing Solidity for smart contract development, Thirdweb for blockchain interaction, Git and GitHub for version control, React for the frontend, and Tailwind CSS for styling. The project focuses on implementing crowdfunding functionalities on the blockchain.",
    tags: [
      {
        name: "Solidity",
        color: "blue-text-gradient",
      },
      {
        name: "Thirdweb",
        color: "green-text-gradient",
      },
      {
        name: "Git",
        color: "pink-text-gradient",
      },
      {
        name: "GitHub",
        color: "white-text-gradient",
      },
    ],
    image: blockchain,
    source_code_link: "https://github.com/",
  },
  {
    name: "Documentary Film Application 'DocFilms'",
    description: "'DocFilms' is a documentary film application developed with .NET (C#), utilizing SQL Server for database management, MVC for a structured architecture, and Bootstrap for responsive and visually appealing design. It provides a comprehensive platform for managing and viewing documentary films.",
    tags: [
      {
        name: ".NET(C#)",
        color: "blue-text-gradient",
      },
      {
        name: "SQL Server",
        color: "green-text-gradient",
      },
      {
        name: "MVC",
        color: "pink-text-gradient",
      },
      {
        name: "Bootstrap",
        color: "white-text-gradient",
      },
    ],
    image: docfilms,
    source_code_link: "https://github.com/",
  },
  {
    name: "Web Advertisement Management Application",
    description: "Employing Merise for database design, PHP for server-side scripting, MySQL for data storage, PowerAMC for modeling, and jQuery along with Bootstrap for enhanced user interface features. The application serves as a robust system for managing and displaying online advertisements.",
    tags: [
      {
        name: "Merise",
        color: "blue-text-gradient",
      },
      {
        name: "PHP",
        color: "green-text-gradient",
      },
      {
        name: "MySQL",
        color: "pink-text-gradient",
      },
      {
        name: "PowerAMC",
        color: "white-text-gradient",
      },
    ],
    image: annance,
    source_code_link: "https://github.com/",
  },
  {
    name: "Traffic Generation by Referral Application",
    description: "This project involves the development of a web application using HTML, CSS, JavaScript, jQuery, and Bootstrap. The focus is on creating a user-friendly platform for generating traffic through referral mechanisms, providing a seamless experience for users.",
    tags: [
      {
        name: "HTML",
        color: "blue-text-gradient",
      },
      {
        name: "CSS",
        color: "green-text-gradient",
      },
      {
        name: "JavaScript",
        color: "pink-text-gradient",
      },
      {
        name: "jQuery",
        color: "white-text-gradient",
      },
    ],
    image: refferal,
    source_code_link: "https://github.com/",
  },
];


export { navLinks, services, technologies, experiences, projects };
