"use client";
import axios from "axios";
import React, { useState } from "react";
import QuillEditor from "./QuillEditor";
import Dropzone from "react-dropzone";
import { Pencil } from "lucide-react";

interface FormData {
  imageUrl: string;
  title: string;
}

const BlogForm: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    imageUrl: "",
    title: "",
  });
  const [file, setFile] = useState<File | null>();

  const [content, setContent] = useState("");

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    console.log(formData); // Handle form submission logic here

    const sending = new FormData();
    sending.append("imageUrl", file?.name);
    sending.append("title", formData.title);
    sending.append("createdAt", new Date().toISOString());
    sending.append("content", content);
    sending.append("file", file);
    await axios.post("http://localhost:5000/blog/createBlog", sending);
    setFormData({
      imageUrl: "",
      title: "",
    });
    setContent("");
  };

  return (
    <form onSubmit={handleSubmit} className=" mx-auto p-4">
      <div>
        <Dropzone
          accept={{
            "image/png": [".png"],
            "image/jpg": [".jpg"],
            "image/jpeg": [".jpeg"],
            "text/html": [".html", ".htm"],
          }}
          multiple={false}
          onDrop={(acceptedFiles: File[]) => setFile(acceptedFiles[0])}
        >
          {({ getRootProps, getInputProps }) => (
            <div
              {...getRootProps()}
              className=" border p-[1rem] hover:cursor-pointer"
            >
              <input {...getInputProps()} />
              {!file ? (
                <p>Add Picture Here</p>
              ) : (
                <div className="flex justify-between items-center">
                  <p>{file.name}</p>
                  <Pencil />
                </div>
              )}
            </div>
          )}
        </Dropzone>
      </div>
      <div className="mb-4">
        <label htmlFor="title" className="block text-gray-700">
          Title
        </label>
        <input
          type="text"
          id="title"
          name="title"
          value={formData.title}
          onChange={handleChange}
          className="w-full p-2 border border-gray-300 rounded"
        />
      </div>

      <div className="mb-4">
        <label htmlFor="content" className="block text-gray-700">
          Content
        </label>
        <QuillEditor content={content} setContent={setContent} />
      </div>

      <button
        type="submit"
        className="w-full p-2 bg-green-500 text-black hover:text-white rounded"
      >
        Submit
      </button>
    </form>
  );
};

export default BlogForm;
