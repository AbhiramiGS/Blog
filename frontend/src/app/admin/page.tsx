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

const page = async (props: Props) => {
  return (
    <div className="w-full">
      <div className="h-screen w-full flex">
        <div className="w-full">
          <div className="flex ">
            <AuroraBackgroundDemo
              title="A platform to pen your thoughts 🖊️"
              buttonText="Blogs"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
