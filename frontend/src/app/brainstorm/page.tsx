import { LampDemo } from "@/components/LampEffect";
import React from "react";
import { ListUnderlineItem } from "../home/page";
import { CircleUserRound } from "lucide-react";
import Link from "next/link";
import Subheadings from "@/components/Subheadings";
import { BentoGridDemo } from "@/components/BentoGrid";
import Image from "next/image";
import { ExpandableCardDemo } from "@/components/ExpandableCard";

type Props = {};

const page = (props: Props) => {
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

  return (
    <div>
      <div>
        <div className="absolute top-0 left-0 p-8 text-[#9f9763] font-bold">
          <Link href={"/home"}>
            <div className="relative z-20 flex items-center text-lg font-medium">
              <span className="text-4xl font-black">kadhai</span>
              <span className="font-medium self-end">.inc</span>
            </div>
          </Link>
        </div>
        <div className="absolute top-0 right-0 p-8 font-bold">
          <div className="relative z-20 flex items-center text-lg font-medium space-x-6">
            <ListUnderlineItem text="What's new?" href="/blog" />
            <ListUnderlineItem text="Brainstorms" href="/brainstorm" />
            <ListUnderlineItem text="Fuzz" href="/fuzz" />

            <Link href={"/"}>
              <CircleUserRound className="text-[#9f9763]" />
            </Link>
          </div>
        </div>
      </div>
      <LampDemo />
      <div className="">
        <div>
          <p className="text-black italic  mx-20 my-10 text-center tracking-wide leading-8 text-xl">
            &#8220; Blogging is a powerful way to share your thoughts, ideas,
            and expertise with the world. Whether you want to build a personal
            brand, drive traffic to your business, or simply express yourself
            creatively, starting a blog can be incredibly rewarding. &#8221;
          </p>
        </div>
        {/* <div>
          <div className="flex flex-row items-center justify-center w-full ">
            <div className="w-1/2 p-10 shadow-xl  shadow-[#05031a] bg-[#05031a]">
              <p className="text-3xl font-bold text-white text-center">
                Define your purpose
              </p>
              <p className="text-justify text-white">
                Before you start writing, it’s essential to define the purpose
                of your blog. Are you aiming to educate, entertain, or inform
                your readers? Understanding your blog's purpose will help guide
                your content creation process, ensuring that each post aligns
                with your overall goals. A clear purpose also helps attract and
                retain a loyal audience who shares an interest in your blog’s
                focus.{" "}
              </p>
            </div>
            <div className="w-1/2 p-10 my-10 shadow-xl mx-20 shadow-[#05031a] bg-[#05031a]">
              <p className="text-3xl font-bold text-white text-center">
                Define your purpose
              </p>
              <p className="text-justify text-white">
                Before you start writing, it’s essential to define the purpose
                of your blog. Are you aiming to educate, entertain, or inform
                your readers? Understanding your blog's purpose will help guide
                your content creation process, ensuring that each post aligns
                with your overall goals. A clear purpose also helps attract and
                retain a loyal audience who shares an interest in your blog’s
                focus.{" "}
              </p>
            </div>
          </div>
          <div className="flex flex-row w-full items-center justify-center">
            <div className="w-1/2 p-10 shadow-xl  shadow-[#05031a] bg-[#05031a]">
              <p className="text-3xl font-bold text-white text-center">
                Define your purpose
              </p>
              <p className="text-justify text-white">
                Before you start writing, it’s essential to define the purpose
                of your blog. Are you aiming to educate, entertain, or inform
                your readers? Understanding your blog's purpose will help guide
                your content creation process, ensuring that each post aligns
                with your overall goals. A clear purpose also helps attract and
                retain a loyal audience who shares an interest in your blog’s
                focus.{" "}
              </p>
            </div>
            <div className="w-1/2 p-10 my-10 shadow-xl mx-20 shadow-[#05031a] bg-[#05031a]">
              <p className="text-3xl font-bold text-white text-center">
                Define your purpose
              </p>
              <p className="text-justify text-white">
                Before you start writing, it’s essential to define the purpose
                of your blog. Are you aiming to educate, entertain, or inform
                your readers? Understanding your blog's purpose will help guide
                your content creation process, ensuring that each post aligns
                with your overall goals. A clear purpose also helps attract and
                retain a loyal audience who shares an interest in your blog’s
                focus.{" "}
              </p>
            </div>
          </div>
        </div>   */}
        {/* <div id="servicetraining" className=" p-14 mb-16 flex space-x-10">
          <div className="w-1/2 flex flex-col">
            <div className="shadow-xl border border-[#05031a] p-8">
              <div className="h-14 w-14 bg-[#9f9763] "></div>
              <div>
                <h2 className="text-[#9f9763] text-center text-3xl font-bold">
                  Aptitude Development
                </h2>
                <p className="mt-4 text-justify text-[#9f9763]">
                  Our Aptitude Development course is structured to enhance your
                  logical reasoning, problem-solving capabilities, and
                  quantitative skills. This course is crucial for competitive
                  exams and placement processes, ensuring that you have the
                  intellectual agility to tackle diverse challenges.
                </p>
              </div>
            </div>
            <div className="shadow-[#05031a] bg-[#05031a] shadow-xl mt-8 ">
              <div className="h-14 w-14 bg-[#9f9763]"></div>
              <div className="px-8 pb-8">
                <h2 className="text-[#9f9763] text-center text-3xl font-bold">
                  C Programming
                </h2>
                <p className="mt-4 text-justify text-[#9f9763]">
                  Dive into the world of C Programming, where you will learn the
                  basics of coding, syntax, and algorithms. This course lays the
                  groundwork for understanding more complex programming
                  languages and concepts, making it an indispensable part of
                  your technical education.
                </p>
              </div>
            </div>
            <div></div>
          </div>
          <div className="w-1/2 flex flex-col">
            <div className="shadow-[#05031a] bg-[#05031a] shadow-xl">
              <div className="h-14 w-14 bg-[#9f9763]"></div>
              <div className="px-8 pb-8">
                <h2 className="text-[#9f9763] text-center text-3xl font-bold">
                  C++ Programming
                </h2>
                <p className="mt-4 text-justify text-[#9f9763]">
                  Building on your knowledge of C, our C++ Programming course
                  introduces object-oriented programming. This course will
                  enable you to design and develop efficient and scalable
                  software solutions, equipping you with skills highly sought
                  after in the tech industry.
                </p>
              </div>
            </div>
            <div className="shadow-[#05031a] bg-[#05031a] shadow-xl mt-8 ">
              <div className="h-14 w-14 bg-[#9f9763]"></div>
              <div className="px-8 pb-8">
                <h2 className="text-[#9f9763] text-center text-3xl font-bold">
                  Java Programming
                </h2>
                <p className="mt-4 text-justify text-[#9f9763]">
                  Our Java Programming course offers a comprehensive
                  introduction to one of the most widely used programming
                  languages in the world. You will learn about object-oriented
                  principles, Java syntax, and build applications that can run
                  on various platforms, providing a solid foundation for future
                  specialization.
                </p>
              </div>
            </div>
            <div></div>
          </div>
        </div> */}
        {/* <ExpandableCardDemo /> */}
      </div>
    </div>
  );
};

export default page;
