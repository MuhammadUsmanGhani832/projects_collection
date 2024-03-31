import styles from './home.module.css';
import Navbar from '../../components/Navbar/Navbar';
import Projects from '../../components/Projects/Projects';
import StyleBlock from '../../components/StyleBlock/StyleBlock';
import Footer from '../../components/Footer/Footer';


const Home = () => {
    return (
        <div className={styles.homeContainer}>
            <div className={styles.StyleBlock}>
                <StyleBlock />
            </div>
            <div className={styles.StyleBlock2}>
                <StyleBlock />
            </div>
            <div className={styles.square}></div>
            <div className={styles.square2}></div>
            <div style={{ position: 'sticky', top: 0, right: 0, backgroundColor: '#282C33' }}>
                <Navbar />
            </div>
            <Projects />

            <Footer/>
        </div>
    )
}

export default Home