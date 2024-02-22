"use client"
import React, { useEffect, useState } from 'react';
import BlogCard from './Blogcard';
import Navbar from "@/components/Navbar/Navbar";

const BlogList = () => {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://tetragram.codered.cloud/api/v2/pages/?type=blog.BlogPage&fields=*');
        const data = await response.json();
        console.log(data.items)
        setBlogs(data.items);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div> 
      {blogs.map((blog, index) => (
        <BlogCard
          key={index}
          title={blog.blog_title}
          authors={blog.blog_authors}
          img={blog.blog_img_url}
          description={blog.blog_description}
          slug={blog.blog_slug}
        />
      ))}
    </div>
  );
};

export default BlogList;
