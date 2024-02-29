import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  //   {
  //     name: "Experience",
  //     hash: "#experience",
  //   },
  //   {
  //     name: "Contact",
  //     hash: "#contact",
  //   },
] as const;

export const projectsData = [
  {
    title: "techX",
    description:
      "Diploma project. Tech shop with Next.js, MongoDB, shadcnUI, headlessUI, Redux.",

    tags: [
      "React",
      "Next.js",
      "MongoDB",
      "Tailwind",
      "Prisma",
      "shadcnUI",
      "headlessUI",
      "Redux",
    ],
    link: "https://github.com",
    imageUrl: "/images/techX.png",
  },
  {
    title: "Chat App",
    description: "Chat App with ChatEngine. Realtime chat application.",
    tags: ["React", "Vite", "JavaScript", "Express", "ChatEngine"],
    link: "https://github.com/1lexaa/Chat-React-Node-.git",
    imageUrl: "/images/chat.png",
  },
  {
    title: "Quiz App",
    description: "Team Work for STEP University. Quiz App for students.",
    tags: ["React", "MongoDB", "TypeScript", "CSS", "Node.js", "Express"],
    link: "https://github.com/1lexaa/Quiz.git",
    imageUrl: "/public/quiz.png",
  },
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "Git",
  "Tailwind",
  "MongoDB",
  "shadcnUI",
  "Express",
  "headlessUI",
  "framer-motion",
] as const;
