import React from "react";

import GitHubLogo from "../../../assets/contact/githubIcon.png";
import styles from "./Projects.module.css";
import projects from "../../data/projects.json";
import { ProjectCard } from "./ProjectCard";

export const Projects = () => {
  return (
    <section className={styles.container} id="projects">
      <h2 className={styles.title}>Projects</h2>
      <div className={styles.projects}>
        {projects.map((project, id) => {
          return <ProjectCard key={id} project={project} />;
        })}
      </div>

      <div className={styles.links}>
        <a href="https://github.com/komaldethe28" className={styles.gitproject}
          target="_blank" rel="noopener noreferrer">
          <img src={GitHubLogo} alt="GitHub Logo" className={styles.gitIcon} />
          View my other Project work
        </a>
      </div>

    </section>
  );
};
