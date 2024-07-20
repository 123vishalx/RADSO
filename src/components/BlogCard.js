// src/components/BlogCard.js
import React from 'react';

const BlogCard = ({ title, description, tags, image }) => {
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg bg-gray-800 text-white m-4">
      <img className="w-full" src={image} alt={title} />
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{title}</div>
        <p className="text-gray-300 text-base">
          {description}
        </p>
      </div>
      <div className="px-6 pt-4 pb-2">
        {tags.map((tag, index) => (
          <span
            key={index}
            className="inline-block bg-gray-700 rounded-full px-3 py-1 text-sm font-semibold text-gray-300 mr-2 mb-2"
          >
            #{tag}
          </span>
        ))}
      </div>
      <div className="px-6 pt-4 pb-6">
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg ">
          Read more →
        </button>
      </div>
    </div>
  );
};

export default BlogCard;
