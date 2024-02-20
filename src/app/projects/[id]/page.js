/*"use client";
import ProjectDetailsPage from '@/components/ProjectDetailsPage';
import { useEffect, useState } from 'react';
import {fetchProjects} from "@/components/api";

export default function Page({ params }) {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const projectsData = await fetchProjects();
      setProjects(projectsData);
    };

    fetchData();
  }, []);
  const project = projects.find((project) => project.id.toString() === params.id);

    return (
        <div>
            <ProjectDetailsPage project={project} />
        </div>
    );
}*/

// Import necessary modules
/*
"use client"
import ProjectDetailsPage from "@/components/ProjectDetailsPage";
import { useEffect, useState } from "react";

// Component definition
const Projectid = ({ params }) => {
  console.log(params)
  // State to store the fetched data
  const [projectData, setprojectData] = useState(null);
  
  // Effect to fetch data when the component mounts
  useEffect(() => {
    const fetchData = async () => {
      try {
        // Fetch data from the API
        const response = await fetch('https://tetragram.codered.cloud/api/v2/pages/?type=projects.ProjectsPage&fields=*');
        const data = await response.json();
        console.log("check",data);
        // Find the blog post with the matching id
        const matchingproject = data.items.find(project => project.id === parseInt(params.id));
        
        // Update the state with the matching blog data
        setprojectData(matchingproject);
        console.log("blog :",matchingproject.project_description)

      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    // Call the fetchData function
    fetchData();
  }, [params.id]); // Include params.id in the dependency array to refetch data when id changes

  // Render the component
  return (
    <h1>
      {projectData.project_body}
    </h1>
  );
};

// Export the component
export default Projectid;*/

// Import necessary modules

"use client";
import ProjectDetailsPage from "@/components/ProjectDetailsPage";
import { useEffect, useState } from "react";
import {fetchProjects} from "@/components/api";
// Component definition
export default function Page({params}) {
  const [project, setProject] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const projectsData = await fetchProjects();
      const matchingproject = projectsData.find(project => project.id === parseInt(params.id));
      setProject(matchingproject);
    };

    fetchData();
  }, []);

  return (
    <div>
      <ProjectDetailsPage project={project} />
    </div>
  );
}