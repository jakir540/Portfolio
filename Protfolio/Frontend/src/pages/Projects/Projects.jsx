import { Button, Typography } from "@mui/material";
import Navbar from "../Shared/Navbar/Navbar";
import Footer from "../Shared/Footer/Footer";
import { AiOutlineProject } from "react-icons/ai";
import ProjectCart from "./ProjectCart";
import ProjectImage from "../../assets/projectImage.jpg"
import "./Projects.css"


const Projects = () => {
  const projects = [1,2,3];
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
            <ProjectCart key={index}
            url ="https://bd-toymart.web.app/"
             projectImage = {ProjectImage}
             projectTitle="the bd toy market"
             description = "this is the sample of project description of this project"
             technologies = "mongoDB ,react,node,javacript,html"            
             
             ></ProjectCart>
          ))}
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default Projects;
