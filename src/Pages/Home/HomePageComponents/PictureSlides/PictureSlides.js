import React, { Component } from 'react';
import './PictureSlides.css';
import Carousel from 'react-bootstrap/Carousel';
import Image1 from "./test.jpg";

class PictureSlides extends Component {
  render() {
    return (
      <div class="row">
        <div class="col-md-2" />
        <div class="col-md-8 PictureSlide">
          <br />
          <Carousel>
            <Carousel.Item>
              <img src={Image1} className="d-block w-100" alt="First slide"/>
            </Carousel.Item>
            <Carousel.Item>
              <img src={Image1} className="d-block w-100" alt="Third slide"/>
            </Carousel.Item>
            <Carousel.Item>
              <img src={Image1} className="d-block w-100" alt="Third slide"
              />
            </Carousel.Item>
          </Carousel>
        </div>
      </div>
    );
  }
}

export default PictureSlides;