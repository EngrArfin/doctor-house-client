import { Helmet } from "react-helmet";
import Header from "../Header/Header";
import MainBody from "../MainBody/MainBody";

const Home = () => {
  return (

    <div>

      <Helmet>
        <title>Doctor house |76-3 </title>
      </Helmet>
      
      <Header></Header>
      <MainBody></MainBody>
    </div>
  );
};

export default Home;
