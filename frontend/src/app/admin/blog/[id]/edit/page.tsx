import BlogEditForm from "@/components/EditBlog";
import axios from "axios";
import { notFound } from "next/navigation";
import React from "react";

type Props = {
  params: {
    id: string;
  };
};

interface Blog {
  id: number;
  imageUrl: string;
  title: string;
  createdAt: string;
  content: string;
}

const adminBlogedit = async (props: Props) => {
  const id = props.params.id;

  const fetchBlog = async () => {
    try {
      const res = await axios.get(`${process.env.NEXT_PUBLIC_BACKEND_URL}/blog/blog/${id}`);
      return res.data as Blog;
    } catch (error) {
      console.error("Error fetching blog", error);
    }
  };

  const blog = await fetchBlog();

  if (!blog) {
    return notFound();
  }
  return (
    <div>
      <BlogEditForm blog={blog} />
    </div>
  );
};

export default adminBlogedit;
