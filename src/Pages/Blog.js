import React, { useState, useEffect } from 'react';
import axios from 'axios';
import BlogCard from '../components/BlogCard';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const BlogPage = () => {
  const [blogData, setBlogData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [blogsPerPage] = useState(9); // Number of blogs per page

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

  if (loading) return <p className="text-center text-white">Loading...</p>;
  if (error) return <p className="text-center text-red-500">Error: {error}</p>;

  // Pagination Logic
  const indexOfLastBlog = currentPage * blogsPerPage;
  const indexOfFirstBlog = indexOfLastBlog - blogsPerPage;
  const currentBlogs = blogData.slice(indexOfFirstBlog, indexOfLastBlog);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <>
      <Navbar />
      <div className="bg-black min-h-screen p-6 md:p-10">
        <div className="text-3xl md:text-4xl mt-6 md:mt-8 mb-8 md:mb-12 text-center md:text-left md:ml-24">
          Our Blogs
        </div>
        <h1 className="text-2xl md:text-3xl font-bold mb-6 md:mb-10 mt-4 md:mt-8 text-center md:text-left md:ml-24">
          <span className="text-blue-500">
            A blog to elevate your career, job search & shift to the top floor!
          </span>
        </h1>
        <div className="flex flex-wrap justify-center gap-6 md:gap-10">
          {currentBlogs.length > 0 ? (
            currentBlogs.map((blog) => (
              <BlogCard
                key={blog._id}
                title={blog.title}
                content={blog.content}
                author={blog.author}
                date={blog.date} // Pass date prop
                hashtags={blog.hashtags} // Pass hashtags prop
                image={blog.image}
              />
            ))
          ) : (
            <p className="text-center text-white">No blogs available</p>
          )}
        </div>

        {/* Pagination Controls */}
        <div className="pagination mt-8 flex justify-center">
          {[...Array(Math.ceil(blogData.length / blogsPerPage)).keys()].map(number => (
            <button
              key={number + 1}
              onClick={() => paginate(number + 1)}
              className={`page-number mx-2 py-1 px-3 rounded ${currentPage === number + 1 ? "bg-blue-600 text-white" : "bg-gray-700 text-gray-300"}`}
            >
              {number + 1}
            </button>
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default BlogPage;
