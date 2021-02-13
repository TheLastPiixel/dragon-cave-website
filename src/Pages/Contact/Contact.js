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

        <div class="col-sm-8" style={{margin: "0 auto", padding: "15px", textAlign: "left"}}>
          <div class="col-sm-6 float-left">
            <h1>Contact Us</h1>
            <p><b>Address:</b> 7, Jalan 17/54,
            Seksyen 17,
            46400 Petaling Jaya,
            Selangor,
            Malaysia</p>
            <p><b>Open Hours:</b> Monday - Saturday (10:30am - 8:00pm)</p>
            <p><b>Email:</b> <a href="mailto:dragoncavegallery@gmail.com">dragoncavegallery@gmail.com</a></p>
            <p><b>Phone:</b> <a href="tel:+60124276181">+60 12 427 6181</a></p>
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
