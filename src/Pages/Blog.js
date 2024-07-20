// src/components/BlogPage.js
import React from 'react';
import BlogCard from '../components/BlogCard';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const blogData = [
 
 
  {
    title: 'Dal Lake',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    tags: ['dal', 'lake'],
    image: 'https://images.pexels.com/photos/574069/pexels-photo-574069.jpeg?auto=compress&cs=tinysrgb&w=600', // replace with actual image URL
  },
  {
    title: 'Damdama Lake',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    tags: ['damdama', 'lake'],
    image: 'https://images.pexels.com/photos/574069/pexels-photo-574069.jpeg?auto=compress&cs=tinysrgb&w=600', // replace with actual image URL
  },
  {
    title: 'Gurudongmar Lake',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    tags: ['gurudongmar', 'lake'],
    image: 'https://images.pexels.com/photos/196655/pexels-photo-196655.jpeg?auto=compress&cs=tinysrgb&w=600', // replace with actual image URL
  },
  {
    title: 'Damdama Lake',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    tags: ['damdama', 'lake'],
    image: 'https://images.pexels.com/photos/574069/pexels-photo-574069.jpeg?auto=compress&cs=tinysrgb&w=600', // replace with actual image URL
  },
  {
    title: 'Damdama Lake',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    tags: ['damdama', 'lake'],
    image: 'https://images.pexels.com/photos/574069/pexels-photo-574069.jpeg?auto=compress&cs=tinysrgb&w=600', // replace with actual image URL
  },
  {
    title: 'Damdama Lake',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    tags: ['damdama', 'lake'],
    image: 'https://images.pexels.com/photos/574069/pexels-photo-574069.jpeg?auto=compress&cs=tinysrgb&w=600', // replace with actual image URL
  },
  {
    title: 'Damdama Lake',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    tags: ['damdama', 'lake'],
    image: 'https://images.pexels.com/photos/574069/pexels-photo-574069.jpeg?auto=compress&cs=tinysrgb&w=600', // replace with actual image URL
  },
  {
    title: 'Damdama Lake',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    tags: ['damdama', 'lake'],
    image: 'https://images.pexels.com/photos/574069/pexels-photo-574069.jpeg?auto=compress&cs=tinysrgb&w=600', // replace with actual image URL
  },
  {
    title: 'Damdama Lake',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    tags: ['damdama', 'lake'],
    image: 'https://images.pexels.com/photos/574069/pexels-photo-574069.jpeg?auto=compress&cs=tinysrgb&w=600', // replace with actual image URL
  },
  // Add more data to make 9 cards
];

const BlogPage = () => {
  return (
    <>
    <Navbar/>
    
      
    <div className="bg-black min-h-screen p-10">
    <div className="text-4xl mt-30px mb-60px">The Elevator...</div>
    <h1 className="text-3xl font-bold mb-10 mt-8"> <span className="text-blue-500">A blog to elevate your career, job search & shift to the top floor!</span></h1>

      

      

      

      <div className="flex flex-wrap justify-center">
        {blogData.map((blog, index) => (
          <BlogCard
            key={index}
            title={blog.title}
            description={blog.description}
            tags={blog.tags}
            image={blog.image}
          />
        ))}
        <Footer/>
      </div>
    </div>
    </>
  );
};

export default BlogPage;
