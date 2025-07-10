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
            <div className={styles.skillItemText}>
              <h3>Frontend Developer:</h3>
              <p>
                I'm a frontend developer with experience in building responsive and optimized sites. 
                
                <div className={styles.skillTags}>{["HTML", "CSS", "Bootstrap", "React"].map((skill, index) => (<span key={index} className={styles.skillTag}>{skill}</span>     ))}
                </div>
              </p>
            </div>
          </li>
          
          <li className={styles.skillItem}>
            <div className={styles.skillItemText}>
              <h3>Backend Developer:</h3>
              <p>
                I have experience developing fast and optimised back-end systems and APIs.
                <div className={styles.skillTags}>{["Node", "Express", "MongoDB", "Flask",].map((skill, index) => (<span key={index} className={styles.skillTag}>{skill}</span>))}
                </div>
              </p>
            </div>
          </li>

          <li className={styles.skillItem}>
            <div className={styles.skillItemText}>
              <h3>Languages:</h3>
              <p>
                I have a Strong foundation in programming languages with focus on problem-solving and software devlopment across multiple domain.
                <div className={styles.skillTags}>{["Python","C", "C++", "DSA", "JAVA", "AI-ML", "OOP"].map((skill, index) => (<span key={index} className={styles.skillTag}>{skill}</span>))}
                </div>
              </p>
            </div>
          </li>

          <li className={styles.skillItem}>
            <div className={styles.skillItemText}>
              <h3>Other Skills:</h3>
              <p>
                I have hand-on experience with essential toos and platforms.
                <div className={styles.skillTags}>{["MySQL", "AWS (EC2, S3)", "Docker", "GitHub Actions","JWT Authentication"].map((skill, index) => (<span key={index} className={styles.skillTag}>{skill}</span>))}
                </div>
              </p>
            </div>
          </li>

          <li className={styles.skillItem}>
            <div className={styles.skillItemText}>
              <h3>Python Libraries:</h3>
              <p>
              I regularly work with a wide range of Python libraries for data analysis, machine learning, and visualization, helping me build efficient, intelligent and insightful solutions.    
                <div className={styles.skillTags}>{["Pandas", "NumPy", "Matplotlib", "Seaborn","SciPy", "Pickle", "scikit-learn","Streamlit","TensorFlow", "PyTorch", "Flask"].map((skill, index) => (<span key={index} className={styles.skillTag}>{skill}</span>     ))}
                </div>
              </p>
            </div>
          </li>
          
        </ul>
      </div>
    </section>
  );
};
