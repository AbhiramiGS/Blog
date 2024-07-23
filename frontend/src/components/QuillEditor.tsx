"use client";

import React from "react";
import dynamic from "next/dynamic";
import parse from "html-react-parser";

const ReactQuill = dynamic(() => import("react-quill"), { ssr: false });

interface Props {
//   slug?: string;
  title?: string;
  content: string;
  setContent: React.Dispatch<React.SetStateAction<string>>;
}

const modules = {
  toolbar: [
    [{ header: "1" }, { header: "2" }, { font: [] }],
    [{ size: [] }],
    ["bold", "italic", "underline", "strike", "blockquote"],
    [
      { list: "ordered" },
      { list: "bullet" },
      { indent: "-1" },
      { indent: "+1" },
    ],
    ["link", "image", "video"],
    ["clean"],
  ],
  clipboard: {
    // toggle to add extra line breaks when pasting HTML:
    matchVisual: false,
  },
};

const formats = [
  "header",
  "font",
  "size",
  "bold",
  "italic",
  "underline",
  "strike",
  "blockquote",
  "list",
  "bullet",
  "indent",
  "link",
  "image",
  "video",
];

const ContentEditor = ({ content, setContent, title }: Props) => {
  console.log(content);
  return (
    <div className="px-8">
      <div className="my-8">
        <p className="text-2xl font-bold text-primary ">Product {title ? title : "Content"}</p>
        <div className="my-8 flex w-full flex-col gap-x-4 md:flex-row">
          <div className="w-full md:w-1/2 ">
            <ReactQuill
              modules={modules}
              formats={formats}
              value={content}
              onChange={setContent}
              theme="snow"
              className="rounded-md border  dark:text-white"
            />
          </div>
          <div className="w-full md:w-1/2">
            <div className="min-h-96 rounded-md border p-4 dark:text-white ">
              {content === "" ? (
                <div className="my-10 w-full text-center ">
                  <p className="text-gray-400">Please type something...</p>
                </div>
              ) : (
                parse(content)
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContentEditor;