// src/components/BlogCard.js
/*import Link from 'next/link';
import styles from './Blogcard.module.css'; // Use CSS modules for styles

const BlogCard = ({ title, blogLink}) => {
  //const truncatedDescription = description.length > 100 ? `${description.slice(0, 100)}...` : description;

  return (
    <div className={styles.blogcontainer}>
      <div className={styles.blogCard}>
        <div className={styles.blogDetails}>
          <h2 className={styles.head}>{title}</h2>
        </div>
      </div>
    </div>
  );
};

export default BlogCard;

// src/components/BlogCard.js*/

// src/components/BlogCard.js
import Link from 'next/link';
import Image from 'next/image';
import styles from './Blogcard.module.css'; // Use CSS modules for styles

const BlogCard = ({ title, authors, img, description, slug, date }) => {
  // const truncatedDescription = description.length > 100 ? `${description.slice(0, 100)}...` : description;

  return (
    <div className={styles.blogCard}>
      <div className={styles.blogImage}>
        <img className='w-full object-cover h-52' src={img} alt={title} />
      </div>
      <div className={styles.blogDetails}>
        <h2 className={`font-semibold ${styles.head}`}>{title}</h2>
        <p className='font-medium text-xs mb-1'>{date}</p>
        <p className={`font-medium mb-3 ${styles.para}`}>by {authors}</p>
        <p className={styles.para}>{description}</p>
      </div>
    </div>
  );
};

export default BlogCard;
