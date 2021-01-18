import './Footer.css';
import React, { Component } from 'react';
import {Card} from 'react-bootstrap';
import InstagramIcon from '../../Content/Icon/instagram.svg';
import FacebookIcon from '../../Content/Icon/facebook.svg';
import WhatsAppIcon from '../../Content/Icon/whatsapp.svg';
import MessangerIcon from '../../Content/Icon/messanger.svg';
import DragonCaveIcon from '../../Content/Image/dragoncavelogo.png';

class Footer extends Component {
  render() {
    return (
      <div>
        <Card.Footer id="Footer" class="Footer" bg="light">
          <div class="row">
            <div class="col-md-4"> 
              <img src={DragonCaveIcon} alt="DragonCave" class="Logo" />
            </div>
            <div class="col-md-4 Copyright">
              <div>
                <p class="CopyrightText">Copyright © 2020 Palazzo Versace Venture Sdn Bhd</p>
                <p class="CopyrightText">All Rights Reserved</p>
                <p class="CopyrightText">Designed By: Flux Studios</p>
              </div>
            </div>
            <div class="col-md-4 SocialMediaDiv"> 
              <a href="https://www.facebook.com/Dragon-Cave-107730614461276" alt="facebook" target="_blank" rel="noreferrer" class="SocialMediaButton">
                <img src={FacebookIcon} alt="facebook" class="SocialMediaImage"/>
              </a>
              <a href="https://www.facebook.com/Dragon-Cave-107730614461276" target="_blank" rel="noreferrer" class="SocialMediaButton">
                <img src={InstagramIcon} alt="instagram" class="SocialMediaImage"/>
              </a>
              <a href="https://wa.me/+60124276181" target="_blank" rel="noreferrer" class="SocialMediaButton">
                <img src={WhatsAppIcon} alt="whatsapp" class="SocialMediaImage"/>
              </a>
              <a href="https://m.me/Dragon-Cave-107730614461276" target="_blank" rel="noreferrer" class="SocialMediaButton">
                <img src={MessangerIcon} alt="messanger" class="SocialMediaImage"/>
              </a>
            </div>
          </div>
        </Card.Footer>
      </div>
    );
  }
}

export default Footer;
