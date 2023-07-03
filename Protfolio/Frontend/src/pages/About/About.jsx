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
          
            <blockquote style={{textAlign:"right", lineHeight:"35px" , letterSpacing:"2.5px"}}>
              Every great developer you <br /> know got there by solving problems <br /> they
              were unqualified  <br /> to solve until they actually did it. <br />
              <cite>- Md Jakir Hossain</cite>
            </blockquote>{" "}
         
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
            <Typography
              style={{
                margin: "1vmax 0",
              }}
            >
              MERN Stack developer
            </Typography>
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
              Experienced MERN stack developer proficient in JavaScript,
              MongoDB, Express.js, React, and Node.js. Skilled in full-stack web
              development, creating dynamic user interfaces, and efficient
              server-side programming.
            </Typography>
          </div>
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default About;
