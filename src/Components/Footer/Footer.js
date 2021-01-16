import './Footer.css';
import React, { Component } from 'react';
import {Card, Button} from 'react-bootstrap';
import InstagramIcon from '../../Content/Icon/instagram.svg';
import FacebookIcon from '../../Content/Icon/facebook.svg';
import WhatsAppIcon from '../../Content/Icon/whatsapp.svg';
import MessangerIcon from '../../Content/Icon/messanger.svg';

class Footer extends Component {
  render() {
    return (
      <div>
        <Card.Footer id="Footer">
          <div class="row">
            <div class="col-md-4"> 
              <h2>Home</h2>
              <h2>About</h2>
              <h2>Contact</h2>
            </div>
            <div class="col-md-4 Copyright">
              <div>
                <p class="CopyrightText">Copyright © 2020 Palazzo Versace Venture Sdn Bhd</p>
                <p class="CopyrightText">All Rights Reserved</p>
                <p class="CopyrightText">Designed By: Flux Studios</p>
              </div>
            </div>
            <div class="col-md-4 SocialMediaDiv"> 
              <a href="https://www.facebook.com/Dragon-Cave-107730614461276" target="_blank"  class="SocialMediaButton">
                <img src={FacebookIcon} class="SocialMediaImage"/>
              </a>
              <a href="https://www.facebook.com/Dragon-Cave-107730614461276" target="_blank" class="SocialMediaButton">
                <img src={InstagramIcon} class="SocialMediaImage"/>
              </a>
              <a href="http://m.me/Dragon-Cave-107730614461276" target="_blank" class="SocialMediaButton">
                <img src={WhatsAppIcon} class="SocialMediaImage"/>
              </a>
              <a href="https://m.me/Dragon-Cave-107730614461276" target="_blank" class="SocialMediaButton">
                <img src={MessangerIcon} class="SocialMediaImage"/>
              </a>
            </div>
          </div>
        </Card.Footer>
      </div>
    );
  }
}

export default Footer;
