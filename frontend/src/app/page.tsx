import { AuroraBackgroundDemo } from "@/components/AuroraBackground";
import { ListUnderlineItem } from "@/components/ListUnderlineItem";
import MasonryLayout from "@/components/MasonryLayout";
import { CircleUserRound } from "lucide-react";
import Link from "next/link";
import React from "react";

type Props = {};

const HomePage = (props: Props) => {
  return (
    <div className="h-screen">
      <div>
        <div className="absolute top-0 left-0 p-8 text-[#9f9763] font-bold">
          <div className="relative z-20 flex items-center text-lg font-medium">
            <span className="text-4xl font-black">kadhai</span>
            <span className="font-medium self-end">.inc</span>
          </div>
        </div>
        <div className="absolute top-0 right-0 p-8 font-bold">
          <div className="relative z-20 flex items-center text-lg font-medium space-x-6">
            <ListUnderlineItem text="What's new?" href="/blog" />
            <ListUnderlineItem text="Brainstorms" href="/brainstorm" />
            <ListUnderlineItem text="Fuzz" href="/fuzz" />

            <Link href={"/login"}>
              <CircleUserRound className="text-[#9f9763]" />
            </Link>
          </div>
        </div>
      </div>

      {/* <div><MasonryLayout /></div
      > */}
      <AuroraBackgroundDemo
        title="A platform to pen your thoughts 🖊️"
        buttonText="Blogs"
      />
    </div>
  );
};




export default HomePage;
