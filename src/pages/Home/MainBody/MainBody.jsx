import OurService from "../Share/OurService/OurService";
import PopularMenu from "../Share/Profile1/PopularMenu/PopularMenu";
import DoctorMenu from "../Share/Profile2/DoctorMenu/DoctorMenu";
import Card from "../Share/SubShare/Card/Card";
import ContractForm from "../Share/SubShare/ContractForm/ContractForm";

import PatientsOpinion from "../Share/SubShare/PatientsOpinion/PatientsOpinion";

const MainBody = () => {
    return (
        <div className="max-w-7xl mx-auto">
            <OurService></OurService>
            <Card></Card>
            <PatientsOpinion></PatientsOpinion>
            <PopularMenu></PopularMenu>
           
            
            <ContractForm></ContractForm>
        </div>
    );
};

export default MainBody;