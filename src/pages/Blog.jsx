// Blog.jsx
import React, { useState, useEffect } from 'react';
import { Blog1, Blog2, Blog3, Blog4 } from '../assets/index';

const Blog = () => {
  const [videoSources, setVideoSources] = useState([]);

  useEffect(() => {
    setVideoSources([Blog1, Blog2, Blog3, Blog4]);
  }, []);

  return (
    <div className="container mx-auto mt-10">
      <h2 className="text-3xl font-bold mb-6">Blog</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {videoSources.map((source, index) => (
          <div key={index} className="mb-4 relative group" style={{ width: '100%', height: '200px' }}>
            <video className="w-full h-full object-cover transition duration-300 ease-in-out transform group-hover:scale-105" controls>
              <source src={source} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Blog;
