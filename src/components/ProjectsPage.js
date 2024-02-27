// ProjectsPage.js
import React, { useState } from 'react';
import ProjectCard from './ProjectCard';
import ReactPaginate from 'react-paginate';
import './ProjectsPage.css'; // Import your CSS for styling

const ProjectsPage = ({ projects }) => {
  const [currentPage, setCurrentPage] = useState(0);
  const projectsPerPage = 5;

  const handlePageClick = (data) => {
    setCurrentPage(data.selected);
  };

  const indexOfLastProject = (currentPage + 1) * projectsPerPage;
  const indexOfFirstProject = indexOfLastProject - projectsPerPage;
  const currentProjects = projects.slice(indexOfFirstProject, indexOfLastProject);

  return (
    <main className='mt-20 min-h-[90vh]'>
      <section className="w-full bg-[#461461]">
        <div className=" text-4xl py-16 flex justify-center text-white mx-auto w-4/5 md:max-w-full lg:max-w-screen-md 2xl:max-w-screen-lg">
          Events
        </div>
      </section>
      <div className='py-6 p-5 md:p-8 grid justify-items-center gap-5 grid-cols-1 md:grid-cols-2 xl:px-20 lg:grid-cols-3 2xl:grid-cols-4 auto-rows-max' >
        {currentProjects.map((project) => {
          return (
            <>
              <div className="row h-full" key={project.id}>
                <div className="col-md-12 h-full">
                  <ProjectCard project={project} />
                </div>
              </div>
            </>
          )
        })}
      </div>
    </main>
  );
};

export default ProjectsPage;
