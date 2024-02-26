"use client"
import React, { useEffect, useState } from 'react';
import BlogCard from './eventCard';
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
        const response = await fetch('https://tetragram.codered.cloud/api/v2/pages/?type=events.EventsPage&fields=*');
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
                title={blog.title}
                organizer={blog.event_organizer}
                img="https://images.unsplash.com/photo-1549451371-64aa98a6f660?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                description="A fun-filled event to bring out the gamer in you and compete to be the best gamer out there. Register in teams of 5 or individually and showcase your gaming talent! Individual registrants will be teamed up with other individual registrants to form teams of 5."
                slug={blog.event_slug}
                date={blog.event_date}
              />
            </>
          )
        })}
      </div>
    </>
  );
};

export default BlogList;
