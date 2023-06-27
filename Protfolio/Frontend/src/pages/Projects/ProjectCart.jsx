import { Delete } from "@mui/icons-material";
import { Button, Typography } from "@mui/material";
// import   './ProjectCart.css'
import './Projects.css'

const ProjectCart = ({
  url,
  projectImage,
  projectTitle,
  description,
  technologies,
  isAdmin = false
}) => {
  return (
    <>
      <a href={url} className="projectCard" target="blank">
        <div>
          <img src={projectImage} alt="" className="projectImage" />
          <Typography variant="h3">{projectTitle}</Typography>

          <div>
            <Typography variant="h4">About Project</Typography>
            <Typography>{description}</Typography>
            <Typography variant="h6">Tect Stack: {technologies}</Typography>
          </div>
        </div>
      </a>
      {
        isAdmin && 
        <Button style={{color: "rgba(40,40,40,0.7)"}}>
            <Delete></Delete>
        </Button>
      }
    </>
  );
};

export default ProjectCart;
