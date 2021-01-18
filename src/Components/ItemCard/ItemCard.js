import "./ItemCard.css";
import React, { Component } from 'react';
import {Card, Button} from 'react-bootstrap';
//TEST
import PocketWatch from './pocketwatch.jpeg';

class ItemCard extends Component {

  render() {
    return (
      <Card style={{ width: '18rem'}} class="Card">
        <Card.Img variant="top" src={PocketWatch} />
        <Card.Body>
          <Card.Title>{this.props.Item}</Card.Title>
          <Button variant="primary">{this.props.Price}</Button>
        </Card.Body>
      </Card>
    );
  }
}

export default ItemCard;
