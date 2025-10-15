import React from "react";

import styles from "./About.module.css";
import { getImageUrl } from "../../utils";

export const About = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>I'm Komal Dethe</h1>
        <h2 className={styles.role}>Software Developer</h2>
        <p className={styles.description}>
          I'm a full-stack developer with expertise in frontend and backend devlopment. Skilled in designing scalable, high-performance applications and integrating RESTful APIs. Passionate about, Python, AI/ML, problem-solving and optimizing Web Applications for the best user experience.
        </p>

        <div className={styles.buttonGroup}>
          <a href="https://www.linkedin.com/in/komal-dethe-5827a12b6/?jobid=1234" className={styles.linkedBtn} target="_blank" rel="noopener noreferrer">Connect on Linkedin</a>

          <a href="https://drive.google.com/file/d/1E1H2m6Tm5Gzkw3ocKqbX4IS02xzKGHKI/view?usp=drive_link" className={styles.contactBtn} target="_blank" rel="noopener noreferrer">Check Resume</a>
        </div>
      </div>
      <img src={getImageUrl("about/MyImage.jpg")} alt="my_image" className={styles.aboutImg}
      />
      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
  );
};
