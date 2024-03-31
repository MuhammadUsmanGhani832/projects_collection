import { useState } from 'react';
import styles from './projects.module.css';

const Projects = () => {
    const [isSelected, setIsSelected] = useState('all');

    function handleSelect(e) {
        setIsSelected(e.target.value);
    }
    console.log(isSelected)
    return (
        <div className={styles.projects}>
            <h1><span>/</span>projects</h1>
            <p>List of my projects</p>
            <div className={styles.select}>
                <span>Select a language for filtering:</span>
                <select value={isSelected} onChange={handleSelect} className={styles.select_selected}>
                    <option value="all">All</option>
                    <option value="html">HTML,CSS</option>
                    <option value="react">React</option>
                    <option value="reactnative">React Native</option>
                    <option value="mern">MERN Stack</option>
                </select>
            </div>
            {/* projects container */}
            <div className={styles.projectsContainer}>
                {/* 1st project */}
                <div className={`${styles.project} ${isSelected === "html" || isSelected === "all" ? styles.showClass : styles.hiddenClass}`}>
                    <img src="/Rectangle.png" alt="" />
                    <div className={styles.tools}>
                        <span>HTML</span>
                        <span>HTML</span>
                        <span>HTML</span>
                        <span>HTML</span>
                        <span>HTML</span>
                        <span>HTML</span>
                        <span>HTML</span>
                        <span>HTML</span>
                        <span>HTML</span>
                        <span>hello</span>
                    </div>
                    <div className={styles.detail}>
                        <h2>ChertNodes</h2>
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sed, quidem.</p>
                        <div>
                            <span>Github</span>
                            <span>Github</span>
                        </div>
                    </div>
                </div>
                {/* 1st project */}
                <div className={`${styles.project} ${isSelected === "html" || isSelected === "all" ? styles.showClass : styles.hiddenClass}`}>
                    <img src="/Rectangle.png" alt="" />
                    <div className={styles.tools}>
                        <span>HTML</span>
                        <span>HTML</span>
                        <span>HTML</span>
                        <span>HTML</span>
                        <span>HTML</span>
                        <span>HTML</span>
                        <span>HTML</span>
                        <span>HTML</span>
                        <span>HTML</span>
                        <span>hello</span>
                    </div>
                    <div className={styles.detail}>
                        <h2>ChertNodes</h2>
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sed, quidem.</p>
                        <span>Github</span>
                        <span>Github</span>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Projects;
