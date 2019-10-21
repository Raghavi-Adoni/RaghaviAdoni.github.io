import React from 'react'; 
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import "../Tabs1.css";
import { Card } from 'react-bootstrap';


function Tabs1() 
{ 
  return <div class="fluid-container"><Tabs className="Tabs-Main">
    <TabList>
      <Tab >About Me</Tab>
      <Tab >Projects/Experience</Tab>
      <Tab >Achievements</Tab>
      <Tab >Contact</Tab>
    </TabList>

    <TabPanel>
      <div class="fluid-container">
      <div class="column"><Card className = 'about-border'>
  <Card.Body>
    <Card.Title><h2>Mess Manager</h2></Card.Title>
    <Card.Text>
      <h6 style={{overflowY : 'scroll'}}>Android App built to help easen the ordering process in the mess and to make it more efficient. Built with proper 
        authetication to ensure only the residents have the access to it.
      </h6>
    </Card.Text>
  </Card.Body>
</Card>
<Card className = 'about-border'>
  <Card.Body >
    <Card.Title><h2>Internship at Goldman Sachs</h2></Card.Title>
    <Card.Text>
      <h6 style={{overflowY : 'scroll'}}>Did my summer internship (2019) at Goldman Sachs which provided me with a great learning oppurtunity. </h6>
    </Card.Text>
  </Card.Body>
</Card>
<Card className = 'about-border'>
  <Card.Body>
    <Card.Title><h2>Car Class Prediction </h2></Card.Title>
    <Card.Text>
      <h6 style={{overflowY : 'scroll'}}>A supervised learning approach to 
        predict the type of car based on evaluation of features using supervised learning algorithms and 
        then choosing the best model.</h6>
    </Card.Text>
  </Card.Body>
</Card></div></div>
    </TabPanel>
    <TabPanel>
      <h2 className="tabs-content">Projects/Experience</h2>
    </TabPanel>
    <TabPanel>
      <h2 className="tabs-content">Achievements</h2>
    </TabPanel>
    <TabPanel>
      <h2 className="tabs-content">Contact</h2>
    </TabPanel>
  </Tabs></div>

}

export default Tabs1;