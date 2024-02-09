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
//import Image from 'next/image';
import styles from './Blogcard.module.css'; // Use CSS modules for styles

const BlogCard = ({ title, blogger, description, blogLink }) => {
  const truncatedDescription = description.length > 100 ? `${description.slice(0, 100)}...` : description;

  return (
    <div className={styles.blogcontainer}>
      <div className={styles.blogCard}>
        <div className={styles.blogDetails}>
          <h2 className={styles.head}>{title}</h2>
          <p className={styles.para}>by {blogger}</p>
          <p className={styles.para}>{truncatedDescription}</p>
          <Link href={blogLink} passHref>
            <button className={styles.bton}>View more</button>
          </Link>
        </div>
        <div className={styles.blogImage}>
        </div>
      </div>
    </div>
  );
};

export default BlogCard;

// src/components/BlogCard.js