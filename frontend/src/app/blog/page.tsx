import axios from "axios";
import { notFound } from "next/navigation";
import BlogsCard from "@/components/BlogsCard";
import EditBlog from "@/components/EditBlog";
import Link from "next/link";
import { ListUnderlineItem } from "../home/page";
import { CircleUserRound } from "lucide-react";
import { ExpandableCardDemo } from "@/components/CardExpadable";

interface Item {
  id: number;
  imageUrl: string;
  title: string;
  createdAt: string;
  content: string | (() => JSX.Element);
}

const BlogList = async () => {
  const fetchData = async () => {
    try {
      const res = await axios.get(`${process.env.NEXT_PUBLIC_BACKEND_URL}/blog/allBlogs`);
      return res.data as Item[];
    } catch (error) {
      console.error("Error fetching data", error);
    }
  };
  const items = await fetchData();
  console.log("dadadada", items);

  return (
    <div className="min-h-screen bg-slate-950">
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
      <div className="py-8">
        <ExpandableCardDemo cards={items} />
      </div>
    </div>
  );
};

export default BlogList;
