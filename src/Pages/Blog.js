import React, { useState, useEffect } from 'react';
import axios from 'axios';
import BlogCard from '../components/BlogCard';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const BlogPage = () => {
  const [blogData, setBlogData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const response = await axios.get('https://backend-llye.vercel.app/api/blogs');
        setBlogData(response.data); 
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchBlogs();
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <>
      <Navbar />
      <div className="bg-black min-h-screen p-10">
        <div className="text-4xl mt-30px mb-60px ml-16">Our Blogs</div>
        <h1 className="text-3xl font-bold mb-10 mt-8 ml-16">
          <span className="text-blue-500">
            A blog to elevate your career, job search & shift to the top floor!
          </span>
        </h1>
        <div className="flex flex-wrap justify-center">
          {blogData.map((blog) => (
            <BlogCard
              key={blog._id} // Use _id as key
              title={blog.title}
              content={blog.content}
              author={blog.author}
              category={blog.category.name} // Extract category name
              image={blog.image}
            />
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default BlogPage;