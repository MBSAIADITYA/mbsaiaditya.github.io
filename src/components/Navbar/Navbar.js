import styles from "./Navbar.module.css";
import Image from 'next/image';
import Link from "next/link";

export default function Navbar() {
    return (
        <>
            <nav className={styles.navbar}>
                <div className={styles.container}>
                    <Link className={styles.navbarHeader} href={"/"} passHref >
                        <Image src="/logo-iet.png" alt="logo" width={50} height={50} />
                    </Link>
                    <div className={styles.navbarCollapse} id="navbarSupportedContent">
                        <ul className={styles.navbarNav}>
                            <li className={styles.navItem}>
                                <Link className={styles.navLink} aria-current="page" href={"/"} passHref >
                                    Home
                                </Link>
                            </li>
                            <li className={styles.navItem}>
                                <Link className={styles.navLink} aria-current="page" href={"/about"} passHref >
                                    About
                                </Link>
                            </li>
                            <li className={styles.navItem}>
                                <Link className={styles.navLink} aria-current="page" href={"/team"} passHref>
                                    Team
                                </Link>
                            </li>
                            <li className={styles.navItem}>
                                <Link className={styles.navLink} aria-current="page" href={"/projects"} passHref >
                                    Projects
                                </Link>
                            </li>
                            <li className={styles.navItem}>
                                <Link className={styles.navLink} aria-current="page" href={"/events"} passHref >
                                    Events
                                </Link>
                            </li>
                            <li className={styles.navItem}>
                                <Link className={styles.navLink} aria-current="page" href={"/blogs"} passHref>
                                    Blogs
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    );
}