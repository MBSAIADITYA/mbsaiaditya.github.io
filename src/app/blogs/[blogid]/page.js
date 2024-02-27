import BlogId from "@/components/blog/blogDetail";

export default function BlogDetail({ params }){
  return(
    <BlogId params={params}/>
  )
}

export async function generateStaticParams() {
  const posts = await fetch('/blog-response.json').then((res) => res.json())
 
  return posts.items.map((post) => ({
    blogid: post.blog_slug,
  }))
}
