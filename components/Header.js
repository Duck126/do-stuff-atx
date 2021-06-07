import Navbar from "./Navbar"
import styles from '../styles/Home.module.css'


const Header = () => {
    return (
        <header className={styles.header}>
            <h2 className={styles.appTitle}>Stuff to Do ATX</h2>
            <Navbar/>
        </header>
    )
}

export default Header;