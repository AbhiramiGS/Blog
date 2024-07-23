"use client";

import { motion } from "framer-motion";
import React from "react";
import { AuroraBackground } from "./ui/aurora-background";
import Link from "next/link";
// import { AuroraBackground } from "/ui/aurora-background";

type Props = {
  title: string;
  buttonText: string;
};

export function AuroraBackgroundDemo(props: Props) {
  return (
    <AuroraBackground>
      <motion.div
        initial={{ opacity: 0.0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.3,
          duration: 0.8,
          ease: "easeInOut",
        }}
        className="relative flex flex-col gap-4 items-center justify-center px-4"
      >
        <div className="text-3xl md:text-4xl font-bold text-[#9f9763] text-center">
          {props.title}
        </div>
        <div className="font-extralight text-base md:text-4xl dark:text-neutral-200 py-4">
          Get started with <span className="font-bold">kadhai.inc</span> by
          creating your own blog story
        </div>
        <Link href={"/blog"}>
          <button className="bg-black dark:bg-white rounded-full w-fit text-white dark:text-black px-4 py-2">
            {props.buttonText}
          </button>
        </Link>
      </motion.div>
    </AuroraBackground>
  );
}
