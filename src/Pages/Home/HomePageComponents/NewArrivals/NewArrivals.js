import React, { Component } from 'react';
import './NewArrivals.css';
import CardDeck from 'react-bootstrap/CardDeck';
import ItemCard from '../../../../Components/ItemCard';

class NewArrivals extends Component {
  render() {
    return (
        <div class="col-md-8 Body" >
          <h1>New Arrivals</h1>
          <CardDeck>
            <ItemCard Item="1964 Tissot Pocket Watch" Price="790.00"/>
            <ItemCard Item="Test" Price="Enquire"/>
            <ItemCard Item="1964 Tissot Pocket Watch"/>
            <ItemCard Item="1964 Tissot Pocket Watch"/>
          </CardDeck>
          <br/>
          <CardDeck>
            <ItemCard Item="1964 Tissot Pocket Watch"/>
            <ItemCard Item="Test" class="ItemCard"/>
            <ItemCard Item="1964 Tissot Pocket Watch"/>
            <ItemCard Item="1964 Tissot Pocket Watch"/>
          </CardDeck>
        </div>
    );
  }
}

export default NewArrivals;
