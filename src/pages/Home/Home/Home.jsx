import { Helmet } from "react-helmet";
import Header from "../Header/Header";
import MainBody from "../MainBody/MainBody";

const Home = () => {
  return (

    <div>

      <Helmet>
        <title>Doctor house |Home </title>
      </Helmet>
                  
      <Header></Header>
      <MainBody></MainBody>
    </div>
  );
};

export default Home;
