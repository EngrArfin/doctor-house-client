/* import { useEffect, useState } from "react";
import ExpertDoctors from "../pages/Home/Share/SubShare/ExpertDoctors/ExpertDoctors";

const useDoctor = () => {
  const [doctor, setDoctor] = useState([]);

  useEffect(() => {
    fetch("doctor.json")
      .then((res) => res.json())
      .then((data) => {
        const popularItems = data.filter((item) => item.category === "popular");
        setDoctor(popularItems);
      });
  }, []);

  return (
    <div>
      {doctor.map((item) => (
        <ExpertDoctors 
        key={item._id} 
        item={item}
        ></ExpertDoctors>
      ))}
    </div>
  );
};

export default useDoctor;

const [doctor, setDoctor] = useState([]);
  useEffect( () =>{
    fetch('doctor.json')
    .then(res => res.json())  
    .then(data => setDoctor(data))
  }) 
 */