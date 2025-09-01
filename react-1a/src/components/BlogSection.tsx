import React, { useEffect, useState } from "react";

interface BlogPost {
  id: number;
  title: string;
  body: string;
  userId: number;
}

const BlogSection: React.FC = () => {
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Fetch blogs from Dummy API
    fetch("https://jsonplaceholder.typicode.com/posts?_limit=6")
      .then((res) => res.json())
      .then((data) => {
        setPosts(data);
        setLoading(false);
      });
  }, []);

  return (
    <section className="py-10 px-5">
      <h2 className="text-2xl font-bold mb-2">Latest Articles</h2>
      <p className="text-gray-500 mb-8">
        Diverse Range of articles related to html css and javascript
      </p>

      {loading ? (
        <p>Loading...</p>
      ) : (
        <div className="grid md:grid-cols-2 gap-6">
          {posts.map((post) => (
            <div
              key={post.id}
              className="flex items-start gap-4 bg-white shadow-md rounded-2xl p-5 hover:shadow-lg transition"
            >

              <img
                src={`https://picsum.photos/200?random=${post.id}`}
                alt="blog"
                className="w-28 h-20 rounded-md object-cover"
              />
              <div>
                <h3 className="font-semibold text-lg">{post.title}</h3>
                <p className="text-gray-600 text-sm line-clamp-2">
                  {post.body}
                </p>
                <p className="text-xs text-gray-400 mt-2">
                  {new Date().toLocaleDateString()} | 5 min read
                </p>
              </div>
            </div>
          ))}
        </div>
      )}
    </section>
  );
};

export default BlogSection;
