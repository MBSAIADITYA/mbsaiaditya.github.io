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


    <div className='mt-4 py-4 p-5 md:p-10 md:py-4 grid gap-5 grid-cols-1 md:grid-cols-2 xl:p-20 xl:py-4 lg:grid-cols-3' >
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
  );
};

export default ProjectsPage;
