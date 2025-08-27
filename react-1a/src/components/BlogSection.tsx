import React, { useEffect, useState } from "react";

interface Blog {
  id: number;
  title: string;
  body: string;
}

const BlogCard: React.FC<{ title: string; body: string }> = ({ title, body }) => {
  return (
    <div className="rounded-2xl shadow-md border p-6 bg-white hover:shadow-lg transition">
      <h3 className="text-xl font-semibold mb-3">{title}</h3>
      <p className="text-gray-600">{body.slice(0, 100)}...</p>
      <button className="mt-4 text-blue-600 font-medium hover:underline">
        Read More →
      </button>
    </div>
  );
};

const BlogSection: React.FC = () => {
  const [blogs, setBlogs] = useState<Blog[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const res = await fetch("https://jsonplaceholder.typicode.com/posts?_limit=6");
        const data = await res.json();
        setBlogs(data);
      } catch (error) {
        console.error("Error fetching blogs:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchBlogs();
  }, []);

  if (loading) {
    return <p className="text-center py-8 text-gray-500">Loading blogs...</p>;
  }

  return (
    <section className="py-12 bg-gray-50">
      <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-10">Latest Blogs</h2>
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {blogs.map((blog) => (
            <BlogCard key={blog.id} title={blog.title} body={blog.body} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
