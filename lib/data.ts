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
    title: "Project 1",
    description:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit.   Amet, accusamus ab iusto nam esse quae vero recusandae sapiente rerum.",

    tags: ["React", "Next.js", "MongoDB", "Tailwind", "Prisma"],
  },
  {
    title: "Project 2",
    description:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit.   Amet, accusamus ab iusto nam esse quae vero recusandae sapiente rerum.",
    tags: ["React", "TypeScript", "Next.js", "Tailwind", "Redux"],
  },
  {
    title: "Project 3",
    description:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit.   Amet, accusamus ab iusto nam esse quae vero recusandae sapiente rerum.",
    tags: ["React", "Next.js", "SQL", "Tailwind", "Framer"],
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
  "Redux",
  "GraphQL",
  "Express",
  "Python",
] as const;
