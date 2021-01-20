import './StaffCard.css';
import React, { useState } from 'react';
import {Card} from 'react-bootstrap';
import Photo from './test.jpg';

function StaffCard() {
    const [isShown, setIsShown] = useState(false);

    return (
      <Card 
      class="card bg-dark text-white CardDiv" 
      style={{ width: '15rem'}}  
      onMouseEnter={() => setIsShown(true)} 
      onMouseLeave={() => setIsShown(false)}
      >
        <Card.Img variant="top" src={Photo} alt="Item Image" />
          {isShown && (
            <div class="card-img-overlay OverlayDiv">
              <p class="Text">
                Born in PJ in 1998, Joseph moved to Auckland, New Zealand in 2005 and later got his Honors in Computer Systems Engineer where he graduated with Second Class, First Division honors. 
              </p>
            </div>
          )}
          <div class="Text card-img-overlay Details CardContent">
            <div class="CardNameAndTitle">
              <h4>Joseph Chua</h4>
              <h7>Staff Member</h7>
            </div>
          </div>
      </Card>
    );
  }


export default StaffCard;
