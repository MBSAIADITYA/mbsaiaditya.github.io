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
    
   
      <div className="min-h-screen bg-white">
      <h2 className="text-4xl font-extrabold text-fuchsia-900">Projects</h2>
      {currentProjects.map((project) => (
        <div className="row mb-3" key={project.id}>
          <div className="col-md-12">
               <ProjectCard project={project} />
          </div>
          </div>
        
      ))}
      <div className="pagination-container">
        <ReactPaginate
          pageCount={Math.ceil(projects.length / projectsPerPage)}
          pageRangeDisplayed={5}
          marginPagesDisplayed={2}
          onPageChange={handlePageClick}
          containerClassName={'pagination'}
          activeClassName={'active'}
          initialPage={currentPage}
          previousLabel={'Previous'}
          nextLabel={'Next'}
        />
      </div>
    </div>
  );
};

export default ProjectsPage;
