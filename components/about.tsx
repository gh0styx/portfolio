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
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Inventore
        architecto quasi autem! Fugiat enim libero necessitatibus nemo,
        consequatur, iure accusantium dolor recusandae adipisci ipsa, deleniti
        laboriosam soluta consequuntur? Sed, voluptas. Non vero voluptates
        placeat facilis harum, aperiam doloremque, ab odio consequatur nobis
        magni minima sed sint! Excepturi magnam, ullam, officia delectus
        possimus ab sit est quam, quisquam sed temporibus aut. Ex sed unde dicta
        totam, architecto, facere illo commodi dolorem nisi enim, rem assumenda
        in quibusdam delectus veniam aliquid provident id. Quod fugit
        perferendis fugiat cupiditate blanditiis quas est expedita? Voluptates
        quibusdam eligendi ex quaerat blanditiis eius labore iure dolorem!
        Perferendis error nulla aspernatur architecto aliquam ut consequuntur.
        Officiis, aut quis? Ullam porro illo dolores quam! Vitae soluta ipsam
        nostrum? Alias dolorem soluta reprehenderit, molestiae maiores facere
        vitae, cupiditate amet, ratione voluptatibus distinctio! Ex fugit rem
        iste corporis, atque possimus laudantium maxime maiores, eligendi amet
        quos recusandae aliquid. A, dolorem.
      </p>
    </motion.section>
  );
}
