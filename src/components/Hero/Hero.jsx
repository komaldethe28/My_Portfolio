import React from "react";

import styles from "./Hero.module.css";
import { getImageUrl } from "../../utils";

export const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>I'm Komal Dethe</h1>
        <p className={styles.description}>
          I'm a full-stack developer with expertise in frontend and backend devlopment. Skilled in designing scalable, high-performance applications and integrating RESTful APIs. Passionate about, Python, AI/ML, problem-solving and optimizing Web Applications for the best user experience.
        </p>
        {/* <a href="mailto:dethekomalv@gmil.com" className={styles.contactBtn}>
          Check Resume
        </a> */}
        <a href="https://drive.google.com/file/d/1PP8y7-dql4G7VNkitWub-pjT7bHUYgNj/view?usp=drivesdk" className={styles.contactBtn} target="_blank" rel="noopener noreferrer">Check Resume</a>
      </div>
      <img src={getImageUrl("hero/MyImage.jpg")} alt="my_image" className={styles.heroImg}
      />
      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
  );
};
