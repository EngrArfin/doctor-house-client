import { useState } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import About from "../About/About";


const DoctorBio = () => {

  const [tabIndex, setTabIndex] = useState(0)

  return (
    <div className=" max-w-7xl mx-auto">
      <div>
        <Tabs defaultIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
          <TabList className="bg-red-400 flex justify-between">
            <Tab className="p-4 pr-40" >Overview</Tab>
            <Tab className="p-4 pr-40" >Locations</Tab>
            <Tab className="p-4 pr-40" >Reviews</Tab>
            <Tab className="p-4 pr-40" >Business Hours</Tab>
          </TabList>

          <TabPanel>
            <About></About>
          </TabPanel>
          <TabPanel>
          <About></About>
          </TabPanel>
          <TabPanel>
          <About></About>
          </TabPanel>
          <TabPanel>
          <About></About>
          </TabPanel>
        </Tabs>
      </div>
    </div>
  );
};

export default DoctorBio;
