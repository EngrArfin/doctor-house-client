import OurService from "../Share/OurService/OurService";
import Card from "../Share/SubShare/Card/Card";
import ContractForm from "../Share/SubShare/ContractForm/ContractForm";
import ExpertDoctors from "../Share/SubShare/ExpertDoctors/ExpertDoctors";
import PatientsOpinion from "../Share/SubShare/PatientsOpinion/PatientsOpinion";

const MainBody = () => {
    return (
        <div className="max-w-7xl mx-auto">
            <OurService></OurService>
            <Card></Card>
            <PatientsOpinion></PatientsOpinion>
            <ExpertDoctors></ExpertDoctors>
            <ContractForm></ContractForm>
        </div>
    );
};

export default MainBody;