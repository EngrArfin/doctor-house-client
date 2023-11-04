import { useEffect, useState } from "react";
import TitleName from "../../SubShare/TitleName/TitleName";
import DoctorsCard from "../DoctorsCard/DoctorsCard";

const DoctorMenu = () => {
    const [menu, setMenu] = useState([])

    useEffect(() => {
        fetch('doctor.json')
          .then(res => res.json())
          .then(data => {
            /* const popularItems = data.filter((item) => item.category === 'popular');
            setMenu(popularItems); */
            const doctorItems = data.filter((item) => item.category === 'doctors');
            setMenu(doctorItems); 
          });
      }, []);

    return (
        <section>
            <TitleName
        title={"Appointment here"}
        subTitle={ " Our Expert Doctors"}
        
      ></TitleName>
            <div className="grid md:grid-cols-3 ">
                {
                    menu.map(item => <DoctorsCard
                    key={item._id}
                    item = {item}
                    ></DoctorsCard>)  
                }
            </div>
            
            
        </section>
    );
};

export default DoctorMenu;