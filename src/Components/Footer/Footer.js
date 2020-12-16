import './Footer.css';
import React, { Component } from 'react';
import {Card, Button} from 'react-bootstrap';
import InstagramIcon from './instagram.svg';
import FacebookIcon from './facebook.svg';
import TwitterIcon from './twitter.svg';
import WhatsAppIcon from './whatsapp.svg';

class Footer extends Component {
  render() {
    return (
      <div>
        <Card.Footer id="Footer">
          <div class="row">
            <div class="col-md-4"> 
              <h1>| Links</h1>
              <h2>Home</h2>
              <h2>About</h2>
              <h2>Contact</h2>
            </div>
            <div class="col-md-4" />
            <div class="col-md-4"> 
              <h1>| Follow Us!</h1>
              <a href="https://www.facebook.com/Dragon-Cave-107730614461276" target="_blank">
                <img src={FacebookIcon} class="SocialMediaButton"/>
              </a>
              <a href="https://www.facebook.com/Dragon-Cave-107730614461276" target="_blank">
                <img src={InstagramIcon} class="SocialMediaButton"/>
              </a>
              <a href="https://www.facebook.com/Dragon-Cave-107730614461276" target="_blank">
                <img src={TwitterIcon} class="SocialMediaButton"/>
              </a>
              <a href="http://m.me/Dragon-Cave-107730614461276" target="_blank">
                <img src={WhatsAppIcon} class="SocialMediaButton"/>
              </a>
            </div>
          </div>
          <hr />
          <div class="row">
            <a class="btn-floating btn-tw" type="button" role="button"><i class="fab fa-twitter"></i></a>
            <div class="Copyright">
              <p>Copyright © 2020 Palazzo Versace Venture Sdn Bhd · All Rights Reserved · Designed By: Flux Studios</p>
            </div>
          </div>
        </Card.Footer>
      </div>
    );
  }
}

export default Footer;
