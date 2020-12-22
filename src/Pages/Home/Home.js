import React, { Component } from 'react';
import Carousel from './HomePage/PictureSlides';
import MidSection from './HomePage/MidSection';
import HL from '../../Components/HL';
import NewArrivals from './HomePage/NewArrivals';

class Home extends Component {
  render() {
    return (
      <div>
        <Carousel />
        <HL />
        <MidSection />
        <HL />
        <NewArrivals />
      </div>
    );
  }
}

export default Home;
