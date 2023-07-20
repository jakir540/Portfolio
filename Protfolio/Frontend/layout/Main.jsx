import { Outlet } from "react-router-dom";
import Navbar from "../src/pages/Shared/Navbar/Navbar";
import Footer from "../src/pages/Shared/Footer/Footer";


const Main = () => {

  return (
    <div>
      <Navbar></Navbar>
     
      <Outlet></Outlet>
      <Footer></Footer>
    </div>
  );
};

export default Main;
