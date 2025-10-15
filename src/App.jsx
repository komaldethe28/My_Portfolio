import styles from "./App.module.css";
import { About } from "./components/About/About";
import { Skill } from "./components/Skill/Skill";
import {Education} from "./components/Education/Education"
import { Contact } from "./components/Contact/Contact";
import { Experience } from "./components/Experience/Experience";
import { Navbar } from "./components/Navbar/Navbar";
import { Projects } from "./components/Projects/Projects";
import { Certifications } from "./components/Certifications/Certifications";

function App() {
  return (
    <div className={styles.App}>
      <Navbar />
      <About />
      <Education />
      <Skill />
      <Experience />
      <Projects />
      <Certifications/>
      <Contact />
    </div>
  );
}

export default App;
