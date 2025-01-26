import Link from "next/link";
import styles from '../styles/header.module.css';
const Header = () => {


    return <header className={styles.header}>
        <div>
           Next Host
        </div>
        <nav className={styles.nav}>
            <ul>
                <li><Link href={`/home`}>Home</Link></li>
                <li><Link href={`./ang`}>Angular</Link></li>
                <li><Link href={`./vue`}>Vue</Link></li>
            </ul>
        </nav>
    </header>
}

export default Header;

