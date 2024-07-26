import DeleteButton from "@/components/DeleteButton";
import { Button } from "@/components/ui/button";
import axios from "axios";
import Image from "next/image";
import Link from "next/link";
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
      const res = await axios.get(
        `${process.env.NEXT_PUBLIC_BACKEND_URL}/blog/allBlogs`
      );
      return res.data as Item[];
    } catch (error) {
      console.error("Error fetching data", error);
    }
  };
  const items = await fetchData();
  console.log("dadadada", items);
  return (
    <div className="p-10">
      <div className="columns-3 mx-auto space-y-4 p-8">
        {items?.map((item) => {
          return (
            <div key={item.id} className="break-inside-avoid">
              <div className="border p-6 w-full">
                <CardComponent
                  src={item.imageUrl}
                  alt={`blog${item.id}`}
                  height={500}
                  width={300}
                  title={item.title}
                  createdAt={item.createdAt}
                />
              </div>
              <div className="p-8 space-x-6 flex items-center justify-center w-full">
                <Link href={`/admin/blog/${item.id}/edit`}>
                  <Button>Edit</Button>
                </Link>

                <DeleteButton blog={item} />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export const CardComponent = ({
  src,
  height,
  width,
  alt,
  title,
  createdAt,
}: {
  src: string;
  height: number;
  width: number;
  alt: string;
  title: string;
  createdAt: string;
}) => {
  return (
    <div className="border cursor-pointer rounded-md">
      <Image
        src={`${process.env.NEXT_PUBLIC_BACKEND_URL}/assets/${src}`}
        alt={alt}
        height={height}
        width={width}
        className="w-full rounded-t-md"
      />
      <div className="p-4">
        <div>
          <h2 className=" text-xl text-white ">{title}</h2>
          <p className="text-muted-foreground text-sm">
            {new Date(createdAt).toLocaleDateString("en-IN", {
              weekday: "long",
              month: "long",
              year: "numeric",
              day: "numeric",
            })}
            {", "}
            {new Date(createdAt)
              .toLocaleTimeString("en-IN", {
                hour: "2-digit",
                minute: "2-digit",
              })
              .toUpperCase()}
          </p>
        </div>
      </div>
    </div>
  );
};

export default page;
