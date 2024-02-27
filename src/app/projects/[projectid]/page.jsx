import ProjectId from "@/components/project/projectDetail";

export default function ProjectDetail({ params }){
  return(
    <ProjectId params={params}/>
  )
}

export async function generateStaticParams() {
  const posts = await fetch('https://tetragram.codered.cloud/api/v2/pages/?type=projects.ProjectsPage&fields=*').then((res) => res.json())
 
  return posts.items.map((post) => ({
    projectid: post.project_slug,
  }))
}