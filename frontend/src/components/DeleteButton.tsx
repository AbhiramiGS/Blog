"use client";
import axios from "axios";
import React from "react";
import { Button } from "./ui/button";
import { useRouter } from "next/navigation";

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

const DeleteButton = ({ blog }: Props) => {
  const router = useRouter();
  const onDelete = async () => {
    await axios.post(`${process.env.NEXT_PUBLIC_BACKEND_URL}/blog/deleteBlog`, {
      id: blog.id,
    });
    console.log("fklergj");
    router.refresh();
  };
  return <Button onClick={onDelete}>Delete</Button>;
};

export default DeleteButton;
