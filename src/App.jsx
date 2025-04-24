import styles from "./App.module.css";
import { About } from "./components/About/About";
import { Skill } from "./components/Skill/Skill";
import { Contact } from "./components/Contact/Contact";
import { Experience } from "./components/Experience/Experience";
import { Navbar } from "./components/Navbar/Navbar";
import { Projects } from "./components/Projects/Projects";

function App() {
  return (
    <div className={styles.App}>
      <Navbar />
      <About />
      <Skill />
      {/* <Skill /> */}
      <Experience />
      <Projects />
      <Contact />
    </div>
  );
}

export default App;
