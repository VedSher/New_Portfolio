

import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs, // Replace with the actual import for your SQL icon
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "Frontend Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
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
    name: "TypeScript",
    icon: typescript,
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
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "Git",
    icon: git,
  },
  {
    name: "Figma",
    icon: figma,
  },
  {
    name: "SQL",
    icon: "/sql.png", // Corrected icon for SQL
  },
  {
    name: "Docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "Web Developer Intern",
    company_name: "Alesa Ai Ltd",
    icon: starbucks,
    iconBg: "#383E56",
    date: "September 2024 - December 2024",
    points: [
      "Improved website performance and user experience by optimizing React.js applications, leading to a 20% increase in page load speed.",
      "Enhanced market analysis techniques, resulting in more accurate insights that informed product development and marketing strategies.",
    ],
  },
  {
    title: "Summer Intern",
    company_name: "Tata Steel",
    icon: tesla,
    iconBg: "#E6DEDD",
    date: "May 2024 - June 2024",
    points: [
      "Optimized existing MERN stack applications, reducing API response times by 30%.",
      "Developed and deployed Python chatbot that automated 40% of repetitive tasks, saving significant man-hours.",
    ],
  },
];

const projects = [
  {
    name: "Task-Man",
    description:
      "A Full Stack MERN Project-a complete task manager application with authentication using the MERN Stack. We will be using MongoDB, Express, React, and Node.js.",
    tags: [
      {
        name: "Next.js",
        color: "blue-text-gradient",
      },
      {
        name: "MongoDB",
        color: "green-text-gradient",
      },
      {
        name: "Node.js",
        color: "pink-text-gradient",
      },
    ],
    image: "/taskman.png",
    source_code_link: "https://github.com/VedSher/TaskMan",
  },
  {
    name: "Blog25",
    description:
      "A modern blog built with Next.js 14, Sanity.io, Tailwind CSS, and Shadcn UI, featuring dark mode, optimized caching, and seamless deployment on Vercel.",
    tags: [
      {
        name: "Next.js",
        color: "blue-text-gradient",
      },
      {
        name: "Sanity.io",
        color: "green-text-gradient",
      },
      {
        name: "Shadcn UI",
        color: "pink-text-gradient",
      },
    ],
    image: "/blog.png",
    source_code_link: "https://github.com/VedSher/Blog-25",
  },
  {
    name: "Chathive",
    description:
      "Build an interactive real-time chat application using Django and Django Channels. It supports instant messaging via WebSockets, user authentication, and multiple chatrooms.",
    tags: [
      {
        name: "Django",
        color: "blue-text-gradient",
      },
      {
        name: "HTML/CSS",
        color: "green-text-gradient",
      },
      {
        name: "JavaScript",
        color: "pink-text-gradient",
      },
    ],
    image: "/chatspace.png",
    source_code_link: "https://github.com/VedSher/Studyhive",
  },
];

export { services, technologies, experiences, projects };
