"use client"
import React, { useEffect, useState } from 'react';
import BlogCard from './Blogcard';
import jsonData from '../../../public/blog-response.json';

const BlogList = () => {
  const [blogs, setBlogs] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const blogsPerPage = 6;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await jsonData;
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
      <div className='mt-20 min-h-[90vh]'>
        <section className="w-full bg-[#461461]">
          <div className=" text-4xl py-16 flex justify-center text-white mx-auto w-4/5 md:max-w-full lg:max-w-screen-md 2xl:max-w-screen-lg">
            Blogs
          </div>
        </section>
        <section className='py-6 p-5 md:p-8 grid justify-items-center gap-5 grid-cols-1 md:grid-cols-2 xl:px-20 lg:grid-cols-3 2xl:grid-cols-4 auto-rows-max'>
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
        </section>
      </div>
    </>
  );
};

export default BlogList;
