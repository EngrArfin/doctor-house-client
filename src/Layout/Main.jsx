import { Outlet } from "react-router-dom";
import NavBar from "../pages/Home/Share/NavBar/NavBar";
import Footer from "../pages/Home/Footer/Footer";

const Main = () => {
  return (

    <div>
      <NavBar></NavBar>
      <Outlet></Outlet>
      <Footer></Footer>
    </div>
    
  );
};

export default Main;
