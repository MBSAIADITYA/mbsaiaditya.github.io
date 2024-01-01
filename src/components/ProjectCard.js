import React from 'react';
import './MagnifyCard.css';
import { Link } from 'react-router-dom';

const ProjectCard = ({ project }) => {
  return (
    <div className='container'>
      <div className="card magnify-card" style={{ width: '48rem' }}>
        <div className="card-header d-flex justify-content-between align-items-center">
          <h5 style={{ color: 'rgb(117, 20, 124)' }}>{project.sig}</h5>
          <span className="text-muted">{project.date}</span>
        </div>
        <div className="card-body">
          <h5 className="card-title" style={{ color: 'rgb(156, 33, 154)' }}>{project.title}</h5>
          <p className="card-text">
            {project.description}....<Link to={`/projects/${project.id}`} className='card-link'>View more</Link>
            <br />
            <span className='authors' style={{color: 'rgb(156, 33, 154)'}}>Authors: {project.authors.join(', ')}</span>
          </p>
          <a href={project.githubRepo} className="btn teal-button">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-github" viewBox="0 0 16 16">
              <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.20-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.20-.36-1.02.08-2.12 0 0 .67-.21 2.20.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.20-.82 2.20-.82.44 1.10.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.20 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8"/>
            </svg> Repository URL
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
