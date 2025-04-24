import React from "react";

import styles from "./Skill.module.css";
import { getImageUrl } from "../../utils";

export const Skill = () => {
  return (
    <section className={styles.container} id="skill">
      <h2 className={styles.title}>Skills</h2>
      <div className={styles.content}>
        <ul className={styles.skillItems}>
          <li className={styles.skillItem}>
            <img src={getImageUrl("skill/cursorIcon.png")} alt="Cursor icon" />
            <div className={styles.skillItemText}>
              <h3>Frontend Developer</h3>
              <p>
                I'm a frontend developer with experience in building responsive and optimized sites. Technologis: HTML5, CSS3, JavaScript(ES6+), Bootstrap, React, Vite
              </p>
            </div>
          </li>
          <li className={styles.skillItem}>
            <img src={getImageUrl("skill/serverIcon.png")} alt="Server icon" />
            <div className={styles.skillItemText}>
              <h3>Backend Developer</h3>
              <p>
                I have experience developing fast and optimised back-end systems and APIs. Technologis: Node, Express,MongoDB, Flask
              </p>
            </div>
          </li>
          <li className={styles.skillItem}>
            <img src={getImageUrl("skill/cursorIcon.png")} alt="UI icon" />
            <div className={styles.skillItemText}>
              <h3>Technical Skiils</h3>
              <p>
                Knowledge of Python, C, C++, JAVA, Data Structure and Algorithms, Object Oriented Programming, AI/ML, MySQL, MongoDB, AWS (EC2, S3,), Docker, GitHub Actions,JWT Authentication, Flask
              </p>
            </div>
          </li>
          
        </ul>
      </div>
    </section>
  );
};
