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
        <h1>
          <span>/</span>projects
        </h1>
        <p>List of my projects</p>
        <div className={styles.select}>
          <span>Select a language for filtering:</span>
          <select
            value={isSelected}
            onChange={handleSelect}
            className={styles.select_selected}
          >
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
          <div
            className={`${styles.project} ${
              isSelected === "html" || isSelected === "all"
                ? styles.showClass
                : styles.hiddenClass
            }`}
          >
            <img
              src="/ecomerance-website-cara.png"
              alt="ecomerance websit cara"
            />
            <div className={styles.tools}>
              <span>HTML</span>
              <span>CSS</span>
              <span>JavaScrip</span>
            </div>
            <div className={styles.detail}>
              <h2
                onClick={() =>
                  window.open(
                    "https://ecomerance-responsive-website.netlify.app/",
                    "_blank"
                  )
                }
              >
                Ecomerance Custom Website
              </h2>
              <p>
                Fully responsive e-comrance website build with basice Html Css
                JavaScrip
              </p>
              <div>
                <span
                  onClick={() =>
                    window.open(
                      "https://github.com/MuhammadUsmanGhani832/ecommerce_website",
                      "_blank"
                    )
                  }
                >
                  Github
                </span>
              </div>
            </div>
          </div>
          {/* 1st project */}
          <div
            className={`${styles.project} ${
              isSelected === "react" || isSelected === "all"
                ? styles.showClass
                : styles.hiddenClass
            }`}
          >
            <img src="/dice-game.png" alt="dice game react" />
            <div className={styles.tools}>
              <span>React</span>
              <span>JavaScrip</span>
            </div>
            <div className={styles.detail}>
              <h2
                onClick={() =>
                  window.open(
                    "https://contact-us-page-muhammad-usman.netlify.app/",
                    "_blank"
                  )
                }
              >
                Dice Game
              </h2>
              <p>Simple dice game build with React and JavaScrip</p>
              <div>
                <span
                  onClick={() =>
                    window.open(
                      "https://github.com/MuhammadUsmanGhani832/dice-game-react-app",
                      "_blank"
                    )
                  }
                >
                  Github
                </span>
              </div>
            </div>
          </div>
          <div
            className={`${styles.project} ${
              isSelected === "react" || isSelected === "all"
                ? styles.showClass
                : styles.hiddenClass
            }`}
          >
            <img src="/contact-us-page.png" alt="contact-us-page react" />
            <div className={styles.tools}>
              <span>HTML</span>
              <span>CSS</span>
              <span>JavaScrip</span>
            </div>
            <div className={styles.detail}>
              <h2
                onClick={() =>
                  window.open(
                    "https://contact-us-page-muhammad-usman.netlify.app/",
                    "_blank"
                  )
                }
              >
                Contact Page react
              </h2>
              <p>Contact us page build with basic react</p>
              <div>
                <span
                  onClick={() =>
                    window.open(
                      "https://github.com/MuhammadUsmanGhani832/contact-us-page-react-app",
                      "_blank"
                    )
                  }
                >
                  Github
                </span>
              </div>
            </div>
          </div>
          {/* 2nd project */}
          <div
            className={`${styles.project} ${
              isSelected === "html" || isSelected === "all"
                ? styles.showClass
                : styles.hiddenClass
            }`}
          >
            <img src="/portfolio-website.png" alt="" />
            <div className={styles.tools}>
              <span>HTML</span>
              <span>CSS</span>
              <span>JavaScrip</span>
            </div>
            <div className={styles.detail}>
              <h2
                onClick={() =>
                  window.open(
                    "https://muhammad-usman-profile.netlify.app/",
                    "_blank"
                  )
                }
              >
                Portfolio Website
              </h2>
              <p>Responsive websit create with HTLM, CSS and JavaScript</p>
              <div>
                <span
                  onClick={() =>
                    window.open(
                      "https://github.com/MuhammadUsmanGhani832/my_portfolio",
                      "_blank"
                    )
                  }
                >
                  Github
                </span>
              </div>
            </div>
          </div>
          {/* 2nd project */}
          <div
            className={`${styles.project} ${
              isSelected === "html" || isSelected === "all"
                ? styles.showClass
                : styles.hiddenClass
            }`}
          >
            <img src="/analog-clock.png" alt="" />
            <div className={styles.tools}>
              <span>HTML</span>
              <span>CSS</span>
              <span>JavaScrip</span>
            </div>
            <div className={styles.detail}>
              <h2
                onClick={() =>
                  window.open(
                    "https://analog-and-digital-clock-html-css-js.netlify.app/",
                    "_blank"
                  )
                }
              >
                Analog Clock
              </h2>
              <p>Simple responsive analog and digital clock</p>
              <div>
                <span
                  onClick={() =>
                    window.open(
                      "https://github.com/MuhammadUsmanGhani832/analog_clock",
                      "_blank"
                    )
                  }
                >
                  Github
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
}

export default Projects;
