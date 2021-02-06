import './StaffCard.css';
import React, { Component, useState } from 'react';
import {Card} from 'react-bootstrap';

class StaffCard extends Component {
  constructor(props) 
  { 
    super(props); 
    this.handleMouseHover = this.handleMouseHover.bind(this);
    this.state = {
      isHovering: false,
    };
  } 

  handleMouseHover() {
    this.setState(this.toggleHoverState);
  }

  toggleHoverState(state) {
    return {
      isHovering: !state.isHovering,
    };
  }

  render() {
    return (
      <Card 
      class="card bg-dark text-white CardDiv" 
      style={{ width: 'auto'}}  
      onMouseEnter={this.handleMouseHover} 
      onMouseLeave={this.handleMouseHover} 
      >
        <Card.Img variant="top" src={'\\StaffPhotos\\' + this.props.Location} alt="Item Image" />
          {this.state.isHovering && (
            <div class="card-img-overlay OverlayDiv">
              <p class="Text">
                {this.props.Bio}
              </p>
            </div>
          )}
          <div class="Text card-img-overlay CardContent">
            <div class="CardNameAndTitle">
              <h4>{this.props.Name}</h4>
              <h7>{this.props.Title}</h7>
            </div>
          </div>
      </Card>
    );
  }
}


export default StaffCard;
