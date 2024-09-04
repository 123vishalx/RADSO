import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const BlogCard = ({ _id, title, content, image }) => {
  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 1 } },
  };

  return (
    <motion.div
      className="max-w-sm rounded overflow-hidden shadow-lg bg-gray-900 text-white m-4 flex flex-col justify-between"
      initial="hidden"
      animate="visible"
      variants={cardVariants}
    >
      <div className="relative h-48">
        <img 
          className="w-full h-full object-cover"
          src={image}
          alt={title}
        />
      </div>
      <div className="flex flex-col justify-between flex-grow px-6 py-4 pb-8">
        <div>
          <div className="font-bold text-xl mb-2">{title}</div>
          <p className="text-gray-300 text-base">
            {content}
          </p>
        </div>
        <div className="mt-4">
          <Link to={`/blogs/${_id}`}>
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg">
              Read more →
            </button>
          </Link>
        </div>
      </div>
    </motion.div>
  );
};

export default BlogCard;
