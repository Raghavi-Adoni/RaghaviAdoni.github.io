import React from 'react';
import { Card } from 'react-bootstrap';
import "../Tabs.css";

function ExperienceCards() 
{ 
        return <div><Card className = 'card-border'>
        <Card.Body>
          <Card.Title><h2>Mess 
            Manager</h2></Card.Title>
          <Card.Text>
            <h6>Android App built to help easen the ordering process in the mess and to make it more efficient. Built with proper 
              authetication to ensure only the residents have the access to it.
            </h6>
          </Card.Text>
        </Card.Body>
      </Card>
      <Card className = 'card-border'>
        <Card.Body >
          <Card.Title><h2>Customer Segmentation</h2></Card.Title>
          <Card.Text>
            <h6>The project uses unsupervised learning algorithms to cluster customers into groups based on purchasing data(Under Udacity). </h6>
          </Card.Text>
        </Card.Body>
      </Card>
      <Card className = 'card-border'>
        <Card.Body>
          <Card.Title><h2>Car Class Prediction </h2></Card.Title>
          <Card.Text>
            <h6>A supervised learning approach to 
              predict the type of car based on evaluation of features using supervised learning algorithms and 
              then choosing the best model.</h6>
          </Card.Text>
        </Card.Body>
      </Card>
      </div>
} 

export default ExperienceCards;