import './StaffCard.css';
import React, { useState } from 'react';
import {Card} from 'react-bootstrap';
import PlateSet from '../../../../Content/Image/plate-set.jpg';
import Photo from './test.jpg';

function StaffCard() {
    const [isShown, setIsShown] = useState(false);

    return (
      <Card 
      class="card bg-dark text-white CardDiv" 
      style={{ width: '18rem'}}  
      onMouseEnter={() => setIsShown(true)} 
      onMouseLeave={() => setIsShown(false)}
      >
        <Card.Img variant="top" src={Photo} alt="Item Image" />
          {isShown && (
            <div class="card-img-overlay">
              <p class="Text">
                blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah 
              </p>
            </div>
          )}
          <div class="Text card-img-overlay Details">
            <h4>Joseph Tze Ming Chua</h4>
            <h7>Staff Member</h7>
          </div>
      </Card>
    );
  }


export default StaffCard;
