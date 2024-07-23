import React from "react";
import { BackgroundBoxesDemo } from "./Beams";
import Image from "next/image";

import { CircleUserRound } from "lucide-react";
import Link from "next/link";
import { ListUnderlineItem } from "./ListUnderlineItem";

type Props = {};

const RandomComponent = (props: Props) => {
  return (
    <div className="p-8 bg-slate-950">
      <div>
        <div className="absolute top-0 left-0 p-8 text-[#9f9763] font-bold">
          <div className="relative z-20 flex items-center text-lg font-medium">
            <Link href={"/"}>
              <span className="text-4xl font-black">kadhai</span>
              <span className="font-medium self-end">.inc</span>
            </Link>
          </div>
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
      <div className="w-full mt-16 h-[601px] flex space-x-4">
        {/* first col */}
        <div className="w-2/4 flex flex-col items-center justify-center space-y-4">
          {/* first  col first row */}

          <div className="h-1/2 w-full relative flex justify-center items-center ">
            <p className="text-center text-5xl text-white font-bold">
              We spend one-
              <br /> third of our life <br />
              creating stories :)
            </p>
            <div className="absolute h-20 w-20 bottom-0 right-0 bg-[#9f9763] p-4"></div>
          </div>
          {/* first  col second row */}
          <div className="h-1/2 w-full space-x-4  flex">
            <div className="h-full w-1/2 bg-sky-50">
              <Image
                src="/mossbg.jpeg"
                height={200}
                width={200}
                alt="random"
                className="h-full w-full"
              />
            </div>
            <div className="h-full w-1/2 bg-[#c29632] flex items-center justify-center p-4">
              <p className="text-white text-center text-xl font-medium italic">
                &ldquo; Your site is always my only go to option for
                fragrances&rdquo;{" "}
              </p>
            </div>
          </div>
        </div>
        {/* second col */}
        <div className="w-1/4 space-y-4 flex flex-col">
          <div className="h-1/2 w-full">
            <Image
              src="/write.jpeg"
              height={500}
              width={500}
              alt="random"
              className="h-full w-full"
            />
          </div>
          <div className="h-1/2 w-full bg-[#8e987c]"></div>
        </div>
        {/* third col */}
        <div className="w-1/4 space-y-4 flex flex-col">
          <div className="h-1/2 w-full">
            <BackgroundBoxesDemo />
          </div>
          <div className="h-1/2 w-full relative">
            <div className="absolute h-36 w-36 top-0 left-0 bg-[#c29632] p-4"></div>
            <div className="absolute h-24 w-24 top-36 left-36 bg-[#c29632] p-4"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RandomComponent;
