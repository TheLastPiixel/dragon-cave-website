import './StaffCard.css';
import React, { useState } from 'react';
import {Card} from 'react-bootstrap';
import PlateSet from '../../../../Content/Image/plate-set.jpg';

function StaffCard() {
    const [isShown, setIsShown] = useState(false);

    return (
      <Card 
      class="card bg-dark text-white Card" 
      style={{ width: '18rem'}}  
      onMouseEnter={() => setIsShown(true)} 
      onMouseLeave={() => setIsShown(false)}
      >
        <Card.Img variant="top" src={PlateSet} alt="Item Image" />
          {isShown && (
            <div class="card-img-overlay">
              <p class="Text">
                blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah 
              </p>
            </div>
          )}
      </Card>
    );
  }


export default StaffCard;
