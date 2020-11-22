import React, { Component } from 'react';
import './PictureSlides.css';
import Carousel from 'react-bootstrap/Carousel';
import Image1 from "./test.jpg";

class PictureSlides extends Component {
  render() {
    return (
      <div class="row">
        <div class="col-md-2" />
        <div class="col-md-8">
          <br />
          <Carousel class="slides">
            <Carousel.Item>
              <img
                src={Image1}
                className="d-block w-100"
                alt="First slide"
              />
              <Carousel.Caption>
                <h3>First slide label</h3>
                <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                src={Image1}
                className="d-block w-100"
                alt="Third slide"
              />

              <Carousel.Caption>
                <h3>Second slide label</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                src={Image1}
                className="d-block w-100"
                alt="Third slide"
              />

              <Carousel.Caption>
                <h3>Third slide label 3</h3>
                <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>
        </div>
      </div>
    );
  }
}

export default PictureSlides;