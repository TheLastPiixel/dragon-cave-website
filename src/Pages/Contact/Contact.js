import "./Contact.css";
import React, { Component } from 'react';
import Map from "./ContactComponents/Map";
import HL from '../../Components/HL';
import ContactForm from '../../Components/ContactForm'

class Contact extends Component {
  render() {
    return (
      <div class="row" style={{margin: 0}}>
        <div class="col-sm-8 float-left" style={{margin: "0 auto", marginTop: "20px"}}>
          <Map />
        </div>

        <HL />

        <div class="col-sm-8" style={{margin: "0 auto", padding: "15px"}}>
          <div class="col-sm-6 float-left">
            <h1 class="Text">Contact Us</h1>
            <p class="Text"><b>Address:</b> 7, Jalan 17/54,
            Seksyen 17,
            46400 Petaling Jaya,
            Selangor,
            Malaysia</p>
            <p class="Text"><b>Open Hours:</b> Monday - Saturday (8am - 10pm)</p>
            <p class="Text"><b>Email:</b> <a href="mailto:dragoncave@gmail.com">dragoncave@gmail.com</a></p>
            <p class="Text"><b>Phone:</b> <a href="tel:+60124276181">+60 12 427 6181</a></p>
          </div>

          <div class="col-sm-6 float-left">
            <ContactForm />
          </div>
        </div>

      </div>
    );
  }
}

export default Contact;
