
import About from "../Share/SubShare/About/About";
import DoctorBio from "../Share/SubShare/DoctorBio/DoctorBio";
import DoctorProfileCard from "../Share/SubShare/DoctorProfileCard/DoctorProfileCard";


const DoctorProfile = () => {
    return (
        <div>
            
            <DoctorProfileCard></DoctorProfileCard>
            <DoctorBio></DoctorBio>
            <About></About>
            
            
        </div>
    );
};

export default DoctorProfile;