"use client"
import React, { useEffect, useState } from 'react';
import BlogCard from './eventCard';

const EventList = () => {
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
      <div className='mt-20 min-h-[90vh]'>
        <section className="w-full bg-[#461461]">
          <div className=" text-4xl py-16 flex justify-center text-white mx-auto w-4/5 md:max-w-full lg:max-w-screen-md 2xl:max-w-screen-lg">
            Events
          </div>
        </section>
        <section className='py-6 p-5 md:p-8 grid justify-items-center gap-5 grid-cols-1 md:grid-cols-2 xl:px-20 lg:grid-cols-3 2xl:grid-cols-4 auto-rows-max'>
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
                  location={blog.event_location}
                />
              </>
            )
          })}
        </section>
      </div>
    </>
  );
};

export default EventList;
