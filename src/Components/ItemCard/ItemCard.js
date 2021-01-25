import "./ItemCard.css";
import React, { Component } from 'react';
import {Card} from 'react-bootstrap';
import EnquireButton from '../EnquireModal';

class ItemCard extends Component {
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
      <Card border="0" class="CardStyle" style={{ width: 'auto'}} onMouseEnter={this.handleMouseHover} onMouseLeave={this.handleMouseHover} >
        <Card.Img variant="top" src={'\\NewArrivals\\' + this.props.Location} className="img-fluid" alt="Card image" style={{ width: 'auto', height: '13.5rem', objectFit: 'cover'}}/>
        {this.state.isHovering && (
          <div class="card-img-overlay CardOverlay">
            <p class="Text">
              {this.props.Description}
            </p>
            <EnquireButton ItemName={this.props.Item}/>
          </div>
        )}
        <Card.Body class="CardBody">
          <Card.Title>{this.props.Price}</Card.Title>
          <Card.Text>{this.props.Item}</Card.Text>
        </Card.Body>
      </Card>
    );
  }
}

export default ItemCard;
