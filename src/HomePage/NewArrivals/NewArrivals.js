import React, { Component } from 'react';
import CardDeck from 'react-bootstrap/CardDeck';
import ItemCard from '../../Components/ItemCard';

class NewArrivals extends Component {
  render() {
    return (
      <div class="row">
        <div class="col-md-2" />
        <div class="col-md-8" >
          <h1>New Arrivals</h1>
          <CardDeck>
            <ItemCard Item="1964 Tissot Pocket Watch"/>
            <ItemCard Item="Test"/>
            <ItemCard Item="1964 Tissot Pocket Watch"/>
            <ItemCard Item="1964 Tissot Pocket Watch"/>
          </CardDeck>
          <br/>
          <CardDeck>
            <ItemCard Item="1964 Tissot Pocket Watch"/>
            <ItemCard Item="Test"/>
            <ItemCard Item="1964 Tissot Pocket Watch"/>
            <ItemCard Item="1964 Tissot Pocket Watch"/>
          </CardDeck>
        </div>
        <div class="col-md-2" />
      </div>
    );
  }
}

export default NewArrivals;
