import { Helmet } from "react-helmet";
import DoctorBio from "../Share/Profile/DoctorBio/DoctorBio";
import DoctorProfileCard from "../Share/Profile/DoctorProfileCard/DoctorProfileCard";

const DoctorProfile = () => {
  return (
    <div>
      <Helmet>
        <title>Doctor house |doctor Profile</title>
      </Helmet>
      <DoctorProfileCard></DoctorProfileCard>
      <DoctorBio></DoctorBio>
      
    </div>
  );
};

export default DoctorProfile;
