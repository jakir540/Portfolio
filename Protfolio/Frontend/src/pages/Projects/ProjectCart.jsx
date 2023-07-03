import {  Typography } from "@mui/material";
import './Projects.css'

const ProjectCart = ({project}) => {
  return (
    <>
      <a href={project.url} className="projectCard" target="blank">
        <div>
          <img src={project.projectImage} alt="" className="projectImage" />
          <Typography variant="h3">{project.projectTitle}</Typography>

          <div>
           
            <Typography>{project.description}</Typography>
            <Typography variant="h6">Tect Stack: {project.technologies}</Typography>
          </div>
        </div>
      </a>
      
       
       
      
    </>
  );
};

export default ProjectCart;
