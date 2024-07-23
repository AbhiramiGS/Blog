import { AuroraBackgroundDemo } from "@/components/AuroraBackground";
import BlogForm from "@/components/BlogForm";
import DeleteButton from "@/components/DeleteButton";
import { SidebarDemo } from "@/components/Sidebar";
import { Button } from "@/components/ui/button";
import axios from "axios";
import Link from "next/link";
import { notFound } from "next/navigation";
import React from "react";

type Props = {};

interface Item {
  id: number;
  imageUrl: string;
  title: string;
  createdAt: string;
  content: string;
}

const page = async (props: Props) => {
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
    <div>
      <div className="h-screen w-full flex">
        <div>
          <SidebarDemo />
        </div>
        <div className="bg-stone-400 w-full">
          <div className="flex">
            {/* <Link href={"/admin/blog"}>
              <Button>Create Blog</Button>
            </Link> */}
            <AuroraBackgroundDemo
              title="A platform to pen your thoughts 🖊️"
              buttonText="Blogs"
            />
          </div>
          <div>
            {items?.map((item) => {
              return (
                <div key={item.id}>
                  <div>
                    <p>{item.title}</p>
                  </div>
                  <Link href={`/admin/blog/${item.id}/edit`}>
                    <Button>Edit</Button>
                  </Link>

                  <DeleteButton blog={item} />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
