import { ReactNavbar } from "overlay-navbar";
import logo from "../../../assets/MyLogo.jpg";
import { FaUserAlt } from "react-icons/fa";
import "./Navbar.css";
// import Photo from "../../../assets/myPhoto.jpg";
const Navbar = () => {
  return (
    <div className="navbar-container">
      <ReactNavbar
        navColor1="white"
        navColor2="hsl(219,48%,8%)"
        burgerColor="hsl(250,100%,75%)"
        burgerColorHover="hsl(250,100%,75%)"
        logo={logo}
        logoWidth="120px"
        logoHoverColor="hsl(250,100%,75%)"
        nav2justifyContent="space-around"
        nav3justifyContent="space-around"
        link1Text="Home"
        link2Text="About"
        link3Text="Projects"
        link4Text="Contact"
        link1Url="/"
        link2Url="/about"
        link3Url="/projects"
        link4Url="/contact"
        link1ColorHover="white"
        link1Color="HSL(250,100%,75%"
        link1Size="1.5rem"
        link1Padding="3vmax"
        profileIcon={true}
        ProfileIconElement={FaUserAlt}
        profileIconColor="HSL(250,100%,75%"
        profileIconColorHover="white"
      />
    </div>
  );
};

export default Navbar;
