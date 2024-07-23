import { CircleUserRound } from "lucide-react";
import Link from "next/link";
import React from "react";

type Props = {};

const Navbar = (props: Props) => {
  return (
    <div>
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
            <ListUnderlineItem text="Brainstorms" href="/about" />
            <ListUnderlineItem text="Fuzz" href="/about" />

            <Link href={"/"}>
              <CircleUserRound className="text-[#9f9763]" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

const ListUnderlineItem = ({ text, href }: { text: string; href: string }) => {
  return (
    <div>
      <li className="text-md py-1 relative inline-block after:content-[''] after:absolute after:w-full after:h-0.5 after:bottom-0 after:left-0 after:bg-current after:scale-x-0 after:origin-bottom-right after:transition-transform after:duration-300 hover:after:scale-x-100 hover:after:origin-bottom-left text-[#9f9763]">
        <Link className="scroll-smooth" href={href}>
          {text}
        </Link>
      </li>
    </div>
  );
};

export default Navbar;
