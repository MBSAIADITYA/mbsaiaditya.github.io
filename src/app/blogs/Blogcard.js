import Link from 'next/link';
//import Image from 'next/image';
import styles from './Blogcard.module.css'; // Use CSS modules for styles

const BlogCard = ({ title, authors, img, description, slug }) => {
  // const truncatedDescription = description.length > 100 ? `${description.slice(0, 100)}...` : description;

  return (
    <div className={styles.blogcontainer}>
      <div className={styles.blogCard}>
        <div className={styles.blogDetails}>
          <h2 className={styles.head}>{title}</h2>
          <p className={styles.para}>by {authors}</p>
          <p className={styles.para}>{description}</p>
        </div>
        <div className={styles.blogImage}>
          <img className='w-full object-cover' src={img} alt={title} />
        </div>
      </div>
    </div>
  );
};

export default BlogCard;

// src/components/BlogCard.js