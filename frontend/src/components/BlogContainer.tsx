import Image from "next/image";
import React from "react";
import parse from "html-react-parser";

interface Blog {
  id: number;
  imageUrl: string;
  title: string;
  createdAt: string;
  content: string;
}
type Props = {
  blog: Blog;
};

const BlogContainer = ({ blog }: Props) => {
  return (
    <div className="max-w-3xl mx-auto">
      <Image
        src={`${process.env.NEXT_PUBLIC_BACKEND_URL}/assets/${blog.imageUrl}`}
        alt={blog.title}
        height={500}
        width={1000}
        className="w-full"
      />
      <h1 className="text-4xl font-bold mt-4">{blog.title}</h1>
      <p className="text-gray-600 mt-2">
        {new Date(blog.createdAt).toLocaleDateString()}
      </p>
      <div className="mt-4 text-lg">{parse(blog.content)}</div>
    </div>
  );
};

export default BlogContainer;
