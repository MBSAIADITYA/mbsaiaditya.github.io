"use client";
import ProjectDetailsPage from '@/components/ProjectDetailsPage';
import {fetchProjects} from "@/components/api";

  export default function Page({ params}) {
    const [projects, setProjects] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const projectsData = await fetchProjects();
      setProjects(projectsData);
    };

    fetchData();
  }, []);
    const project = projects.find((project) => project.id.toString() === params.id);
    return <div><ProjectDetailsPage project={project} /></div>;
  }
  
  
