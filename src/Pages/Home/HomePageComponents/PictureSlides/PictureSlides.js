import React, { Component } from 'react';
import './PictureSlides.css';
import Carousel from 'react-bootstrap/Carousel';
import Image1 from "../../../../Content/Image/antique-cupboard.jpg";
import Image2 from "../../../../Content/Image/plants.jpg";
import Image3 from "../../../../Content/Image/pots.jpg";

class PictureSlides extends Component {
  render() {
    return (
        <div class="col-md-8 PictureSlide">
          <br />
          <Carousel>
            <Carousel.Item>
              <img src={Image1} className="d-block w-100" alt="First slide"/>
            </Carousel.Item>
            <Carousel.Item>
              <img src={Image2} className="d-block w-100" alt="Third slide"/>
            </Carousel.Item>
            <Carousel.Item>
              <img src={Image3} className="d-block w-100" alt="Third slide"
              />
            </Carousel.Item>
          </Carousel>
        </div>
    );
  }
}

export default PictureSlides;