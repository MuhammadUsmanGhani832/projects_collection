import styles from './navbar.module.css';
import { IoIosArrowBack } from "react-icons/io";
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <div className={styles.navbarContainer}>
            <Link to={'https://muhammad-usman-profile.netlify.app/'}>
                <IoIosArrowBack />
                <p>Home</p>
            </Link>
        </div>
    )
}

export default Navbar