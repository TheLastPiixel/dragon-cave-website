import React, { Component } from 'react';
import Carousel from './HomePageComponents/PictureSlides';
import MidSection from './HomePageComponents/MidSection';
import HL from '../../Components/HL';
import NewArrivals from './HomePageComponents/NewArrivals';

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
