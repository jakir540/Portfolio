import { Typography } from "@mui/material";
import Navbar from "../Shared/Navbar/Navbar";
import Footer from "../Shared/Footer/Footer";
import { AiOutlineProject } from "react-icons/ai";


const Projects = () => {
  return (
    <div>
      <Navbar></Navbar>
      <div>
        <Typography variant="h3">All Projects Here <AiOutlineProject/></Typography>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default Projects;
