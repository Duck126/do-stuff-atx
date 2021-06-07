import styles from '../styles/Home.module.css'
import Link from "next/link"

const Navbar = () => {
    return (
        <nav className={styles.navBar}>
            <ul className={styles.navList}>
                <li className={styles.navLink}>
                    <Link href="/"><a>Home</a></Link>
                </li>
                <li className={styles.navLink}>
                    <Link href="/about"><a>About</a></Link>
                </li>
            </ul>
        </nav>
    )
}

export default Navbar;