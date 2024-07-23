"use client";
import Link from "next/link";
import React, { useState } from "react";
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import Image from "next/image";
import EditBlog from "./EditBlog";
import { Pencil } from "lucide-react";
import parse from "html-react-parser";

interface Item {
  id: number;
  imageUrl: string;
  title: string;
  createdAt: string;
}

type Props = {
  items: Item[];
};

const BlogsCard = ({ items }: Props) => {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6;
  const lastItemIndex = currentPage * itemsPerPage;
  const firstItemIndex = lastItemIndex - itemsPerPage;
  const currentItems = items.slice(firstItemIndex, lastItemIndex);

  return (
    <div className="p-10">
      <div className="columns-3 mx-auto space-y-4 p-8">
        {currentItems.map((item) => (
          <div key={item.id} className="break-inside-avoid" >
            <Link href={`/blog/${item.id}`}>
              <CardComponent
                src={item.imageUrl}
                alt={`blog${item.id}`}
                height={500}
                width={300}
                title={item.title}
                createdAt={item.createdAt}
              />
            </Link>
          </div>
        ))}
      </div>
      <div className="m-6">
        <PaginationSection
          totalItems={items.length}
          itemsPerPage={itemsPerPage}
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
        />
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

export function PaginationSection({
  totalItems,
  itemsPerPage,
  currentPage,
  setCurrentPage,
}: {
  totalItems: number;
  itemsPerPage: number;
  currentPage: number;
  setCurrentPage: (page: number) => void;
}) {
  const pages = [];
  for (let i = 1; i <= Math.ceil(totalItems / itemsPerPage); i++) {
    pages.push(i);
  }

  return (
    <Pagination>
      <PaginationContent>
        <PaginationItem>
          <PaginationPrevious onClick={() => setCurrentPage(currentPage - 1)} />
        </PaginationItem>
        {pages.map((page) => (
          <PaginationItem key={page}>
            <PaginationLink
              href="#"
              onClick={() => setCurrentPage(page)}
              isActive={page === currentPage}
            >
              {page}
            </PaginationLink>
          </PaginationItem>
        ))}
        <PaginationItem>
          <PaginationNext onClick={() => setCurrentPage(currentPage + 1)} />
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  );
}

export default BlogsCard;
