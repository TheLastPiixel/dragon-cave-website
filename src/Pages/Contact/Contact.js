import "./Contact.css";
import React, { Component } from 'react';
import Map from "./ContactComponents/Map";
import HL from '../../Components/HL';

class Contact extends Component {
  render() {
    return (
      <div class="row">
        <div class="col-sm-8" style={{margin: "0 auto"}}>

          <div class="col-sm-8 float-left" style={{height: "50vh", marginTop: "20px"}}>
            <Map />
          </div>

          <div class="col-sm-4 float-right" style={{padding: "20px"}}>
            <h1 class="Text">Contact</h1>
            <p class="Text"><b>Address:</b> L-3-15, Jaya shopping mall, Jalan Professor Khoo Kay Kim, Section 14, 46100 Petaling Jaya, Selangor, Malaysia</p>
            <p class="Text"><b>Email:</b> dragoncave@gmail.com</p>
            <p class="Text"><b>Phone:</b> +60379321523</p>
            <p class="Text"><b>Mobile:</b> +60379321523</p>
          </div>

        </div>
        <HL />
      </div>
    );
  }
}

export default Contact;
