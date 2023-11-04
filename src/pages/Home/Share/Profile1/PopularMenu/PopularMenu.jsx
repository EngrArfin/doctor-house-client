import { useEffect, useState } from "react";
import TitleName from "../../SubShare/TitleName/TitleName";
import MenuItem from "../MenuItem/MenuItem";

const PopularMenu = () => {
    const [menu, setMenu] = useState([])

    useEffect(() => {
        fetch('doctor.json')
          .then(res => res.json())
          .then(data => {
            const popularItems = data.filter((item) => item.category === 'popular');
            setMenu(popularItems);
            /* const doctorItems = data.filter((item) => item.category === 'dessert');
            setMenu(doctorItems); */
          });
      }, []);

    return (
        <section>
            <TitleName
        title={"Our Expert Doctors"}
        subTitle={ " Popular Doctor"}
        
      ></TitleName>
            <div className="grid md:grid-cols-3 ">
                {
                    menu.map(item => <MenuItem
                    key={item._id}
                    item = {item}
                    ></MenuItem>)  
                }
            </div>
            
            
        </section>
    );
};

export default PopularMenu;