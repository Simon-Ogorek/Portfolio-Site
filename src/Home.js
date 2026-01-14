import AboutMe from './AboutMe';
import Contact from './Contact';
import Header from './Header';
import './Home.css';
import HomeCarousel from './HomeCarousel';
import { projects } from "./projectData"
import ProjectElement from './ProjectElement';


function Home() {
  return (
    <>
    <Header></Header>
    <HomeCarousel id="home"></HomeCarousel>

    <h2 className="headerText" id="about-me">About Me</h2>
    <AboutMe></AboutMe>
    <h2 className="headerText" id="projects">My Projects</h2>

    {projects.map((project, index) => (
        <ProjectElement
        key={project.id}
        project={project}
        />
    ))}

    <h2 className="headerText" id="contact">Contact Me!</h2>
    <Contact></Contact>
    </>
  );
}

export default Home;