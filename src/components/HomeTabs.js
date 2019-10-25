import React from 'react'; 
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import "../Tabs.css";
import ExperienceCards from '../components/ExperienceCards';


function HomeTabs() 
{ 
  return <div class="fluid-container"><Tabs>
    <TabList>
      <Tab >About Me</Tab>
      <Tab >Projects/Experience</Tab>
      <Tab >Achievements</Tab>
      <Tab >Contact</Tab>
    </TabList>

    <TabPanel>
    <div> Tell about yourself here!</div>
    </TabPanel>
    <TabPanel>
      <ExperienceCards />
    </TabPanel>
    <TabPanel>
      <div>Mention your achievements here!</div>
    </TabPanel>
    <TabPanel>
      <div>Add your Contact Details!</div>
    </TabPanel>
  </Tabs></div>

}

export default HomeTabs;