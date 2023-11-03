"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";

export default function About() {
  const { ref } = useSectionInView("About");

  return (
    <motion.section
      ref={ref}
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>About me</SectionHeading>
      <p>
        I'm an aspiring frontend developer with a passion for creating beautiful
        and interactive web applications. My university and self-study helped me
        gain skills in HTML, CSS and JavaScript. I strive for constant growth
        and development, and is ready to actively learn and apply new
        technologies. My goal is to become an experienced developer and
        contribute to creating amazing web applications.
      </p>
    </motion.section>
  );
}
