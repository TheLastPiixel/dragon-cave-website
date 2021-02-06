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
            <ItemCard Item="Antique Rustic Daybed Ironwood (Belian)" Price="RM8,800.00" Location="newarrival1.png" Description={'Dimensions: 77.5\"L x 36\"W x 35.5\"H'}/>
            <ItemCard Item="Antique Victorian Baby Carriage" Price="P.O.R" Location="newarrival2.png"/>
            <ItemCard Item="Mother Of Pearl Long Bench" Price="P.O.R" Location="newarrival3.png"/>
            <ItemCard Item="Mother Of Pearl Desk Set" Price="P.O.R" Location="newarrival4.png"/>
          </CardDeck>
          <br/>
          <CardDeck>
            <ItemCard Item="Mother of Pearl Rectangular Side Table" Price="P.O.R" Location="newarrival5.png"/>
            <ItemCard Item="Modern Wardrobe" Price="RM999.00 " Location="newarrival6.png" Description={'Dimensions: 71\"L x 22.5\"W x 77\"H'} />
            <ItemCard Item="Antique Chinese Daybed Hard Wood" Price="RM11,111.00" Location="newarrival7.png"/>
            <ItemCard Item="Mother of Pearl Small Round Table with Fan Chairs" Price="$9,990.00"Location="newarrival8.png" Description={'Dimensions: 36"W x 32.5"H, 1 set with 4 chairs'}/>
          </CardDeck>
        </div>
    );
  }
}

export default NewArrivals;
