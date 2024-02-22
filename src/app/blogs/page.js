/*import BlogCard from './Blogcard';
import Navbar from "@/components/Navbar/Navbar";

const BlogList = () => {
  return (
    <div>
     <Navbar />
     <BlogCard 
       title="React Blogging App"
       blogger="John Doe"
       Img="./blog.png"
       blogLink="https://example.com/blog-post"
       description="A simple React.js app for creating and managing blog posts. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
     />
     <BlogCard 
       title="React Blogging App"
       blogger="John Doe"
       blogLink="https://example.com/blog-post"
       description="A simple React.js app for creating and managing blog posts. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
     />
     <BlogCard 
       title="React Blogging App"
       blogger="John Doe"
       blogLink="https://example.com/blog-post"
       description="A simple React.js app for creating and managing blog posts. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
     />
     </div>
  );
};

export default BlogList;*/

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
      <Navbar />
      <h1>Blogs</h1>
      {blogs.map((blog, index) => (
        <BlogCard
          key={index}
          title={blog.title}
          blogger={blog.blogger}
          img={blog.img}
          description={blog.blog_body}  
          />
))}
    </div>
  );
};

export default BlogList;
