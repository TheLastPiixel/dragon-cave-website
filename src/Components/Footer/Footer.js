import './Footer.css';
import React, { Component } from 'react';
import InstagramIcon from '../../Content/Icon/instagram.svg';
import FacebookIcon from '../../Content/Icon/facebook.svg';
import WhatsAppIcon from '../../Content/Icon/whatsapp.svg';
import MessangerIcon from '../../Content/Icon/messanger.svg';
import DragonCaveIcon from '../../Content/Image/dragoncavelogo.png';

const AnchorStyle = {
  textDecoration: "none",
  margin: "0px",
}

const DirectoryText = {
  textAlign: "left",
  fontSize: "12pt",
  color: "#643f23",
  margin: "0px",
};

class Footer extends Component {
  render() {
    return (
      <div>
        <footer id="Footer" class="Footer" bg="light">
          <div class="row" style={{padding: "0px", width: "100vw", margin: "0px"}}>
            <div class="col-md-4">
              <div style={{width: "50%", float: "left", padding: "0px"}}> 
                  <img src={DragonCaveIcon} alt="DragonCave" class="Logo" />
              </div>
              <div class="SocialMediaDiv" style={{width: "50%", float: "right"}}>
                <a href="/" style={AnchorStyle}><p style={DirectoryText} className="DirectoryText">Home</p></a>
                <a href="/about" style={AnchorStyle}><p style={DirectoryText} className="DirectoryText">About</p></a>
                <a href="/contact" style={AnchorStyle}><p style={DirectoryText} className="DirectoryText">Contact Us</p></a>
              </div>
            </div>
            <div class="col-md-4 Copyright" style={{padding: "0px"}}>
              <div>
                <p class="CopyrightText">Copyright © 2020 Palazzo Versace Venture Sdn Bhd</p>
                <p class="CopyrightText">All Rights Reserved</p>
                <p class="CopyrightText">Designed By: Flux Studios</p>
              </div>
            </div>
            <div class="col-md-4 SocialMediaDiv" style={{padding: "20px"}}> 
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
        </footer>
      </div>
    );
  }
}

export default Footer;
