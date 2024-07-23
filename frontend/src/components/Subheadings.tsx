"use client";
import React from "react";
import { motion } from "framer-motion";

const subheadings = [
  "Define Your Purpose",
  "Know Your Audience",
  "Choose a Niche",
  "Create Quality Content",
  "Be Authentic",
  "Consistency is Key",
  "Optimize for SEO",
  "Engage with Your Readers",
  "Promote Your Blog",
  "Monitor Your Progress",
];

const Subheadings = () => {
  return (
    <div className="flex flex-col space-y-4">
      {subheadings.map((heading, index) => (
        <motion.p
          key={index}
          className=" font-medium hover:text-[#9f9763]"
          // style={{ animationDelay: `${index * 0.5}s` }}
          initial={{
            opacity: 0,
          }}
          whileInView={{
            opacity: 1,
            transition: {
              duration: 1,
            },
          }}
        >
          {heading}
        </motion.p>
        // <motion.circle key={index} cx={500} animate={{ cx: [null, 100] }} >{heading}</motion.circle>
      ))}
    </div>
  );
};

export default Subheadings;
