"use client"
import React, { useEffect, useState } from 'react';
import BlogCard from './Blogcard';
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
    <>
      <div className='mt-4 py-4 p-5 md:p-10 md:py-4 grid gap-5 grid-cols-1 md:grid-cols-2 xl:p-20 xl:py-4 lg:grid-cols-3'>
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
