import OurService from "../Share/OurService/OurService";
import Card from "../Share/SubShare/Card/Card";

const MainBody = () => {
    return (
        <div className="max-w-7xl mx-auto">
            <OurService></OurService>
            <Card></Card>
        </div>
    );
};

export default MainBody;