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
import Footer from '@/components/footer';
import Navbar from "@/components/Navbar/Navbar";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';

const BlogList = () => {
  const [blogs, setBlogs] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const blogsPerPage = 6;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://tetragram.codered.cloud/api/v2/pages/?type=blog.BlogPage&fields=*');
        const data = await response.json();
        setBlogs(data.items);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  // Calculate the index range for the current page
  const indexOfLastBlog = currentPage * blogsPerPage;
  const indexOfFirstBlog = indexOfLastBlog - blogsPerPage;
  const currentBlogs = blogs.slice(indexOfFirstBlog, indexOfLastBlog);

  // Function to handle page change
  const handlePageChange = (newPage) => {
    setCurrentPage(newPage);
  };

  return (
    <>
      <div className='mt-4 py-4 p-5 md:p-10 md:py-4 grid gap-5 grid-cols-1 md:grid-cols-2 xl:p-20 xl:py-4 lg:grid-cols-3 2xl:grid-cols-4'>
        {blogs.map((blog, index) => {
          return (
            <>
              <BlogCard
                key={index}
                title={blog.blog_title}
                authors={blog.blog_authors}
                img={blog.blog_img_url}
                description={blog.blog_description}
                slug={blog.blog_slug}
                date={blog.published_on}
              />
            </>
          )
        })}
      </div>
    </>
  );
};

export default BlogList;
