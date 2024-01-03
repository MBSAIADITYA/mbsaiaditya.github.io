import BlogCard from '../Blogs/Blogcard';
import Navbar from '../Navbar/Navbar';

const BlogList = () => {
  return (
    <div>
     <Navbar />
     <BlogCard 
       title="React Blogging App"
       blogger="John Doe"
       Img="./blog.png"
       blogLink="https://example.com/blog-post"
       description="A simple React.js app for creating and managing blog posts. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
     />
     <BlogCard 
       title="React Blogging App"
       blogger="John Doe"
       blogLink="https://example.com/blog-post"
       description="A simple React.js app for creating and managing blog posts. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
     />
     <BlogCard 
       title="React Blogging App"
       blogger="John Doe"
       blogLink="https://example.com/blog-post"
       description="A simple React.js app for creating and managing blog posts. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
     />
     </div>
  );
};

export default BlogList;
