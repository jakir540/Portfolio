import Navbar from "../Shared/Navbar/Navbar";
import Footer from "../Shared/Footer/Footer";
import { AiOutlineProject } from "react-icons/ai";
import ProjectCart from "./ProjectCart";
import "./Projects.css";
import projects from "../../../public/projects.json";
import { Typography } from "@mui/material";

const Projects = () => {
  return (
    <div>
      <Navbar></Navbar>
      <div className="projects">
        <Typography variant="h3">
          All Projects Here <AiOutlineProject />
        </Typography>
        {/* Add project  */}

        <div className="projectsWrappers">
          {projects.map((project, index) => (
            <ProjectCart key={index} project={project}></ProjectCart>
          ))}
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default Projects;
