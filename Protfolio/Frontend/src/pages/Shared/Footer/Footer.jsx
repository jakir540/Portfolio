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
      <h3>Foolish Developer</h3>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil
        voluptatibus voluptatum obcaecati, numquam voluptas assumenda debitis
        sint dicta praesentium eaque vero quod aut minima! Ipsum cupiditate
        dignissimos id optio nisi!
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
      <div className="footer-bottom">
        <p>
          copyright &copy;2021 <a href="">foolishdeveloper</a>{" "}
        </p>
        <div className="footer-menu">
          <ul className="f-menu">
            <li>
              <a href="">Home</a>
            </li>
            <li>
              <a href="">About</a>
            </li>
            <li>
              <a href="">Contact</a>
            </li>
            <li>
              <a href="">Blog</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
    </div>
  );
};

export default Footer;
