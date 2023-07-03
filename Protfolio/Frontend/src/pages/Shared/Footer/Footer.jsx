import "./Footer.css";

import {
  FaTwitterSquare,
  FaGoogle,
  FaFacebook,
  FaLinkedinIn,
  FaGitSquare,
} from "react-icons/fa";

const Footer = () => {
  return (
    <div className="footer-body">
        <div className="footer-content">
      <h3>MERN Stack Developer</h3>
      <p>
      Experienced MERN stack developer proficient in JavaScript, MongoDB, Express.js, React, and Node.js. Skilled in full-stack web development, creating dynamic user interfaces, and efficient server-side programming. Committed to delivering high-quality, scalable web applications that meet client requirements and provide a seamless user experience.
      </p>

      <ul className="socials">
        <li>
          <a href="#">
            <FaFacebook></FaFacebook>
          </a>
        </li>
        <li>
          <a href="#">
            <FaGitSquare></FaGitSquare>
          </a>
        </li>
        <li>
          <a href="#">
            <FaGoogle></FaGoogle>
          </a>
        </li>
        <li>
          <a href="#">
            <FaLinkedinIn></FaLinkedinIn>
          </a>
        </li>
        <li>
          <a href="#">
            <FaTwitterSquare></FaTwitterSquare>
          </a>
        </li>
      </ul>
      <p>
          copyright &copy;2023 MERN stack developer
        </p>
   
    </div>
    </div>
  );
};

export default Footer;
