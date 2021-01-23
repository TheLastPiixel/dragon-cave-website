import "./ItemCard.css";
import React, { Component } from 'react';
import {Card, Button} from 'react-bootstrap';

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
      <Card border="0" class="card Card" style={{ width: '18rem'}} onMouseEnter={this.handleMouseHover} onMouseLeave={this.handleMouseHover} >
        <Card.Img variant="top" src={'\\NewArrivals\\' + this.props.Location} className="img-fluid" alt="Card image" />
        {this.state.isHovering && (
          <div class="card-img-overlay OverlayDiv">
            <p class="Text">
              {this.props.Description}
            </p>
            <Button variant="success" style={{width: "60%", position: "absolute", bottom: "0", left: "0", textAlign: "center", marginBottom: "15px", marginLeft: "20%"}}>
              Enquire
            </Button>
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
