import { Typography } from "@mui/material";
import Footer from "../Shared/Footer/Footer";
import Navbar from "../Shared/Navbar/Navbar";
import "./About.css";
import myPhoto from "../../assets/jakir.jpg";

const About = () => {
  return (
    <div>
      <Navbar></Navbar>
      <div className="about">
        <div className="aboutContainer">
          <Typography>This is the sample quote </Typography>
        </div>
        <div className="aboutContainer2">
          <div>
            <img src={myPhoto} alt="myPhoto" className="photoAvatar" />
            <Typography
              variant="h4"
              style={{
                margin: "1vmax 0",
                color: "black",
              }}
            >
              Md Jakir Hossain
            </Typography>
            <Typography  style={{
                margin: "1vmax 0",
                
              }}>MERN Stack developer</Typography>
            <Typography>I am photographer</Typography>
          </div>
          <div>
            <Typography
              style={{
                wordSpacing: "5px",
                lineHeight: "45px",
                letterSpacing: "5px",
                textAlign: "right",
              }}
            >
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Exercitationem dolor labore, velit inventore animi adipisci .
            </Typography>
          </div>
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default About;
