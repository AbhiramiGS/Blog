import { notFound } from "next/navigation";
import axios from "axios";
import BlogContainer from "@/components/BlogContainer";


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

const BlogPage = async (props: Props) => {
  const id = props.params.id;

  const fetchBlog = async () => {
    try {
      const res = await axios.get(`http://localhost:5000/blog/blog/${id}`);
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
    <div className="min-h-screen p-8">
      <BlogContainer blog={blog} />
    </div>
  );
};

export default BlogPage;
